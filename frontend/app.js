// API URL - automaticky zjistí z aktuální domény
const API_URL = window.location.origin + '/api';

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const themeSelect = document.getElementById('theme');
const linesInput = document.getElementById('lines');
const tempoInput = document.getElementById('tempo');
const outputBox = document.getElementById('output');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMsg = document.getElementById('errorMsg');
const metadataDiv = document.getElementById('metadata');

// State
let currentRap = null;

// Event Listeners
generateBtn.addEventListener('click', generateRap);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadRap);

/**
 * Generuj rap text přes API
 */
async function generateRap() {
    try {
        // Skryj předchozí chyby
        hideError();
        
        // Zobraz loading
        showLoading();
        
        // Připrav parametry
        const params = {
            theme: themeSelect.value,
            lines: parseInt(linesInput.value),
            tempo: parseInt(tempoInput.value)
        };
        
        // Pošli požadavek na server
        const response = await fetch(API_URL + '/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Chyba při generování');
        }
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error || 'Nepodařilo se generovat rap');
        }
        
        // Ulož vygenerovaný rap
        currentRap = data.data;
        
        // Zobraz výstup
        displayRap(currentRap);
        
        // Aktivuj tlačítka
        copyBtn.disabled = false;
        downloadBtn.disabled = false;
        
    } catch (error) {
        console.error('Error:', error);
        showError(error.message || 'Neznámá chyba');
    } finally {
        hideLoading();
    }
}

/**
 * Zobraz vygenerovaný rap
 */
function displayRap(rap) {
    // Zobraz text
    outputBox.innerHTML = '';
    outputBox.appendChild(createTextContent(rap.text));
    
    // Zobraz metadata
    updateMetadata(rap);
    metadataDiv.style.display = 'grid';
}

/**
 * Vytvoř HTML element s textem
 */
function createTextContent(text) {
    const pre = document.createElement('pre');
    pre.textContent = text;
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.wordWrap = 'break-word';
    return pre;
}

/**
 * Aktualizuj metadata
 */
function updateMetadata(rap) {
    const themeNames = {
        'city': '🏙️ Město',
        'money': '💰 Peníze',
        'love': '❤️ Láska',
        'party': '🎉 Párty',
        'bragging': '🌟 Chvála',
        'anger': '😤 Vztek',
        'success': '🏆 Úspěch',
        'hiphop': '🎧 Hip-hop'
    };
    
    document.getElementById('metaTheme').textContent = themeNames[rap.theme] || rap.theme;
    document.getElementById('metaLines').textContent = rap.lines;
    document.getElementById('metaTempo').textContent = rap.bpm + ' BPM';
    document.getElementById('metaDuration').textContent = rap.duration;
    document.getElementById('metaRhyme').textContent = rap.rhymeScheme;
}

/**
 * Kopíruj text do schránky
 */
async function copyToClipboard() {
    if (!currentRap) return;
    
    try {
        await navigator.clipboard.writeText(currentRap.text);
        
        // Vizuální zpětná vazba
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Zkopírováno!';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (error) {
        showError('Nepodařilo se zkopírovat text');
    }
}

/**
 * Stáhni rap text jako soubor
 */
function downloadRap() {
    if (!currentRap) return;
    
    // Vytvoř obsah souboru
    const content = `${currentRap.text}\n\n--- Metadata ---\nTéma: ${currentRap.theme}\nTempo: ${currentRap.bpm} BPM\nTrvání: ${currentRap.duration}\nRýmové schéma: ${currentRap.rhymeScheme}\n\nVygenerováno: ${new Date().toLocaleString('cs-CZ')}`;
    
    // Vytvoř blob
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Vytvoř odkaz a stáhni
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rap-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

/**
 * Zobraz loading
 */
function showLoading() {
    loadingDiv.style.display = 'block';
    outputBox.style.display = 'none';
    metadataDiv.style.display = 'none';
    generateBtn.disabled = true;
}

/**
 * Skryj loading
 */
function hideLoading() {
    loadingDiv.style.display = 'none';
    outputBox.style.display = 'block';
    generateBtn.disabled = false;
}

/**
 * Zobraz chybu
 */
function showError(message) {
    errorMsg.textContent = message;
    errorDiv.style.display = 'block';
    outputBox.style.display = 'none';
    metadataDiv.style.display = 'none';
}

/**
 * Skryj chybu
 */
function hideError() {
    errorDiv.style.display = 'none';
}

// Inicializace
console.log('🎤 Czech Rap Generator Frontend Loaded');
console.log('📡 API URL:', API_URL);
