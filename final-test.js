// ============================================
// FINAL TEST — Sprechen B2: Reisen & Tourismus
// Claudia Toth · 15 întrebări mixte (vocab + structuri + traducere)
// Pattern wizard preluat din lecțiile Sprechen B2 LIVE
// ============================================

const finalTestData = [
    // === Vocabular — sens DE → RO (5q) ===
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „die Pauschalreise"?', options: ['călătorie individuală', 'călătorie tot inclus (vacanță organizată)', 'călătorie cu rucsacul', 'călătorie de afaceri'], correct: 'călătorie tot inclus (vacanță organizată)', explanation: 'Pauschal = totul împreună (transport + hotel + masă + activități). Pereche-cheie a Sprechen B2: Pauschalreise vs. Individualreise.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „der Massentourismus"?', options: ['turismul de iarnă', 'turismul de masă, overtourism', 'turismul cultural', 'turismul religios'], correct: 'turismul de masă, overtourism', explanation: 'Problemă modernă în Venedig, Mallorca, Barcelona. Sinonim cu „overtourism".' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „der CO₂-Fußabdruck"?', options: ['amprenta de carbon', 'urma de pas', 'CO₂ în atmosferă', 'consumul de combustibil'], correct: 'amprenta de carbon', explanation: 'CO₂-Fußabdruck (literal: amprenta CO₂) = cât CO₂ produci prin activitatea ta. Argument B2 pentru ecotourism.' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „der Heimaturlaub"?', options: ['vacanță în străinătate', 'vacanță în țara natală', 'vacanță cu părinții', 'vacanță scurtă'], correct: 'vacanță în țara natală', explanation: 'Heimat = patrie / țara natală + Urlaub = vacanță. Trend recent: vacanță acasă (Sibiu, Sächsische Schweiz, Schwarzwald).' },
    { type: 'multiple', category: '📚 Vocabular DE→RO', question: 'Ce înseamnă „Slow Travel"?', options: ['călătorii ieftine', 'călătorii lente (un loc, mult timp)', 'călătorii cu mașina', 'călătorii organizate'], correct: 'călătorii lente (un loc, mult timp)', explanation: 'Slow Travel = vizitezi UN loc îndelung, nu 5 țări în 2 săptămâni. Trend anti-Massentourismus.' },

    // === Structuri argumentative — fill in (5q) ===
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ zu fliegen, fahre ich mit dem Zug. (în loc de a zbura)', translation: 'în loc de a zbura', accept: ['statt', 'anstatt'], correct: 'Statt', explanation: 'Statt zu + Inf / Anstatt zu + Inf — structură elegantă B2 pentru contrast.' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: 'Im ______ zu Pauschalreisen ist Backpacking flexibler. (în contrast cu)', translation: 'în contrast cu', accept: ['gegensatz', 'vergleich'], correct: 'Gegensatz', explanation: 'Im Gegensatz zu + Dativ. Alternativă: Im Vergleich zu.' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ Eurostat empfangen Mallorca und Venedig Millionen Touristen pro Jahr. (potrivit lui)', translation: 'potrivit lui Eurostat', accept: ['laut', 'nach'], correct: 'Laut', explanation: 'Laut + Nom: citare elegantă a unei surse (studiu, statistică).' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: '______ Fliegen schneller ist, fahre ich trotzdem oft mit dem Zug. (deși)', translation: 'deși', accept: ['obwohl', 'auch wenn'], correct: 'Obwohl', explanation: 'Obwohl + Nebensatz (verb la sfârșit). Variantă: Auch wenn.' },
    { type: 'luckentext', category: '🗣️ Structuri Sprechen Teil 2', question: 'Completează:', sentence: 'Slow Travel bedeutet: ______ Orte, mehr Erlebnis. (mai puține)', translation: 'mai puține', accept: ['weniger'], correct: 'weniger', explanation: 'Weniger + substantiv = mai puține. Formă de comparativ neregulat (wenig → weniger → am wenigsten).' },

    // === Traducere RO → DE (5q) ===
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Călătoresc cu trenul către München.', accept: ['ich fahre mit dem zug nach münchen.', 'ich fahre mit dem zug nach münchen', 'ich fahre mit dem zug nach muenchen.', 'ich fahre mit dem zug nach muenchen', 'ich reise mit dem zug nach münchen', 'ich reise mit dem zug nach muenchen'], correct: 'Ich fahre mit dem Zug nach München.', explanation: 'mit + Dativ (mit dem Zug). nach + nume oraș (fără articol).' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Pașaportul meu este valabil 5 ani.', accept: ['mein reisepass ist 5 jahre gültig.', 'mein reisepass ist 5 jahre gültig', 'mein reisepass ist fünf jahre gültig.', 'mein reisepass ist fünf jahre gültig', 'mein reisepass ist 5 jahre gueltig.', 'mein reisepass ist fuenf jahre gueltig', 'mein pass ist 5 jahre gültig'], correct: 'Mein Reisepass ist 5 Jahre gültig.', explanation: 'gültig sein = a fi valabil. Timp fără prepoziție: 5 Jahre.' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'În loc să iau avionul, prefer trenul.', accept: ['statt zu fliegen, nehme ich lieber den zug.', 'statt zu fliegen nehme ich lieber den zug', 'anstatt zu fliegen, nehme ich lieber den zug.', 'anstatt zu fliegen nehme ich lieber den zug', 'statt zu fliegen, fahre ich lieber mit dem zug', 'statt zu fliegen fahre ich lieber mit dem zug'], correct: 'Statt zu fliegen, nehme ich lieber den Zug.', explanation: 'Statt zu + Inf. „lieber" = comparativul lui gerne.' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'O vacanță sustenabilă protejează clima.', accept: ['ein nachhaltiger urlaub schützt das klima.', 'ein nachhaltiger urlaub schützt das klima', 'ein nachhaltiger urlaub schuetzt das klima.', 'ein nachhaltiger urlaub schuetzt das klima', 'nachhaltiger urlaub schützt das klima'], correct: 'Ein nachhaltiger Urlaub schützt das Klima.', explanation: 'nachhaltig = sustenabil. Adjectiv masculin Nominativ: -er (forte).' },
    { type: 'translate', category: '🇷🇴 Traducere RO→DE', question: 'Traduceți:', ro: 'Turismul de masă distruge multe plaje.', accept: ['massentourismus zerstört viele strände.', 'massentourismus zerstört viele strände', 'massentourismus zerstoert viele straende.', 'massentourismus zerstoert viele straende', 'der massentourismus zerstört viele strände'], correct: 'Massentourismus zerstört viele Strände.', explanation: 'zerstören = a distruge. der Strand → die Strände (Umlaut + -e plural).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți Sprechen B2 — Gesundheit & Sport</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> mixte: vocabular cheie, structuri argumentative (Sprechen Teil 2), traduceri RO→DE.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină (wizard)</li>
                <li>✅ Feedback instant + explicație</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    function normalize(s) {
        if (!s) return '';
        return s.toLowerCase().trim()
            .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
            .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
            .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
            .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
            .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = normalize(userAnswer) === normalize(q.correct);
    } else {
        const userAnswerNorm = normalize(userAnswer);
        isCorrect = q.accept.some(a => normalize(a) === userAnswerNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat!'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
