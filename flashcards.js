// ============================================
// FLASHCARDS — Sprechen B2: Reisen & Tourismus
// Claudia Toth · 32 carduri · audio Hedda WAV pregenerat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== Reiseplanung (6) =====
    { de: "das Reisebüro · die Reisebüros", ro: "agenția de voiaj · agențiile (n)", audio: "audio/cards/01-reisebuero.wav" },
    { de: "online buchen", ro: "a rezerva online", audio: "audio/cards/02-online-buchen.wav" },
    { de: "der Reisepass · die Reisepässe", ro: "pașaportul · pașapoartele (m, Umlaut!)", audio: "audio/cards/03-reisepass.wav" },
    { de: "die Reiseversicherung", ro: "asigurarea de călătorie (f)", audio: "audio/cards/04-reiseversicherung.wav" },
    { de: "das Reiseziel · die Reiseziele", ro: "destinația · destinațiile (n)", audio: "audio/cards/05-reiseziel.wav" },
    { de: "der Reiseführer · die Reiseführer", ro: "ghidul de călătorie · ghidurile (m, plural identic)", audio: "audio/cards/06-reisefuehrer.wav" },

    // ===== Transport (6) =====
    { de: "der Direktflug · die Direktflüge", ro: "zborul direct · zborurile (m, Umlaut!)", audio: "audio/cards/07-direktflug.wav" },
    { de: "der Umstieg · die Umstiege", ro: "escala · escalele (m)", audio: "audio/cards/08-umstieg.wav" },
    { de: "mit dem Zug fahren", ro: "a călători cu trenul", audio: "audio/cards/09-mit-dem-zug.wav" },
    { de: "der CO₂-Fußabdruck", ro: "amprenta de carbon (m, nur Sg)", audio: "audio/cards/10-co2-fussabdruck.wav" },
    { de: "umweltfreundlich reisen", ro: "a călători prietenos cu mediul", audio: "audio/cards/11-umweltfreundlich-reisen.wav" },
    { de: "die Verspätung · die Verspätungen", ro: "întârzierea · întârzierile (f)", audio: "audio/cards/12-verspaetung.wav" },

    // ===== Unterkunft (5) =====
    { de: "das Hotel · die Hotels", ro: "hotelul · hotelurile (n)", audio: "audio/cards/13-hotel.wav" },
    { de: "die Ferienwohnung", ro: "apartament de vacanță, Airbnb (f)", audio: "audio/cards/14-ferienwohnung.wav" },
    { de: "der Campingplatz · die Campingplätze", ro: "campingul · campingurile (m, Umlaut!)", audio: "audio/cards/15-campingplatz.wav" },
    { de: "die Übernachtung · die Übernachtungen", ro: "cazarea pe noapte · cazările (f)", audio: "audio/cards/16-uebernachtung.wav" },
    { de: "das Frühstück inklusive", ro: "mic dejun inclus", audio: "audio/cards/17-fruehstueck-inklusive.wav" },

    // ===== Reisearten (5) =====
    { de: "die Pauschalreise", ro: "călătoria tot inclus (f)", audio: "audio/cards/18-pauschalreise.wav" },
    { de: "die Individualreise", ro: "călătoria individuală (f)", audio: "audio/cards/19-individualreise.wav" },
    { de: "das Backpacking", ro: "backpacking (n, anglicism, nur Sg)", audio: "audio/cards/20-backpacking.wav" },
    { de: "die Kreuzfahrt · die Kreuzfahrten", ro: "croaziera · croazierele (f)", audio: "audio/cards/21-kreuzfahrt.wav" },
    { de: "die All-Inclusive-Reise", ro: "călătorie all-inclusive (f)", audio: "audio/cards/22-all-inclusive.wav" },

    // ===== Probleme moderne (5) =====
    { de: "der Massentourismus", ro: "turismul de masă, overtourism (m, nur Sg)", audio: "audio/cards/23-massentourismus.wav" },
    { de: "die Klimakrise", ro: "criza climatică (f, nur Sg)", audio: "audio/cards/24-klimakrise.wav" },
    { de: "der Kulturschock", ro: "șocul cultural (m)", audio: "audio/cards/25-kulturschock.wav" },
    { de: "die Sprachbarriere · -n", ro: "bariera lingvistică · barierele (f)", audio: "audio/cards/26-sprachbarriere.wav" },
    { de: "die Tourismussteuer", ro: "taxa pentru turiști (f)", audio: "audio/cards/27-tourismussteuer.wav" },

    // ===== Trends 2025-2026 (3) =====
    { de: "der Eco-Tourismus", ro: "turismul ecologic (m, nur Sg)", audio: "audio/cards/28-eco-tourismus.wav" },
    { de: "Slow Travel", ro: "călătorii lente (un loc, mult timp)", audio: "audio/cards/29-slow-travel.wav" },
    { de: "der Heimaturlaub", ro: "vacanță în țara natală (m)", audio: "audio/cards/30-heimaturlaub.wav" },

    // ===== Conectori argumentativi cheie (2) =====
    { de: "Statt zu fliegen", ro: "în loc de a zbura (Sprechen Teil 2!)", audio: "audio/cards/31-statt-zu-fliegen.wav" },
    { de: "Im Gegensatz zu", ro: "în contrast cu + Dativ", audio: "audio/cards/32-im-gegensatz-zu.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Sprechen B2 — Reisen & Tourismus</strong> — 6 Reiseplanung + 6 Transport + 5 Unterkunft + 5 Reisearten + 5 Probleme moderne + 3 Trends + 2 conectori cheie.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
