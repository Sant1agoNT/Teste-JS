const pads = document.querySelectorAll('.pad');
const chordSelect = document.getElementById('chordSelect');
const presetSelect = document.getElementById('presetSelect');

if (!pads || !chordSelect || !presetSelect) {
  console.error('Elementos do DOM não encontrados. Verifique seus IDs ou classes.');
  // situação de erro DOM  (...).
}

// Cache de elementos DOM
const elementsCache = {
  pads: document.querySelectorAll('.pad'),
  chordSelect: document.getElementById('chordSelect'),
  presetSelect: document.getElementById('presetSelect'),
};

// acessa esses elementos a partir do cache
const firstPad = elementsCache.pads[0];
const selectedChord = elementsCache.chordSelect.value;

const presets = {
  atmospheric: {
    major: [
      '/src/audios/A.mp3',
      '/src/audios/A_sharp.mp3',
      '/src/audios/B.mp3',
      '/src/audios/C.mp3',
      '/src/audios/C_sharp.mp3',
      '/src/audios/D.mp3',
      '/src/audios/D_sharp.mp3',
      '/src/audios/E.mp3',
      '/src/audios/F.mp3',
      '/src/audios/F_sharp.mp3',
      '/src/audios/G.mp3',
      '/src/audios/G_sharp.mp3',
    ],
    minor: [
      '/src/audios/Am.mp3',
      '/src/audios/A_sharp_m.mp3',
      '/src/audios/Bm.mp3',
      '/src/audios/Cm.mp3',
      '/src/audios/C_sharp_m.mp3',
      '/src/audios/Dm.mp3',
      '/src/audios/D_sharp_m.mp3',
      '/src/audios/Em.mp3',
      '/src/audios/Fm.mp3',
      '/src/audios/F_sharp_m.mp3',
      '/src/audios/Gm.mp3',
      '/src/audios/G_sharp_m.mp3',
    ],
  },
  cathedral: {
    major: [
      '/src/PADS/CATHEDRAL PAD/A.mp3',
      '/src/PADS/CATHEDRAL PAD/Ab.mp3',
      '/src/PADS/CATHEDRAL PAD/B.mp3',
      '/src/PADS/CATHEDRAL PAD/C.mp3',
      '/src/PADS/CATHEDRAL PAD/Cb.mp3',
      '/src/PADS/CATHEDRAL PAD/D.mp3',
      '/src/PADS/CATHEDRAL PAD/Db.mp3',
      '/src/PADS/CATHEDRAL PAD/E.mp3',
      '/src/PADS/CATHEDRAL PAD/F.mp3',
      '/src/PADS/CATHEDRAL PAD/Fb.mp3',
      '/src/PADS/CATHEDRAL PAD/G.mp3',
      '/src/PADS/CATHEDRAL PAD/Gb.mp3',
    ],
  },
  celebre: {
    major: [
      '/src/PADS/CELEBRE PAD/A.mp3',
      '/src/PADS/CELEBRE PAD/Ab.mp3',
      '/src/PADS/CELEBRE PAD/B.mp3',
      '/src/PADS/CELEBRE PAD/C.mp3',
      '/src/PADS/CELEBRE PAD/Cb.mp3',
      '/src/PADS/CELEBRE PAD/D.mp3',
      '/src/PADS/CELEBRE PAD/Db.mp3',
      '/src/PADS/CELEBRE PAD/E.mp3',
      '/src/PADS/CELEBRE PAD/F.mp3',
      '/src/PADS/CELEBRE PAD/Fb.mp3',
      '/src/PADS/CELEBRE PAD/G.mp3',
      '/src/PADS/CELEBRE PAD/Gb.mp3',
    ],
  },
  guitar: {
    major: [
      '/src/PADS/GUITAR PAD/A.mp3',
      '/src/PADS/GUITAR PAD/Ab.mp3',
      '/src/PADS/GUITAR PAD/B.mp3',
      '/src/PADS/GUITAR PAD/C.mp3',
      '/src/PADS/GUITAR PAD/Cb.mp3',
      '/src/PADS/GUITAR PAD/D.mp3',
      '/src/PADS/GUITAR PAD/Db.mp3',
      '/src/PADS/GUITAR PAD/E.mp3',
      '/src/PADS/GUITAR PAD/F.mp3',
      '/src/PADS/GUITAR PAD/Fb.mp3',
      '/src/PADS/GUITAR PAD/G.mp3',
      '/src/PADS/GUITAR PAD/Gb.mp3',
    ],
  },
  harmony: {
    major: [
      '/src/PADS/HARMONY PAD/A.mp3',
      '/src/PADS/HARMONY PAD/Ab.mp3',
      '/src/PADS/HARMONY PAD/B.mp3',
      '/src/PADS/HARMONY PAD/C.mp3',
      '/src/PADS/HARMONY PAD/Cb.mp3',
      '/src/PADS/HARMONY PAD/D.mp3',
      '/src/PADS/HARMONY PAD/Db.mp3',
      '/src/PADS/HARMONY PAD/E.mp3',
      '/src/PADS/HARMONY PAD/F.mp3',
      '/src/PADS/HARMONY PAD/Fb.mp3',
      '/src/PADS/HARMONY PAD/G.mp3',
      '/src/PADS/HARMONY PAD/Gb.mp3',
    ],
  },
  morning: {
    major: [
      '/src/PADS/MORNING PAD/A.mp3',
      '/src/PADS/MORNING PAD/Ab.mp3',
      '/src/PADS/MORNING PAD/B.mp3',
      '/src/PADS/MORNING PAD/C.mp3',
      '/src/PADS/MORNING PAD/Cb.mp3',
      '/src/PADS/MORNING PAD/D.mp3',
      '/src/PADS/MORNING PAD/Db.mp3',
      '/src/PADS/MORNING PAD/E.mp3',
      '/src/PADS/MORNING PAD/F.mp3',
      '/src/PADS/MORNING PAD/Fb.mp3',
      '/src/PADS/MORNING PAD/G.mp3',
      '/src/PADS/MORNING PAD/Gb.mp3',
    ],
  },
  sreverse: {
    major: [
      '/src/PADS/SPACE REVERSE PAD/A.mp3',
      '/src/PADS/SPACE REVERSE PAD/Ab.mp3',
      '/src/PADS/SPACE REVERSE PAD/B.mp3',
      '/src/PADS/SPACE REVERSE PAD/C.mp3',
      '/src/PADS/SPACE REVERSE PAD/Cb.mp3',
      '/src/PADS/SPACE REVERSE PAD/D.mp3',
      '/src/PADS/SPACE REVERSE PAD/Db.mp3',
      '/src/PADS/SPACE REVERSE PAD/E.mp3',
      '/src/PADS/SPACE REVERSE PAD/F.mp3',
      '/src/PADS/SPACE REVERSE PAD/Fb.mp3',
      '/src/PADS/SPACE REVERSE PAD/G.mp3',
      '/src/PADS/SPACE REVERSE PAD/Gb.mp3',
    ],
  },
  
  shimmerII: {
    major: [
      '/src/PADS/SHIMMER PAD II/A.mp3',
      '/src/PADS/SHIMMER PAD II/Ab.mp3',
      '/src/PADS/SHIMMER PAD II/B.mp3',
      '/src/PADS/SHIMMER PAD II/C.mp3',
      '/src/PADS/SHIMMER PAD II/Cb.mp3',
      '/src/PADS/SHIMMER PAD II/D.mp3',
      '/src/PADS/SHIMMER PAD II/Db.mp3',
      '/src/PADS/SHIMMER PAD II/E.mp3',
      '/src/PADS/SHIMMER PAD II/F.mp3',
      '/src/PADS/SHIMMER PAD II/Fb.mp3',
      '/src/PADS/SHIMMER PAD II/G.mp3',
      '/src/PADS/SHIMMER PAD II/Gb.mp3',
    ],
  },
  // Adicione mais presets conforme necessário
};

