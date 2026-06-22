// ============================================
// TEORIE — Sprechen B2: Reisen & Tourismus
// Vocabular bilingv pentru proba orală B2 (Sprechen Teil 1 + Teil 2)
// Claudia Toth · Annettes Deutschkurs · Nivel B2
// Aliniat cu Testul 6 oficial Examen B2 (Reisen & Tourismus)
// ============================================

const theoryHTML = `

    <div class="theory-box" style="background:#FBF7EF; border-color:#D4A574;">
        <p style="margin:0; font-size:0.95rem;">👁 <strong>Auto-verificare:</strong> lângă fiecare propoziție-exemplu ai un buton <strong>👁</strong>. Încearcă întâi să traduci tu propoziția, apoi dă click ca să vezi traducerea în română și să te verifici.</p>
    </div>
    <!-- 1: Reiseplanung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📋 1. Reiseplanung — planificarea călătoriei</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">La proba orală B2 te poți aștepta la întrebări tipic: <em>„Wie planst du deine Reisen?"</em> sau <em>„Online oder im Reisebüro?"</em>. Învață <strong>reservieren/buchen</strong> (a rezerva) + <strong>der Reisepass / das Visum</strong> (documente esențiale) + <strong>die Reiseversicherung</strong> (asigurarea de călătorie — argument important pentru B2!). Capcană: în germană se spune <em>„Ich buche einen Flug"</em>, NU „ich reserviere ein Flug". 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Reiseplanung</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">das Reisebüro · die Reisebüros</td><td class="ro-text">agenția de voiaj / agențiile</td><td><em>Im Reisebüro bekomme ich persönliche Beratung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">La agenția de voiaj primesc consiliere personală.</span></td></tr>
                        <tr><td class="verb">online buchen</td><td class="ro-text">a rezerva online</td><td><em>Heute buchen viele Menschen ihre Reisen online.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Azi mulți oameni își rezervă călătoriile online.</span></td></tr>
                        <tr><td class="verb">der Reisepass · die Reisepässe</td><td class="ro-text">pașaportul / pașapoartele (Umlaut!)</td><td><em>Mein Reisepass ist noch fünf Jahre gültig.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pașaportul meu mai e valabil cinci ani.</span></td></tr>
                        <tr><td class="verb">das Visum · die Visa</td><td class="ro-text">viza / vizele (plural neregulat)</td><td><em>Für die USA brauche ich kein Visum.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Pentru SUA nu am nevoie de viză.</span></td></tr>
                        <tr><td class="verb">die Reiseversicherung · -en</td><td class="ro-text">asigurare de călătorie / -ări</td><td><em>Eine Reiseversicherung ist sehr empfehlenswert.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">O asigurare de călătorie e foarte recomandată.</span></td></tr>
                        <tr><td class="verb">die Last-Minute-Reise · -n</td><td class="ro-text">călătorie last-minute</td><td><em>Last-Minute-Reisen sind oft günstig.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Călătoriile last-minute sunt adesea ieftine.</span></td></tr>
                        <tr><td class="verb">das Reiseziel · die Reiseziele</td><td class="ro-text">destinația / destinațiile</td><td><em>Mein nächstes Reiseziel ist Italien.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Următoarea mea destinație e Italia.</span></td></tr>
                        <tr><td class="verb">der Reiseführer · die Reiseführer</td><td class="ro-text">ghidul de călătorie / ghidurile</td><td><em>Ich kaufe immer einen Reiseführer vor der Reise.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cumpăr mereu un ghid de călătorie înainte de plecare.</span></td></tr>
                        <tr><td class="verb">die Reisekosten (nur Pl.)</td><td class="ro-text">costurile călătoriei (NUR Plural!)</td><td><em>Die Reisekosten teilen wir gerecht.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Costurile călătoriei le împărțim corect.</span></td></tr>
                        <tr><td class="verb">vorab planen / spontan reisen</td><td class="ro-text">a planifica din timp / a călători spontan</td><td><em>Manche planen vorab, andere reisen spontan.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Unii planifică din timp, alții călătoresc spontan.</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#D4A574;">
                <h4>💡 Strukturen für die mündliche Prüfung</h4>
                <ul>
                    <li><strong>Ich plane gerne</strong> + Akk: <em>Ich plane gerne meine Reisen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Îmi place să-mi planific călătoriile.</span></li>
                    <li><strong>Vor der Reise</strong> + Verb pe poz. 2: <em>Vor der Reise informiere ich mich gut.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Înainte de călătorie mă informez bine.</span></li>
                    <li><strong>Ich buche meistens</strong>: <em>Ich buche meistens online — das ist günstiger.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">De obicei rezerv online — e mai ieftin.</span></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Transport -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🚆 2. Transport — Flugzeug, Zug, Auto und Klimaschutz</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Argument B2 frecvent: <em>„Fliegen oder Bahn fahren — was ist umweltfreundlicher?"</em>. Învață <strong>der Direktflug</strong> (zbor direct) vs. <strong>der Umstieg</strong> (escală) + <strong>der CO₂-Fußabdruck</strong> (amprenta de carbon — cuvânt cheie pentru argument ecologic!). Capcana cu cazurile: <em>„Ich fahre <strong>mit dem</strong> Zug"</em> (Dativ, NU „mit den Zug"). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Transport</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">das Flugzeug · die Flugzeuge</td><td class="ro-text">avionul / avioanele</td><td><em>Mit dem Flugzeug ist man am schnellsten.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cu avionul ești cel mai rapid.</span></td></tr>
                        <tr><td class="verb">der Direktflug · die Direktflüge</td><td class="ro-text">zbor direct / zboruri (Umlaut!)</td><td><em>Ein Direktflug ist bequemer als mit Umstieg.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Un zbor direct e mai comod decât cu escală.</span></td></tr>
                        <tr><td class="verb">der Umstieg · die Umstiege</td><td class="ro-text">escala / escalele</td><td><em>Bei zwei Umstiegen verliere ich viel Zeit.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cu două escale pierd mult timp.</span></td></tr>
                        <tr><td class="verb">der Zug · die Züge</td><td class="ro-text">trenul / trenurile (Umlaut!)</td><td><em>Der ICE ist der schnellste Zug Deutschlands.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">ICE-ul e cel mai rapid tren din Germania.</span></td></tr>
                        <tr><td class="verb">der ICE / die Regionalbahn</td><td class="ro-text">ICE-ul / trenul regional</td><td><em>Mit dem ICE bin ich in 4 Stunden in München.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cu ICE-ul ajung în 4 ore la München.</span></td></tr>
                        <tr><td class="verb">das Auto · die Autos</td><td class="ro-text">mașina / mașinile</td><td><em>Mit dem Auto bin ich flexibel.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cu mașina sunt flexibil.</span></td></tr>
                        <tr><td class="verb">der CO₂-Fußabdruck (nur Sg.)</td><td class="ro-text">amprenta de carbon (abstract)</td><td><em>Fliegen hat einen großen CO₂-Fußabdruck.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Zborul are o amprentă de carbon mare.</span></td></tr>
                        <tr><td class="verb">umweltfreundlich · klimaschonend</td><td class="ro-text">prietenos cu mediul / care protejează clima</td><td><em>Bahnfahren ist umweltfreundlicher als Fliegen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Mersul cu trenul e mai prietenos cu mediul decât zborul.</span></td></tr>
                        <tr><td class="verb">der Stau · die Staus</td><td class="ro-text">ambuteiajul / ambuteiajele</td><td><em>Im Sommer gibt es viele Staus auf der Autobahn.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Vara sunt multe ambuteiaje pe autostradă.</span></td></tr>
                        <tr><td class="verb">die Verspätung · -en</td><td class="ro-text">întârzierea / întârzierile</td><td><em>Die Deutsche Bahn hat oft Verspätungen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Deutsche Bahn are adesea întârzieri.</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: Unterkunft -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🏨 3. Unterkunft — Hotel, Airbnb, Camping, Hostel</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Întrebare clasică B2: <em>„Hotel oder Ferienwohnung?"</em>. Învață diferența între <strong>das Hotel</strong> (cu mai multe stele) și <strong>die Ferienwohnung</strong> (= Airbnb, apartament închiriat pe termen scurt). Capcană culturală: <strong>das Hostel</strong> (anglicism) = pensiune pentru tineri/buget mic, NU spital! Spitalul = <em>das Krankenhaus</em>. 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Unterkunft</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">das Hotel · die Hotels</td><td class="ro-text">hotelul / hotelurile</td><td><em>Unser Hotel hat fünf Sterne.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Hotelul nostru are cinci stele.</span></td></tr>
                        <tr><td class="verb">die Pension · die Pensionen</td><td class="ro-text">pensiunea / pensiunile</td><td><em>In kleinen Pensionen ist es persönlicher.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În pensiunile mici e mai personal.</span></td></tr>
                        <tr><td class="verb">die Ferienwohnung · -en</td><td class="ro-text">apartament de vacanță (Airbnb)</td><td><em>Eine Ferienwohnung ist günstiger für Familien.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Un apartament de vacanță e mai ieftin pentru familii.</span></td></tr>
                        <tr><td class="verb">das Hostel · die Hostels</td><td class="ro-text">hostel / pensiune buget (anglicism)</td><td><em>Im Hostel teile ich das Zimmer mit anderen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În hostel împart camera cu alții.</span></td></tr>
                        <tr><td class="verb">der Campingplatz · die Campingplätze</td><td class="ro-text">camping / campinguri (Umlaut!)</td><td><em>Auf dem Campingplatz schlafen wir im Zelt.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">La camping dormim în cort.</span></td></tr>
                        <tr><td class="verb">das Zelt · die Zelte</td><td class="ro-text">cortul / corturile</td><td><em>Mein Zelt ist für zwei Personen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Cortul meu e pentru două persoane.</span></td></tr>
                        <tr><td class="verb">die Übernachtung · -en</td><td class="ro-text">cazarea / înnoptarea (pe noapte) · cazările</td><td><em>Die Übernachtung kostet 80 Euro.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Înnoptarea costă 80 de euro.</span></td></tr>
                        <tr><td class="verb">das Frühstück · die Frühstücke</td><td class="ro-text">micul dejun / -urile (Umlaut!)</td><td><em>Frühstück ist im Preis inbegriffen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Micul dejun e inclus în preț.</span></td></tr>
                        <tr><td class="verb">der Sterne (Plural)</td><td class="ro-text">stelele (pentru hotel)</td><td><em>Ein 4-Sterne-Hotel ist Mittelklasse.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Un hotel de 4 stele e de clasă medie.</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Reisearten -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎒 4. Reisearten — Pauschalreise vs. Individualreise</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Aici e <strong>perechea-cheie</strong> a probei orale B2: <em>Pauschalreise vs. Individualreise</em>. Pauschal = tot inclus (transport + hotel + masă + activități), Individual = planifici singur fiecare detaliu. Învață și <strong>das Backpacking</strong> (rucsac în spate, buget mic, libertate maximă) și <strong>die Kreuzfahrt</strong> (croazieră — controversată din cauza Massentourismus!). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Reisearten</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">die Pauschalreise · -n</td><td class="ro-text">călătorie tot inclus / vacanță organizată</td><td><em>Eine Pauschalreise enthält Flug, Hotel und Verpflegung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">O vacanță tot inclus conține zbor, hotel și masă.</span></td></tr>
                        <tr><td class="verb">die Individualreise · -n</td><td class="ro-text">călătorie individuală / organizată singur</td><td><em>Bei einer Individualreise plant man alles selbst.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">La o călătorie individuală îți planifici totul singur.</span></td></tr>
                        <tr><td class="verb">das Backpacking (nur Sg.)</td><td class="ro-text">backpacking (anglicism, abstract)</td><td><em>Backpacking ist ideal für junge Reisende.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Backpacking-ul e ideal pentru tinerii călători.</span></td></tr>
                        <tr><td class="verb">die Kreuzfahrt · die Kreuzfahrten</td><td class="ro-text">croaziera / croazierele</td><td><em>Eine Kreuzfahrt durch das Mittelmeer ist beliebt.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">O croazieră prin Marea Mediterană e îndrăgită.</span></td></tr>
                        <tr><td class="verb">die All-Inclusive-Reise · -n</td><td class="ro-text">călătorie all-inclusive</td><td><em>All-Inclusive ist beliebt bei Familien mit Kindern.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">All-inclusive e îndrăgit de familiile cu copii.</span></td></tr>
                        <tr><td class="verb">die Workation</td><td class="ro-text">workation (lucru + vacanță, trend nou)</td><td><em>Workation kombiniert Arbeit und Urlaub.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Workation combină munca și vacanța.</span></td></tr>
                        <tr><td class="verb">der Aufenthalt · die Aufenthalte</td><td class="ro-text">șederea / sejurul</td><td><em>Mein Aufenthalt dauert eine Woche.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Sejurul meu durează o săptămână.</span></td></tr>
                        <tr><td class="verb">der Wanderurlaub · -e</td><td class="ro-text">vacanță cu drumeții</td><td><em>In den Alpen mache ich einen Wanderurlaub.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În Alpi fac o vacanță cu drumeții.</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 5: Probleme moderne -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Probleme moderne — Massentourismus, Klimakrise, Kulturschock</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Examinatorul B2 te poate întreba: <em>„Welche Probleme bringt der moderne Tourismus mit sich?"</em>. Răspunsuri puternice: <strong>der Massentourismus / Overtourism</strong> (Mallorca, Venedig, Barcelona introduc taxe!) · <strong>die Klimakrise</strong> (zborurile contribuie major) · <strong>der Kulturschock</strong> (când diferențele culturale te copleșesc). Citează: „Laut Eurostat empfangen Mallorca und Venedig fiecare câteva milioane de turiști pe an." 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Probleme moderne</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">der Massentourismus (nur Sg.)</td><td class="ro-text">turismul de masă, overtourism</td><td><em>Massentourismus zerstört viele Strände.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Turismul de masă distruge multe plaje.</span></td></tr>
                        <tr><td class="verb">die Klimakrise (nur Sg.)</td><td class="ro-text">criza climatică</td><td><em>Fliegen verstärkt die Klimakrise.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Zborul accentuează criza climatică.</span></td></tr>
                        <tr><td class="verb">der Kulturschock · -s</td><td class="ro-text">șocul cultural</td><td><em>Beim ersten Besuch in Indien hatte ich einen Kulturschock.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">La prima vizită în India am avut un șoc cultural.</span></td></tr>
                        <tr><td class="verb">die Sprachbarriere · -n</td><td class="ro-text">bariera lingvistică</td><td><em>Ohne Englisch ist die Sprachbarriere groß.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Fără engleză, bariera lingvistică e mare.</span></td></tr>
                        <tr><td class="verb">die Tourismussteuer · -n</td><td class="ro-text">taxa pentru turiști (impusă recent în multe orașe)</td><td><em>Venedig hat eine Tourismussteuer eingeführt.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Veneția a introdus o taxă pentru turiști.</span></td></tr>
                        <tr><td class="verb">überfüllt · überlaufen</td><td class="ro-text">aglomerat, supraaglomerat</td><td><em>Im Sommer sind die Strände überlaufen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Vara plajele sunt supraaglomerate.</span></td></tr>
                        <tr><td class="verb">die Umweltbelastung · -en</td><td class="ro-text">poluarea mediului</td><td><em>Kreuzfahrtschiffe verursachen viel Umweltbelastung.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Vasele de croazieră provoacă multă poluare.</span></td></tr>
                        <tr><td class="verb">die Lebenshaltungskosten (nur Pl.)</td><td class="ro-text">costul vieții (pentru locuitorii din zone turistice)</td><td><em>Touristen treiben die Lebenshaltungskosten hoch.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Turiștii cresc costul vieții.</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Trends 2025-2026 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🌱 6. Trends 2025-2026 — Eco-Tourismus, Slow Travel, Heimaturlaub</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Trend-urile actuale arată cu degetul: turismul intensiv NU mai e cool. Acum se poartă <strong>Eco-Tourismus</strong> (turism responsabil), <strong>Slow Travel</strong> (vizitezi UN loc mult timp, nu 5 în 2 săptămâni), <strong>Heimaturlaub</strong> (vacanță în propria țară — descoperi Sibiul / Sächsische Schweiz / Schwarzwald). Apoi <strong>Mikroabenteuer</strong> = aventuri mici, accesibile (weekend hiking, camping în pădure). 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📚 Vocabular — Trends 2025-2026</h4>
                <table class="theory-table">
                    <thead><tr><th>Germană (Sg + Pl)</th><th>Traducere RO</th><th>Exemplu în context</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">der Eco-Tourismus / Ökotourismus (nur Sg.)</td><td class="ro-text">turismul ecologic</td><td><em>Eco-Tourismus respektiert Natur und lokale Kultur.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Turismul ecologic respectă natura și cultura locală.</span></td></tr>
                        <tr><td class="verb">Slow Travel (nur Sg.)</td><td class="ro-text">călătorii lente (un loc, mult timp)</td><td><em>Slow Travel bedeutet: weniger Orte, mehr Erlebnis.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Slow travel înseamnă: mai puține locuri, mai multă trăire.</span></td></tr>
                        <tr><td class="verb">der Heimaturlaub · -e</td><td class="ro-text">vacanță în țara natală</td><td><em>Heimaturlaub spart Geld und CO₂.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Vacanța în țara natală economisește bani și CO₂.</span></td></tr>
                        <tr><td class="verb">das Mikroabenteuer · die Mikroabenteuer</td><td class="ro-text">microaventură / -i (accesibile, weekend)</td><td><em>Ein Mikroabenteuer ist eine Nacht im Wald.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">O microaventură e o noapte în pădure.</span></td></tr>
                        <tr><td class="verb">nachhaltig reisen</td><td class="ro-text">a călători sustenabil</td><td><em>Nachhaltig reisen wird immer wichtiger.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">A călători sustenabil devine tot mai important.</span></td></tr>
                        <tr><td class="verb">der digitale Nomade · die digitalen Nomaden</td><td class="ro-text">nomadul digital / nomazii digitali</td><td><em>Digitale Nomaden arbeiten von überall.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Nomazii digitali lucrează de oriunde.</span></td></tr>
                        <tr><td class="verb">authentisch erleben</td><td class="ro-text">a experimenta autentic (NU turistic)</td><td><em>Ich möchte ein Land authentisch erleben.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Vreau să experimentez o țară autentic.</span></td></tr>
                        <tr><td class="verb">lokale Bräuche kennenlernen</td><td class="ro-text">a cunoaște obiceiurile locale</td><td><em>Beim Slow Travel lerne ich lokale Bräuche kennen.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Prin slow travel cunosc obiceiurile locale.</span></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background:#dbeafe; border-color:#D4A574;">
                <h4>💡 Strukturen für die Argumentation (für Teil 2)</h4>
                <ul>
                    <li><strong>Statt</strong> + Gen / <strong>statt zu</strong> + Inf: <em>Statt zu fliegen, fahre ich mit dem Zug.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">În loc să zbor, merg cu trenul.</span></li>
                    <li><strong>Im Gegensatz zu</strong> + Dat: <em>Im Gegensatz zu Pauschalreisen ist Backpacking individuell.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Spre deosebire de vacanțele tot inclus, backpacking-ul e individual.</span></li>
                    <li><strong>obwohl ... trotzdem ...</strong>: <em>Obwohl Fliegen schneller ist, fahre ich trotzdem oft mit dem Zug.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Deși zborul e mai rapid, totuși merg adesea cu trenul.</span></li>
                    <li><strong>Laut Eurostat / Statistik Austria</strong>: <em>Laut Eurostat empfangen Mallorca und Venedig Millionen Touristen pro Jahr.</em><button class="ro-toggle" onclick="toggleRo(this)" title="Vezi traducerea" aria-label="Vezi traducerea">👁</button><span class="ro-reveal">Conform Eurostat, Mallorca și Veneția primesc milioane de turiști pe an.</span></li>
                    <li><strong>Auf der einen Seite ... auf der anderen Seite ...</strong> (pe de o parte ... pe de alta ...)</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});


// 👁 Toggle traducere RO ascunsă (auto-verificare)
function toggleRo(btn) {
    const ro = btn.nextElementSibling;
    if (!ro || !ro.classList.contains('ro-reveal')) return;
    const open = ro.classList.toggle('show');
    btn.classList.toggle('active', open);
    btn.title = open ? 'Ascunde traducerea' : 'Vezi traducerea';
    btn.setAttribute('aria-label', btn.title);
}
