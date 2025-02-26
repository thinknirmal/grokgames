const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let audioCtx = null;
let oscillatorX = null;
let oscillatorY = null;
let gainNodeX = null;
let gainNodeY = null;
let mixer = null;
let limiter = null;
let reverbNode = null;
let dryGainNode = null;
let wetGainNode = null;
let isPressed = false;
let cursorX = 0;
let cursorY = 0;
const baseFreq = 130.81; // C3

// Load GrokPad image once
const grokPadImg = new Image();
grokPadImg.src = 'GrokPad.png';
// Add onload handler to redraw canvas when image loads
grokPadImg.onload = function() {
  // Redraw canvas when image is loaded
  if (canvas) {
    drawCursor();
  }
};

let selectedQuantizer = 'hawaiian';
const selectedOctaves = 4;
let allowedNotesX = [];
let allowedNotesY = [];
let envelopeEnabled = true;
let timbreEnabled = true;
let duetEnabled = true;
let reverbEnabled = true;
let audioInitialized = false;

const scales = {
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  pentatonic_major: [0, 2, 4, 7, 9],
  pentatonic_minor: [0, 3, 5, 7, 10],
  blues: [0, 3, 5, 6, 7, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  harmonic_minor: [0, 2, 3, 5, 7, 8, 11],
  melodic_minor: [0, 2, 3, 5, 7, 9, 11],
  whole_tone: [0, 2, 4, 6, 8, 10],
  diminished: [0, 2, 3, 5, 6, 8, 9, 11],
  japanese: [0, 1, 5, 7, 8],
  arabic: [0, 1, 4, 5, 7, 8, 11],
  hungarian: [0, 2, 3, 6, 7, 8, 11],
  persian: [0, 1, 4, 5, 6, 8, 11],
  indian: [0, 1, 3, 4, 7, 8, 10],
  chinese: [0, 2, 4, 7, 9],
  egyptian: [0, 2, 5, 7, 10],
  romanian: [0, 2, 3, 6, 7, 9],
  klezmer: [0, 1, 4, 5, 7, 8, 10],
  balinese: [0, 1, 3, 7, 8],
  spanish: [0, 1, 4, 5, 7, 8, 10],
  hawaiian: [0, 2, 3, 7, 9],
  raga_bhairav: [0, 1, 4, 5, 7, 8, 11],
  raga_todi: [0, 1, 3, 6, 7, 8, 11],
  raga_yaman: [0, 2, 4, 6, 7, 9, 11],
  raga_bhairavi: [0, 1, 3, 5, 7, 8, 10],
  raga_kafi: [0, 2, 3, 5, 7, 9, 10],
  raga_asavari: [0, 2, 3, 5, 7, 8, 10],
  raga_desh: [0, 2, 3, 5, 7, 9, 10],
  raga_khamaj: [0, 2, 4, 5, 7, 9, 10],
  raga_durga: [0, 2, 4, 7, 9],
  raga_malkauns: [0, 3, 5, 8, 10],
  raga_charukeshi: [0, 2, 3, 5, 7, 8, 11],
  raga_marwa: [0, 1, 4, 6, 7, 9, 11],
  raga_purvi: [0, 1, 4, 6, 7, 8, 11],
  raga_shree: [0, 1, 4, 6, 7, 9, 10],
  raga_hindol: [0, 4, 6, 9, 10],
  raga_bageshri: [0, 2, 3, 5, 7, 8, 10],
  raga_jog: [0, 2, 4, 7, 9, 10],
  raga_bihag: [0, 2, 4, 6, 7, 9, 11],
  raga_ahir_bhairav: [0, 1, 4, 5, 7, 9, 10],
  raga_chandrakauns: [0, 3, 6, 8, 10],
  raga_kirwani: [0, 2, 3, 5, 7, 8, 11],
  raga_miyan_ki_malhar: [0, 2, 4, 5, 7, 8, 10],
  raga_kedar: [0, 2, 4, 5, 7, 9, 11],
  gamelan: [0, 1, 5, 7, 10],
  byzantine: [0, 1, 4, 5, 7, 8, 11],
  african: [0, 2, 4, 7, 9],
  ethiopian: [0, 2, 4, 5, 7, 9, 11],
  kumoi: [0, 2, 3, 7, 9],
  flamenco: [0, 1, 4, 5, 7, 8, 11],
  cuban: [0, 2, 3, 5, 7, 8, 10],
  brazilian: [0, 2, 4, 5, 7, 9, 11],
  algerian: [0, 2, 3, 6, 7, 8, 11],
  prometheus: [0, 2, 4, 6, 9, 10],
  enigmatic: [0, 1, 4, 6, 8, 10, 11],
  double_harmonic: [0, 1, 4, 5, 7, 8, 11],
  neapolitan: [0, 1, 3, 5, 7, 8, 11],
  super_locrian: [0, 1, 3, 4, 6, 8, 10],
  yo: [0, 2, 5, 7, 9],
  iwato: [0, 1, 5, 6, 10]
};

// Create audio enable button
function createEnableAudioButton() {
  const button = document.createElement('button');
  button.id = 'enable-audio-button';
  button.textContent = 'Tap to Play';
  button.style.position = 'absolute';
  button.style.top = '50%';
  button.style.left = '50%';
  button.style.transform = 'translate(-50%, -50%)';
  button.style.padding = '20px 40px';
  button.style.fontSize = '24px';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '10px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '100';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  
  button.addEventListener('click', initializeAudio);
  
  document.body.appendChild(button);
}

// Initialize audio context and oscillators
async function initializeAudio() {
  if (audioInitialized) return;
  
  // Create audio context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Initialize audio system
  initAudio();
  
  // Remove the button
  const button = document.getElementById('enable-audio-button');
  if (button) {
    button.remove();
  }
  
  audioInitialized = true;
  
  // Resume audio context (needed for iOS)
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }
}