console.log ('Seja bem vindo ao BolaPads');

let activeAudio = null;
let currentChord = 'major';
let currentPreset = 'atmospheric';

// Define a variável loadedAudios como um objeto vazio no início
const loadedAudios = {};

// Crie um pool de objetos de áudio reutilizáveis
const audioPool = [];

// Função para criar ou reutilizar um objeto de áudio a partir do pool
function getAudio() {
  if (audioPool.length > 0) {
    return audioPool.pop();
  } else {
    return new Audio();
  }
}

// Função para liberar um objeto de áudio de volta ao pool após o uso
function releaseAudio(audio, pad) {
  if (!audio) {
    console.error('Tentativa de liberar objeto de áudio nulo.');
    return;
  }
  audio.pause();
  audio.currentTime = 0;
  audioPool.push(audio);
}


function updatePadLabels() {
  const noteSuffix = currentChord === 'major' ? '' : 'm';
  const chordLabels =
    currentPreset === 'cathedral' ||
    currentPreset === 'celebre' ||
    currentPreset === 'guitar' ||
    currentPreset === 'harmony' ||
    currentPreset === 'morning' ||
    currentPreset === 'sreverse' ||
    currentPreset === 'shimmerII'
      ? 'major'
      : currentChord;

  pads.forEach((pad) => {
    const note = pad.getAttribute('data-note');
    pad.textContent = chordLabels === 'major' ? note : note + noteSuffix;
  });
}

// Função para carregar áudios de um preset específico sob demanda
function loadPresetOnDemand(preset) {
  if (currentPreset === 'cathedral' ||
      currentPreset === 'celebre' ||
      currentPreset === 'guitar' ||
      currentPreset === 'harmony' ||
      currentPreset === 'morning' ||
      currentPreset === 'sreverse' ||
      currentPreset === 'shimmerII') {
    // Se o preset não precisa de carregamento sob demanda, saia da função
    return;
  }

  if (!loadedAudios[preset]) {
    // Carregue os áudios deste preset dinamicamente apenas se ainda não estiverem carregados
    const chordType = presets[preset]?.hasOwnProperty(currentChord) ? currentChord : 'major';
    const audioFiles = presets[preset][chordType] || [];
    pads.forEach((pad, index) => {
      pad.audio.src = audioFiles[index] || '';
      // Atualize a etiqueta do pad:
      updatePadLabels();
    });

    // Marque o preset como carregado
    loadedAudios[preset] = true;
  }
}

