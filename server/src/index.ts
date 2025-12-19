import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { RapGenerator } from './models/RapGenerator';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Český Rap Generátor Server',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Generuj jednu linku
app.get('/api/generate/line', (req: Request, res: Response) => {
  try {
    const seed = req.query.seed ? parseInt(req.query.seed as string) : undefined;
    const generator = new RapGenerator(seed);
    const line = generator.generateLine();
    
    res.json({
      success: true,
      data: line
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// Generuj verse (4 linky)
app.get('/api/generate/verse', (req: Request, res: Response) => {
  try {
    const seed = req.query.seed ? parseInt(req.query.seed as string) : undefined;
    const lineCount = req.query.lines ? parseInt(req.query.lines as string) : 4;
    
    const generator = new RapGenerator(seed);
    const verse = generator.generateVerse(Math.min(lineCount, 16));
    
    res.json({
      success: true,
      data: verse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// Generuj chorus
app.get('/api/generate/chorus', (req: Request, res: Response) => {
  try {
    const seed = req.query.seed ? parseInt(req.query.seed as string) : undefined;
    const generator = new RapGenerator(seed);
    const chorus = generator.generateChorus();
    
    res.json({
      success: true,
      data: chorus
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// Generuj kompletní skladbu
app.get('/api/generate/song', (req: Request, res: Response) => {
  try {
    const seed = req.query.seed ? parseInt(req.query.seed as string) : undefined;
    const verseCount = req.query.verses ? parseInt(req.query.verses as string) : 3;
    
    const generator = new RapGenerator(seed);
    const song = generator.generateSong(Math.min(verseCount, 10));
    
    res.json({
      success: true,
      data: song
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// Generuj formátovanou skladbu
app.get('/api/generate/song/formatted', (req: Request, res: Response) => {
  try {
    const seed = req.query.seed ? parseInt(req.query.seed as string) : undefined;
    const verseCount = req.query.verses ? parseInt(req.query.verses as string) : 3;
    
    const generator = new RapGenerator(seed);
    const formatted = generator.generateFormattedSong(Math.min(verseCount, 10));
    
    res.json({
      success: true,
      data: formatted
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// POST endpoint pro generování
app.post('/api/generate', (req: Request, res: Response) => {
  try {
    const { type = 'song', seed, options = {} } = req.body;
    const generator = new RapGenerator(seed);
    
    let result;
    
    switch (type) {
      case 'line':
        result = generator.generateLine();
        break;
      case 'verse':
        result = generator.generateVerse(options.lineCount || 4);
        break;
      case 'chorus':
        result = generator.generateChorus();
        break;
      case 'song':
      default:
        result = generator.generateSong(options.verseCount || 3);
        break;
    }
    
    res.json({
      success: true,
      type,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: (error as Error).message
    });
  }
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint nenalezen',
    path: req.path
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🎤 Český Rap Generátor Server běží na portu ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🎵 API: http://localhost:${PORT}/api`);
});

export default app;