// Set initial canvas dimensions
function resizeCanvas() {
  // Set canvas dimensions to match the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Set canvas CSS dimensions to match as well (important for touch coordinate accuracy)
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  
  // Reset cursor position if it's outside the new canvas dimensions
  if (cursorX > canvas.width) cursorX = canvas.width / 2;
  if (cursorY > canvas.height) cursorY = canvas.height / 2;
  
  drawCursor(); // Redraw grid and cursor
}

// Get accurate coordinates relative to the canvas
function getCanvasCoordinates(clientX, clientY) {
  // Get the canvas's position and dimensions
  const rect = canvas.getBoundingClientRect();
  
  // Calculate the scale factors in case the canvas is being scaled
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  
  // Calculate coordinates relative to the canvas, accounting for scaling
  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;
  
  return { x, y };
}

// Update allowed notes based on quantizer and octaves
function updateAllowedNotes() {
  const totalSemitones = 12 * selectedOctaves;
  if (selectedQuantizer !== 'theremin') {
    const scale = scales[selectedQuantizer];
    allowedNotesX = [];
    allowedNotesY = [];
    for (let k = 0; k <= selectedOctaves; k++) {
      scale.forEach(offset => {
        const s = offset + 12 * k;
        if (s <= totalSemitones) {
          allowedNotesX.push(s);
          allowedNotesY.push(s);
        }
      });
    }
  } else {
    // Theremin mode: all semitones allowed
    allowedNotesX = Array.from({ length: totalSemitones + 1 }, (_, i) => i);
    allowedNotesY = Array.from({ length: totalSemitones + 1 }, (_, i) => i);
  }
}

// Get quantized semitone based on position and dimension (X or Y)
function getQuantizedSemitone(pos, dim) {
  const maxPos = dim === 'X' ? canvas.width : canvas.height;
  let s;
  if (dim === 'Y') {
    // Invert the mapping for Y: top is high pitch, bottom is low pitch
    s = ((maxPos - pos) / maxPos) * (12 * selectedOctaves);
  } else {
    s = (pos / maxPos) * (12 * selectedOctaves);
  }
  if (selectedQuantizer === 'theremin') {
    return s;
  } else {
    const allowedNotes = dim === 'X' ? allowedNotesX : allowedNotesY;
    let closest = allowedNotes.reduce((prev, curr) => Math.abs(curr - s) < Math.abs(prev - s) ? curr : prev);
    return closest;
  }
}

