# 🎙️ Audio pentru Sprechen B2 — Reisen & Tourismus

Acest folder conține:
- **`cards/`** — 32 WAV pre-generate cu Hedda pentru flashcards (incluse automat)

## 📂 cards/ — flashcards (auto, NU edita)

32 WAV-uri Hedda pentru toate cardurile lecției:
- Reiseplanung (6): reisebuero, online-buchen, reisepass, reiseversicherung, reiseziel, reisefuehrer
- Transport (6): direktflug, umstieg, mit-dem-zug, co2-fussabdruck, umweltfreundlich-reisen, verspaetung
- Unterkunft (5): hotel, ferienwohnung, campingplatz, uebernachtung, fruehstueck-inklusive
- Reisearten (5): pauschalreise, individualreise, backpacking, kreuzfahrt, all-inclusive
- Probleme moderne (5): massentourismus, klimakrise, kulturschock, sprachbarriere, tourismussteuer
- Trends 2025-2026 (3): eco-tourismus, slow-travel, heimaturlaub
- Conectori cheie Sprechen (2): statt-zu-fliegen, im-gegensatz-zu

Sunt încărcate automat de `flashcards.js`.

## 🔄 Regenerare manuală (Windows PowerShell)

```powershell
powershell.exe -ExecutionPolicy Bypass -File audio/generate-cards.ps1
```

Folosește voicea **Microsoft Hedda Desktop** (Windows TTS) cu rate -2.

## 🎙️ Voci recomandate pentru MP3 teorie suplimentar (opțional)

Dacă vrei să înregistrezi explicații audio pentru fiecare din cele 6 categorii de vocabular (cu vocea ta sau cu TTS profesional):

- **TTSMaker — Sander-DE Germany Female** (voce 290, nelimitat)
- **TTSMaker — Killian-DE Germany Male** (voce 120095, 3000 char/conv)
- **Microsoft Hedda Desktop** (Windows, gratis, calitate decentă)

Salvează MP3-urile cu nume `01-reiseplanung.mp3`, `02-transport.mp3`, etc. și anunță-mă să le integrez cu butoane play/stop (pattern Regula 16).
