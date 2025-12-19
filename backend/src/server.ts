import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { rapGenerator, RapGeneratorOptions } from './generators/rapGenerator';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../../frontend')));

// API Routes

/**
 * Health check endpoint
 */
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    message: 'Rap Generator Server is running!',
    timestamp: new Date().toISOString()
  });
});

/**
 * Generuj rap text
 * POST /api/generate
 * Body: {
 *   theme?: "city" | "money" | "love" | "party" | "bragging" | "anger" | "success" | "hiphop"
 *   lines?: number (default: 8)
 *   tempo?: number (default: 95 BPM)
 * }
 */
app.post('/api/generate', (req: Request, res: Response) => {
  try {
    const options: RapGeneratorOptions = {
      theme: req.body.theme || 'city',
      lines: req.body.lines || 8,
      tempo: req.body.tempo || 95
    };
    
    // Validace
    if (options.lines && (options.lines < 4 || options.lines > 32)) {
      return res.status(400).json({
        error: 'Lines must be between 4 and 32'
      });
    }
    
    if (options.tempo && (options.tempo < 60 || options.tempo > 160)) {
      return res.status(400).json({
        error: 'Tempo must be between 60 and 160 BPM'
      });
    }
    
    const rap = rapGenerator.generateDetailed(options);
    
    res.json({
      success: true,
      data: rap,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error generating rap:', error);
    res.status(500).json({
      error: 'Failed to generate rap',
      message: error.message
    });
  }
});

/**
 * Rychlé generování
 * GET /api/generate?theme=city&lines=8&tempo=95
 */
app.get('/api/generate', (req: Request, res: Response) => {
  try {
    const options: RapGeneratorOptions = {
      theme: (req.query.theme as string) || 'city',
      lines: req.query.lines ? parseInt(req.query.lines as string) : 8,
      tempo: req.query.tempo ? parseInt(req.query.tempo as string) : 95
    };
    
    const rap = rapGenerator.generateDetailed(options);
    
    res.json({
      success: true,
      data: rap,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error generating rap:', error);
    res.status(500).json({
      error: 'Failed to generate rap',
      message: error.message
    });
  }
});

/**
 * Vrátí seznam dostupných témat
 */
app.get('/api/themes', (req: Request, res: Response) => {
  const themes = [
    {
      id: 'city',
      name: 'Město',
      description: 'Rap o městě, ulicích a životě ve městě'
    },
    {
      id: 'money',
      name: 'Peníze',
      description: 'Rap o penězích, bohatství a finančním úspěchu'
    },
    {
      id: 'love',
      name: 'Láska',
      description: 'Rap o lásce, vztazích a emocích'
    },
    {
      id: 'party',
      name: 'Párty',
      description: 'Rap o party, zábavě a tanci'
    },
    {
      id: 'bragging',
      name: 'Chvála',
      description: 'Rap o sobě, vlastních schopnostech a úspěchu'
    },
    {
      id: 'anger',
      name: 'Vztek',
      description: 'Agresivní rap o hnevu a zuřivosti'
    },
    {
      id: 'success',
      name: 'Úspěch',
      description: 'Rap o vítězství, slavě a titulek'
    },
    {
      id: 'hiphop',
      name: 'Hip-hop',
      description: 'Rap o hip-hopové kultuře a hudbě'
    }
  ];
  
  res.json({
    success: true,
    themes,
    timestamp: new Date().toISOString()
  });
});

/**
 * Vrátí informace o API
 */
app.get('/api/info', (req: Request, res: Response) => {
  res.json({
    name: 'Czech Rap Generator API',
    version: '1.0.0',
    description: 'API pro generování českých rapových textů',
    endpoints: {
      generate: {
        method: 'POST',
        path: '/api/generate',
        description: 'Generuj nový rap text',
        body: {
          theme: 'string (optional)',
          lines: 'number (optional, default: 8)',
          tempo: 'number (optional, default: 95)'
        }
      },
      themes: {
        method: 'GET',
        path: '/api/themes',
        description: 'Vrátí seznam dostupných témat'
      },
      health: {
        method: 'GET',
        path: '/api/health',
        description: 'Health check'
      }
    }
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  });
});

// Error handler
app.use((err: any, req: Request, res: Response) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🎤 Czech Rap Generator Server`);
  console.log(`🔗 Running on http://localhost:${PORT}`);
  console.log(`📝 API Docs: http://localhost:${PORT}/api/info`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health\n`);
});

export default app;