// Get background color based on horizontal semitone
function getBackgroundColor(s_x) {
  const maxS = 12 * selectedOctaves;
  const hue = (s_x / maxS) * 360;
  return `hsl(${hue}, 20%, 20%)`;
}

// Draw grid: vertical lines for X, horizontal lines for Y if duet is enabled
function drawGrid() {
  const totalSemitones = 12 * selectedOctaves;

  // Draw vertical lines for X (horizontal pitch)
  if (selectedQuantizer === 'theremin') {
    for (let i = 0; i <= totalSemitones; i++) {
      const x = (i / totalSemitones) * canvas.width;
      
      // Check if this is an octave boundary (every 12 semitones)
      const isOctaveBoundary = i % 12 === 0;
      
      // Set line style based on whether it's an octave boundary
      ctx.strokeStyle = isOctaveBoundary ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = isOctaveBoundary ? 2 : 1;
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  } else {
    // Draw all note boundaries first
    for (let i = 0; i < allowedNotesX.length - 1; i++) {
      const note1 = allowedNotesX[i];
      const note2 = allowedNotesX[i + 1];
      const boundary = (note1 + note2) / 2;
      const x = (boundary / totalSemitones) * canvas.width;
      
      // Check if this boundary is near an octave change
      const isNearOctaveBoundary = Math.floor(note1 / 12) !== Math.floor(note2 / 12);
      
      // Set line style based on whether it's near an octave boundary
      ctx.strokeStyle = isNearOctaveBoundary ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = isNearOctaveBoundary ? 2 : 1;
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }

  // Draw horizontal lines for Y (vertical pitch) only if duet is enabled
  if (duetEnabled) {
    if (selectedQuantizer === 'theremin') {
      for (let i = 0; i <= totalSemitones; i++) {
        const y = canvas.height - (i / totalSemitones) * canvas.height;
        
        // Check if this is an octave boundary (every 12 semitones)
        const isOctaveBoundary = i % 12 === 0;
        
        // Set line style based on whether it's an octave boundary
        ctx.strokeStyle = isOctaveBoundary ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = isOctaveBoundary ? 2 : 1;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    } else {
      // Draw all note boundaries
      for (let i = 0; i < allowedNotesY.length - 1; i++) {
        const note1 = allowedNotesY[i];
        const note2 = allowedNotesY[i + 1];
        const boundary = (note1 + note2) / 2;
        const y = canvas.height - (boundary / totalSemitones) * canvas.height;
        
        // Check if this boundary is near an octave change
        const isNearOctaveBoundary = Math.floor(note1 / 12) !== Math.floor(note2 / 12);
        
        // Set line style based on whether it's near an octave boundary
        ctx.strokeStyle = isNearOctaveBoundary ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = isNearOctaveBoundary ? 2 : 1;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }
}

// Draw watermark text
function drawWatermark() {
  ctx.save();
  
  // Draw GrokPad.png image
  const imgWidth = 160; // Adjust as needed
  const imgHeight = 46; // Adjust as needed
  const imgX = canvas.width - 178; // Position to the left of the text
  const imgY = canvas.height - 60; // Align with the text
  
  // Draw the image if it's loaded
  if (grokPadImg.complete && grokPadImg.naturalWidth > 0) {
    ctx.drawImage(grokPadImg, imgX, imgY, imgWidth, imgHeight);
  }
  
  // Draw the text
  ctx.font = '13px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.textAlign = 'end';
  ctx.textBaseline = 'bottom';
  ctx.fillText('by NIRMAL', canvas.width - 20, canvas.height - 8);
  
  ctx.restore();
}

// Draw circular cursor
function drawCursor() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawWatermark();
  if (cursorX >= 0 && cursorY >= 0) {
    // Create a radial gradient for the feathered glow effect
    const cursorRadius = 90;
    const gradient = ctx.createRadialGradient(
      cursorX, cursorY, 0,           // Inner circle center and radius
      cursorX, cursorY, cursorRadius // Outer circle center and radius
    );
    
    // Set gradient colors with more feathering
    const innerColor = isPressed ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.5)';
    const outerColor = isPressed ? 'rgba(255, 0, 0, 0)' : 'rgba(255, 255, 255, 0)';
    
    // Add more color stops for smoother feathering
    gradient.addColorStop(0, innerColor);
    gradient.addColorStop(0.3, isPressed ? 'rgba(255, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(0.5, isPressed ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(0.7, isPressed ? 'rgba(255, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, outerColor);
    
    // Draw the glow
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, cursorRadius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Add a small solid core in the center
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = isPressed ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 255, 255, 0.3)';
    ctx.fill();
  }
}

// Initialize audio system
function initAudio() {
  if (!limiter) {
    limiter = audioCtx.createDynamicsCompressor();
    limiter.threshold.value = -6.0;  // Less aggressive threshold
    limiter.knee.value = 12.0;       // Softer knee for smoother compression
    limiter.ratio.value = 12.0;      // Less aggressive ratio
    limiter.attack.value = 0.003;    // Slightly faster attack
    limiter.release.value = 0.25;    // Longer release
    limiter.connect(audioCtx.destination);
  }

  if (!mixer) {
    mixer = audioCtx.createGain();
    mixer.gain.value = 0.7; // Reduce overall volume
    mixer.connect(limiter);
  }

  // Create reverb nodes
  if (!reverbNode) {
    reverbNode = audioCtx.createConvolver();
    reverbNode.buffer = createCanyonEchoImpulseResponse();
  }

  if (!dryGainNode) {
    dryGainNode = audioCtx.createGain();
    dryGainNode.gain.value = 0.6; // Dry signal level
  }

  if (!wetGainNode) {
    wetGainNode = audioCtx.createGain();
    wetGainNode.gain.value = 0.4; // Wet signal level
    wetGainNode.connect(mixer);
  }

  // Connect reverb
  reverbNode.connect(wetGainNode);
  dryGainNode.connect(mixer);

  if (!gainNodeX) {
    gainNodeX = audioCtx.createGain();
    gainNodeX.gain.value = 0;
    // Connect to both dry and reverb paths
    gainNodeX.connect(dryGainNode);
    if (reverbEnabled) {
      gainNodeX.connect(reverbNode);
    }
  }

  if (!oscillatorX) {
    oscillatorX = audioCtx.createOscillator();
    oscillatorX.type = 'sine';
    oscillatorX.connect(gainNodeX);
    oscillatorX.start();
  }

  if (!gainNodeY) {
    gainNodeY = audioCtx.createGain();
    gainNodeY.gain.value = 0;
    // Connect to both dry and reverb paths
    gainNodeY.connect(dryGainNode);
    if (reverbEnabled) {
      gainNodeY.connect(reverbNode);
    }
  }

  if (!oscillatorY) {
    oscillatorY = audioCtx.createOscillator();
    oscillatorY.type = 'sine';
    oscillatorY.connect(gainNodeY);
    oscillatorY.start();
  }
}

// Create a canyon-echo style impulse response
function createCanyonEchoImpulseResponse() {
  // Canyon echo: long decay time, sparse early reflections, high diffusion
  const sampleRate = audioCtx.sampleRate;
  const duration = 2.0;
  const decay = 1.5;
  const bufferLength = sampleRate * duration;
  const buffer = audioCtx.createBuffer(2, bufferLength, sampleRate);
  
  // Get the audio data
  const leftChannel = buffer.getChannelData(0);
  const rightChannel = buffer.getChannelData(1);
  
  // Create the canyon echo effect
  for (let i = 0; i < bufferLength; i++) {
    // Initial impulse
    if (i === 0) {
      leftChannel[i] = 1.0;
      rightChannel[i] = 1.0;
    } else {
      // Canyon echoes: create more distinct, repeating echoes
      const time = i / sampleRate;
      const amplitude = Math.exp(-time / decay);
      
      // Create more pronounced, distinct echoes at regular intervals with longer delays
      // First set of strong echoes - primary reflections
      if (i === Math.floor(sampleRate * 0.35) || // 350ms delay
          i === Math.floor(sampleRate * 0.7) ||  // 700ms delay
          i === Math.floor(sampleRate * 1.05) || // 1050ms delay
          i === Math.floor(sampleRate * 1.4)) {  // 1400ms delay
        const echo = amplitude * 0.8; // Stronger echo
        leftChannel[i] = echo;
        rightChannel[i] = echo * 0.9; // Slight stereo variation
      }
      // Second set of echoes - secondary reflections
      else if (i === Math.floor(sampleRate * 0.45) || 
               i === Math.floor(sampleRate * 0.8) ||
               i === Math.floor(sampleRate * 1.15) ||
               i === Math.floor(sampleRate * 1.5)) {
        const echo = amplitude * 0.6;
        leftChannel[i] = echo * 0.9;
        rightChannel[i] = echo;
      }
      // Third set of echoes - tertiary reflections
      else if (i === Math.floor(sampleRate * 0.55) || 
               i === Math.floor(sampleRate * 0.9) ||
               i === Math.floor(sampleRate * 1.25) ||
               i === Math.floor(sampleRate * 1.6)) {
        const echo = amplitude * 0.5;
        leftChannel[i] = echo;
        rightChannel[i] = echo * 0.85;
      }
      // Ambient reverb between distinct echoes
      else {
        const ambient = amplitude * 0.01 * Math.random();
        leftChannel[i] = ambient;
        rightChannel[i] = ambient;
      }
    }
  }
  
  return buffer;
}

// Start sound and setup audio graph
async function startSound(e) {
  // Check if audio is initialized
  if (!audioInitialized) {
    return;
  }

  // Ensure audio context is running
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  
  // Cancel any ongoing release ramps
  gainNodeX.gain.cancelScheduledValues(now);
  if (duetEnabled) {
    gainNodeY.gain.cancelScheduledValues(now);
  }

  const relativeX = e.clientX;
  const relativeY = e.clientY;
  const s_x = getQuantizedSemitone(relativeX, 'X');
  const frequencyX = baseFreq * Math.pow(2, s_x / 12);

  // Update oscillator parameters
  if (oscillatorX.type !== (timbreEnabled ? 'triangle' : 'sine')) {
    oscillatorX.type = timbreEnabled ? 'triangle' : 'sine';
  }
  oscillatorX.frequency.setValueAtTime(frequencyX, now);

  if (duetEnabled) {
    const s_y = getQuantizedSemitone(relativeY, 'Y');
    const frequencyY = baseFreq * Math.pow(2, s_y / 12);
    if (oscillatorY.type !== (timbreEnabled ? 'triangle' : 'sine')) {
      oscillatorY.type = timbreEnabled ? 'triangle' : 'sine';
    }
    oscillatorY.frequency.setValueAtTime(frequencyY, now);
  }

  // Get current gain value to start from
  const currentGainX = gainNodeX.gain.value;
  const currentGainY = duetEnabled ? gainNodeY.gain.value : 0;
  
  // Apply envelope with minimal attack time
  const attackTime = envelopeEnabled ? 0.05 : 0.01;
  const targetGainX = duetEnabled ? 0.4 : 0.8;
  const targetGainY = 0.4;

  // Start from current gain value and ramp to target
  gainNodeX.gain.setValueAtTime(currentGainX, now);
  gainNodeX.gain.linearRampToValueAtTime(targetGainX, now + attackTime);

  if (duetEnabled) {
    gainNodeY.gain.setValueAtTime(currentGainY, now);
    gainNodeY.gain.linearRampToValueAtTime(targetGainY, now + attackTime);
  }

  canvas.style.backgroundColor = getBackgroundColor(s_x);
}

// Update sound based on movement
function updateSound(e) {
  if (!audioInitialized) return;
  
  const now = audioCtx.currentTime;
  const relativeX = e.clientX;
  const relativeY = e.clientY;
  const s_x = getQuantizedSemitone(relativeX, 'X');
  const frequencyX = baseFreq * Math.pow(2, s_x / 12);
  
  // Immediate frequency changes
  oscillatorX.frequency.setValueAtTime(frequencyX, now);

  if (duetEnabled) {
    const s_y = getQuantizedSemitone(relativeY, 'Y');
    const frequencyY = baseFreq * Math.pow(2, s_y / 12);
    oscillatorY.frequency.setValueAtTime(frequencyY, now);
  }

  canvas.style.backgroundColor = getBackgroundColor(s_x);
}

// Stop sound and reset
function stopSound() {
  if (!audioInitialized || !gainNodeX) return;
  
  const now = audioCtx.currentTime;
  const releaseTime = envelopeEnabled ? 1.0 : 0.1;
  
  // Get current gain values
  const currentGainX = gainNodeX.gain.value;
  const currentGainY = duetEnabled ? gainNodeY.gain.value : 0;
  
  // Cancel any scheduled values and start release from current gain
  gainNodeX.gain.cancelScheduledValues(now);
  gainNodeX.gain.setValueAtTime(currentGainX, now);
  gainNodeX.gain.linearRampToValueAtTime(0, now + releaseTime);

  if (duetEnabled) {
    gainNodeY.gain.cancelScheduledValues(now);
    gainNodeY.gain.setValueAtTime(currentGainY, now);
    gainNodeY.gain.linearRampToValueAtTime(0, now + releaseTime);
  }

  // Canyon echo effect: enhance reverb on note release
  if (reverbEnabled) {
    // Temporarily boost the wet signal for a more pronounced echo effect
    wetGainNode.gain.cancelScheduledValues(now);
    wetGainNode.gain.setValueAtTime(wetGainNode.gain.value, now);
    wetGainNode.gain.linearRampToValueAtTime(0.7, now + 0.1); // Quick boost
    wetGainNode.gain.linearRampToValueAtTime(0.4, now + 1.5);

    // Gradually reduce the dry signal for a more distant echo effect
    dryGainNode.gain.cancelScheduledValues(now);
    dryGainNode.gain.setValueAtTime(dryGainNode.gain.value, now);
    dryGainNode.gain.linearRampToValueAtTime(0.3, now + releaseTime); // Fade dry signal faster
  }

  canvas.style.backgroundColor = 'black';
}

// Event listeners for mouse and touch
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  const coords = getCanvasCoordinates(e.clientX, e.clientY);
  cursorX = coords.x;
  cursorY = coords.y;
  drawCursor();
  
  // Create a modified event object with the corrected coordinates
  const modifiedEvent = {
    clientX: coords.x,
    clientY: coords.y
  };
  startSound(modifiedEvent);
});

canvas.addEventListener('mousemove', (e) => {
  const coords = getCanvasCoordinates(e.clientX, e.clientY);
  cursorX = coords.x;
  cursorY = coords.y;
  drawCursor();
  if (isPressed) {
    // Create a modified event object with the corrected coordinates
    const modifiedEvent = {
      clientX: coords.x,
      clientY: coords.y
    };
    updateSound(modifiedEvent);
  }
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;
  drawCursor();
  stopSound();
});

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  isPressed = true;
  const touch = e.touches[0];
  const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
  cursorX = coords.x;
  cursorY = coords.y;
  drawCursor();
  
  // Create a modified touch object with the corrected coordinates
  const modifiedTouch = {
    clientX: coords.x,
    clientY: coords.y
  };
  startSound(modifiedTouch);
}, false);

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
  cursorX = coords.x;
  cursorY = coords.y;
  drawCursor();
  
  // Create a modified touch object with the corrected coordinates
  const modifiedTouch = {
    clientX: coords.x,
    clientY: coords.y
  };
  updateSound(modifiedTouch);
}, false);

canvas.addEventListener('touchend', (e) => {
  e.preventDefault();
  isPressed = false;
  drawCursor();
  stopSound();
}, false);

// Resize event listener
window.addEventListener('resize', resizeCanvas);

// Add window load event to ensure canvas is drawn when page loads
window.addEventListener('load', function() {
  resizeCanvas();
  updateAllowedNotes();
  drawCursor();
});

// Event listeners for controls
document.getElementById('quantizer').addEventListener('change', (e) => {
  selectedQuantizer = e.target.value;
  updateAllowedNotes();
  drawCursor();
});

document.getElementById('timbre').addEventListener('change', (e) => {
  timbreEnabled = e.target.checked;
});

document.getElementById('duet').addEventListener('change', (e) => {
  duetEnabled = e.target.checked;
  drawCursor(); // Redraw grid to show/hide horizontal lines
});

// Initial setup
resizeCanvas();
updateAllowedNotes();
drawCursor();
createEnableAudioButton(); // Create the enable audio button on page load