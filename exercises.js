// ============================================
// EXERCIȚII - Sprechen B2: Reisen & Tourismus
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'die Pauschalreise', correct: 'călătorie tot inclus / vacanță organizată', accept: ['călătorie tot inclus', 'calatorie tot inclus', 'vacanță organizată', 'vacanta organizata', 'pauschalreise', 'călătorie organizată', 'calatorie organizata', 'pachet de vacanță', 'pachet de vacanta'] },
    { id: 'b', de: 'der Massentourismus', correct: 'turismul de masă / overtourism', accept: ['turismul de masă', 'turismul de masa', 'turism de masă', 'turism de masa', 'overtourism', 'massentourismus'] },
    { id: 'c', de: 'der Reisepass', correct: 'pașaportul', accept: ['pașaportul', 'pasaportul', 'pașaport', 'pasaport'] },
    { id: 'd', de: 'die Ferienwohnung', correct: 'apartament de vacanță (Airbnb)', accept: ['apartament de vacanță', 'apartament de vacanta', 'apartament vacanță', 'apartament vacanta', 'airbnb', 'ferienwohnung'] },
    { id: 'e', de: 'der CO₂-Fußabdruck', correct: 'amprenta de carbon', accept: ['amprenta de carbon', 'amprenta carbon', 'co2 fußabdruck', 'co2 fussabdruck', 'co2 amprenta'] },
    { id: 'f', de: 'nachhaltig reisen', correct: 'a călători sustenabil', accept: ['a călători sustenabil', 'a calatori sustenabil', 'călătorie sustenabilă', 'calatorie sustenabila', 'a călători durabil', 'a calatori durabil'] },
    { id: 'g', de: 'der Heimaturlaub', correct: 'vacanță în țara natală', accept: ['vacanță în țara natală', 'vacanta in tara natala', 'vacanță acasă', 'vacanta acasa', 'heimaturlaub'] },
    { id: 'h', de: 'die Kreuzfahrt', correct: 'croaziera', accept: ['croaziera', 'croazieră', 'kreuzfahrt'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'a rezerva un zbor online', correct: 'einen Flug online buchen', accept: ['einen flug online buchen', 'einen flug online reservieren', 'online einen flug buchen'] },
    { id: 'b', ro: 'amprenta de carbon', correct: 'der CO₂-Fußabdruck', accept: ['der co2-fußabdruck', 'co2-fußabdruck', 'der co2-fussabdruck', 'co2-fussabdruck', 'co2 fußabdruck', 'co2 fussabdruck'] },
    { id: 'c', ro: 'a călători cu trenul', correct: 'mit dem Zug fahren', accept: ['mit dem zug fahren', 'mit dem zug reisen', 'mit zug fahren'] },
    { id: 'd', ro: 'asigurare de călătorie', correct: 'die Reiseversicherung', accept: ['die reiseversicherung', 'reiseversicherung', 'eine reiseversicherung'] },
    { id: 'e', ro: 'turism de masă', correct: 'der Massentourismus', accept: ['der massentourismus', 'massentourismus', 'overtourism'] },
    { id: 'f', ro: 'a călători sustenabil', correct: 'nachhaltig reisen', accept: ['nachhaltig reisen', 'umweltfreundlich reisen', 'klimaschonend reisen'] },
    { id: 'g', ro: 'cazare cu mic dejun', correct: 'Übernachtung mit Frühstück', accept: ['übernachtung mit frühstück', 'uebernachtung mit fruehstueck', 'übernachtung mit fruehstueck', 'mit frühstück'] },
    { id: 'h', ro: 'destinația mea preferată', correct: 'mein Lieblingsreiseziel', accept: ['mein lieblingsreiseziel', 'mein lieblings-reiseziel', 'mein beliebtestes reiseziel'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#5A5147; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția cu substantivul potrivit
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Vor jeder Reise prüfe ich, ob mein ______ noch gültig ist. (pașaport)', correct: 'Reisepass', accept: ['reisepass', 'pass'] },
    { id: 'b', sentence: 'Eine ______ enthält Flug, Hotel und Verpflegung. (călătorie tot inclus)', correct: 'Pauschalreise', accept: ['pauschalreise'] },
    { id: 'c', sentence: 'Im Sommer 2025 hat Venedig eine ______ eingeführt. (taxă pentru turiști)', correct: 'Tourismussteuer', accept: ['tourismussteuer'] },
    { id: 'd', sentence: 'Auf langen Reisen empfehle ich immer eine ______. (asigurare de călătorie)', correct: 'Reiseversicherung', accept: ['reiseversicherung'] },
    { id: 'e', sentence: 'Statt zu fliegen, kann man auch mit dem ______ in Europa reisen. (tren)', correct: 'Zug', accept: ['zug', 'ice', 'ic', 'eurostar'] },
    { id: 'f', sentence: 'Mein ______ ist Italien — ich liebe Pasta und Strand. (destinație de călătorie)', correct: 'Reiseziel', accept: ['reiseziel'] },
    { id: 'g', sentence: 'Im ______ schlafen die Backpacker in Mehrbettzimmern. (hostel)', correct: 'Hostel', accept: ['hostel'] },
    { id: 'h', sentence: 'Der ______ wird durch Fliegen besonders stark erhöht. (amprenta de carbon)', correct: 'CO₂-Fußabdruck', accept: ['co2-fußabdruck', 'co2-fussabdruck', 'co2 fußabdruck', 'co2 fussabdruck', 'co2fußabdruck', 'co2fussabdruck'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu substantivul potrivit din vocabular.</strong><br>
            Sugestia română între paranteze. Scrie EXACT cu majusculă (substantivele se scriu cu majusculă în germană!).
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex3-${item.id}" placeholder="substantiv...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Conectori argumentativi pentru Sprechen Teil 2
// ============================================
const ex4Data = [
    { id: 'a', sentence: '______ zu fliegen, fahre ich mit dem Zug. (în loc de a zbura)', correct: 'Statt', accept: ['statt', 'anstatt'] },
    { id: 'b', sentence: 'Im ______ zu Pauschalreisen ist Backpacking flexibler. (în contrast cu)', correct: 'Gegensatz', accept: ['gegensatz', 'vergleich'] },
    { id: 'c', sentence: '______ einer Studie reisen 60% der Deutschen mit dem Auto. (potrivit unui studiu)', correct: 'Laut', accept: ['laut', 'nach'] },
    { id: 'd', sentence: 'Massentourismus hat ______ Vorteile als Nachteile. (mai puține ... decât)', correct: 'weniger', accept: ['weniger'] },
    { id: 'e', sentence: '______ Fliegen schneller ist, fahre ich trotzdem oft mit dem Zug. (deși)', correct: 'Obwohl', accept: ['obwohl', 'auch wenn'] },
    { id: 'f', sentence: 'Slow Travel bedeutet: ______ Orte, mehr Erlebnis. (mai puține)', correct: 'weniger', accept: ['weniger'] },
    { id: 'g', sentence: 'Eine Kreuzfahrt ist gemütlich, ______ sehr umweltbelastend. (totuși / dar)', correct: 'aber', accept: ['aber', 'jedoch', 'allerdings'] },
    { id: 'h', sentence: 'Auf der einen Seite ist Fliegen schnell, ______ ist es klimaschädlich. (pe de altă parte)', correct: 'auf der anderen Seite', accept: ['auf der anderen seite', 'auf der anderen', 'andererseits'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🗣️ Completează cu conectorul argumentativ potrivit.</strong><br>
            Aceste structuri sunt esențiale pentru proba orală B2 — pentru contrast, citare studii, opinie.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="conector...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Schreibwerkstatt — argument scurt cu Google Form (regula 18)
// ============================================
function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>✍️ Schreibwerkstatt — exersează un argument scurt</strong><br>
            Scrie 4-6 propoziții (60-100 cuvinte) în germană pentru una dintre situațiile de mai jos. Sunt situații tipice pentru <strong>Sprechen Teil 2</strong> (dialog pe perechi cu argumente).
        </div>

        <div class="theory-box" style="background:#F5F0E8; border-color:#D4A574;">
            <h4>📋 Alege UNA dintre cele 3 teme:</h4>
            <ol>
                <li><strong>„Pauschalreise vs. Individualreise — was passt zu dir?"</strong> Argumentează ce stil de călătorie preferi tu și de ce, cu minim 2 motive concrete + un exemplu personal.</li>
                <li><strong>„Massentourismus — Problem oder Wirtschaftsfaktor?"</strong> Prezintă cele 2 perspective cu structurile <em>„Auf der einen Seite ... auf der anderen Seite ..."</em>.</li>
                <li><strong>„Sollten wir mehr Heimaturlaub machen?"</strong> Dă 3 argumente pro (Eco, prețuri, descoperire propria țară) folosind <em>„Man könnte ..."</em> + <em>„Es ist sinnvoll, dass ..."</em>.</li>
            </ol>
        </div>

        <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
            <h4>💡 Structuri utile (le poți copia)</h4>
            <ul>
                <li><strong>Meiner Meinung nach</strong> + verb pe poz. 2: „Meiner Meinung nach ist Slow Travel besser für die Umwelt."</li>
                <li><strong>Statt zu</strong> + Inf: „Statt zu fliegen, fahre ich mit dem Zug."</li>
                <li><strong>Im Gegensatz zu</strong> + Dat: „Im Gegensatz zu Pauschalreisen ist Backpacking flexibler."</li>
                <li><strong>Laut einer Studie / laut Eurostat</strong>: „Laut Eurostat empfangen Mallorca und Venedig Millionen Touristen pro Jahr."</li>
                <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong></li>
            </ul>
        </div>

        <p style="margin: 14px 0;">📝 Scrie textul tău în câmpul de mai jos (doar pentru proba personală — nu se verifică automat). Pentru corectură de la Annette → folosește formularul:</p>

        <textarea id="ex5-text" rows="8" style="width:100%; padding:14px; border:2px solid #d1fae5; border-radius:8px; font-family:inherit; font-size:1rem; line-height:1.6;" placeholder="Schreib hier deinen Text (4-6 Sätze, 60-100 Wörter)..."></textarea>

        <div style="margin: 14px 0; padding: 16px 20px; background:#ecfdf5; border: 2px solid #10b981; border-radius:10px; text-align:center;">
            <p style="margin: 0 0 10px; color:#065f46; font-weight:600;">📨 Trimite textul tău spre corectură (Annette îți răspunde personal cu feedback)</p>
            <a href="https://forms.gle/iMZsAFC4rxwcFQ6G8" target="_blank" rel="noopener" style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:white; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; font-size:1rem;">📨 Trimite spre corectură</a>
            <p style="margin: 8px 0 0; color:#5A5147; font-size:0.85rem; font-style:italic;">(formularul deschis în tab nou — în el alegi „Sprechen B2 — Reisen & Tourismus")</p>
        </div>
    `;
}

function checkEx5() {
    const textarea = document.getElementById('ex5-text');
    const userText = (textarea?.value || '').trim();
    const wordCount = userText ? userText.split(/\s+/).length : 0;

    if (wordCount < 30) {
        return { correct: 0, total: 1, message: 'Scrie cel puțin 30 de cuvinte ca să poți trimite textul spre corectură.' };
    }
    return { correct: 1, total: 1, message: `Ai scris ${wordCount} cuvinte. Acum trimite textul prin Google Form pentru corectură personală.` };
}

document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