function loadPreset(preset) {
  if (!presets[preset]) {
    console.error(`Preset "${preset}" não encontrado.`);
    return;
  }
  currentPreset = preset;
  const chordType = presets[preset]?.hasOwnProperty(currentChord) ? currentChord : 'major';
  const audioFiles = presets[preset][chordType] || [];
  pads.forEach((pad, index) => {
    pad.audio.src = audioFiles[index] || '';
    // Atualize a etiqueta do pad:
    updatePadLabels();
  });

  chordSelect.disabled =
    preset === 'cathedral' ||
    preset === 'celebre' ||
    preset === 'guitar' ||
    preset === 'harmony' ||
    preset === 'morning' ||
    preset === 'sreverse' ||
    preset === 'shimmerII';

  if (chordSelect.disabled) {
    chordSelect.value = 'major';
    updateButtonLabels('major');
  } else {
    chordSelect.disabled = false;
  }
}

pads.forEach((pad, index) => {
  const audio = getAudio(); // Obtenha um objeto de áudio do pool
  const audioFiles = presets[currentPreset][currentChord];
  if (audioFiles && index < audioFiles.length) {
    audio.src = audioFiles[index];
    audio.loop = true;
    // Configurar para carregamento assíncrono
    audio.preload = 'auto'; // Outras opções: 'metadata', 'none'
    pad.audio = audio;
    pad.addEventListener('click', () => toggleAudio(pad));
  } else {
    pad.audio = audio;
  }
});

chordSelect.addEventListener('change', () => {
  currentChord = chordSelect.value;
  loadPreset(currentPreset);
  updateButtonLabels(currentChord);
});

presetSelect.addEventListener('change', () => {
  loadPreset(presetSelect.value);
  loadPresetOnDemand(presetSelect.value);
  updateButtonLabels(currentChord);
});

function toggleAudio(pad) {
  console.log('Tentando reproduzir áudio para o pad:', pad.getAttribute('data-note'));
  if (activeAudio !== pad.audio) {
    console.log('Iniciando novo áudio');
    stopAllAudios();
    activeAudio = pad.audio;
    activeAudio.currentTime = 0;
    activeAudio.play()
      .then(() => {
        console.log('Áudio reproduzido com sucesso');
        pad.classList.add('playing', 'selected');
      })
      .catch((error) => {
        console.error('Erro ao reproduzir áudio:', error);
        activeAudio = null;
      });
  } else {
    if (activeAudio.paused) {
      console.log('Retomando áudio pausado');
      // Se o áudio estiver pausado, retome a reprodução
      activeAudio.play()
        .then(() => {
          console.log('Áudio retomado com sucesso');
          pad.classList.add('playing', 'selected');
        })
        .catch((error) => {
          console.error('Erro ao reproduzir áudio:', error);
          activeAudio = null;
        });
    } else {
      console.log('Desvanecendo áudio ativo');
      fadeOutAudio(activeAudio, pad);
    }
  }
}

function fadeOutAudio(audio, pad) {
  const fadeInterval = setInterval(() => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    } else {
      clearInterval(fadeInterval);
      audio.pause();
      audio.currentTime = 0;
      pad.classList.remove('playing', 'selected');
      releaseAudio(audio); // Libere o objeto de áudio de volta ao pool
      activeAudio = null;
      audio.volume = 1;
    }
  }, 100);
}

function stopAllAudios() {
  pads.forEach((p) => p.classList.remove('playing', 'selected'));
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio.volume = 1;
    releaseAudio(activeAudio); // Libere o objeto de áudio de volta ao pool
    activeAudio = null;
  }
}

function updateButtonLabels(chordType) {
  pads.forEach((pad) => {
    updatePadLabels();
  });
}

updateButtonLabels(currentChord);

// KeyMap's
const keyMap = {
  '1': 'A',
  '2': 'A#',
  '3': 'B',
  '4': 'C',
  '5': 'C#',
  '6': 'D',
  '7': 'D#',
  '8': 'E',
  '9': 'F',
  '0': 'F#',
  '-': 'G',
  '=': 'G#',
};

window.addEventListener('keydown', (event) => {
  const note = keyMap[event.key];
  if (note) {
    const pad = document.querySelector(`[data-note="${note}"]`);
    toggleAudio(pad);
  }
});

// Easter egg
const secretCode = 'ahava';
let inputCode = '';

window.addEventListener('keydown', (event) => {
  inputCode += event.key;

  if (inputCode.includes(secretCode)) {
    console.log('Easter egg: Pesquise João 3:16 na sua Bíblia');
    inputCode = '';
  }
});