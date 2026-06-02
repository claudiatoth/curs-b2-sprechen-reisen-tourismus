Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $synth.SelectVoice("Microsoft Hedda Desktop") } catch { Write-Host "Hedda voice not available, using default DE voice" }
$synth.Rate = -2

$ae = [char]0x00E4; $oe = [char]0x00F6; $ue = [char]0x00FC; $ss = [char]0x00DF
$AE = [char]0x00C4; $OE = [char]0x00D6; $UE = [char]0x00DC

$outDir = "$PSScriptRoot\cards"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$cards = @(
    @("01-reisebuero.wav", "das Reiseb${ue}ro, die Reiseb${ue}ros"),
    @("02-online-buchen.wav", "online buchen"),
    @("03-reisepass.wav", "der Reisepass, die Reisep${ae}sse"),
    @("04-reiseversicherung.wav", "die Reiseversicherung"),
    @("05-reiseziel.wav", "das Reiseziel, die Reiseziele"),
    @("06-reisefuehrer.wav", "der Reisef${ue}hrer, die Reisef${ue}hrer"),
    @("07-direktflug.wav", "der Direktflug, die Direktfl${ue}ge"),
    @("08-umstieg.wav", "der Umstieg, die Umstiege"),
    @("09-mit-dem-zug.wav", "mit dem Zug fahren"),
    @("10-co2-fussabdruck.wav", "der CO2-Fu${ss}abdruck"),
    @("11-umweltfreundlich-reisen.wav", "umweltfreundlich reisen"),
    @("12-verspaetung.wav", "die Versp${ae}tung, die Versp${ae}tungen"),
    @("13-hotel.wav", "das Hotel, die Hotels"),
    @("14-ferienwohnung.wav", "die Ferienwohnung"),
    @("15-campingplatz.wav", "der Campingplatz, die Campingpl${ae}tze"),
    @("16-uebernachtung.wav", "die ${UE}bernachtung, die ${UE}bernachtungen"),
    @("17-fruehstueck-inklusive.wav", "Fr${ue}hst${ue}ck inklusive"),
    @("18-pauschalreise.wav", "die Pauschalreise"),
    @("19-individualreise.wav", "die Individualreise"),
    @("20-backpacking.wav", "das Backpacking"),
    @("21-kreuzfahrt.wav", "die Kreuzfahrt, die Kreuzfahrten"),
    @("22-all-inclusive.wav", "die All-Inclusive-Reise"),
    @("23-massentourismus.wav", "der Massentourismus"),
    @("24-klimakrise.wav", "die Klimakrise"),
    @("25-kulturschock.wav", "der Kulturschock"),
    @("26-sprachbarriere.wav", "die Sprachbarriere, die Sprachbarrieren"),
    @("27-tourismussteuer.wav", "die Tourismussteuer"),
    @("28-eco-tourismus.wav", "der Eco-Tourismus"),
    @("29-slow-travel.wav", "Slow Travel"),
    @("30-heimaturlaub.wav", "der Heimaturlaub"),
    @("31-statt-zu-fliegen.wav", "Statt zu fliegen"),
    @("32-im-gegensatz-zu.wav", "Im Gegensatz zu")
)

$total = $cards.Count
$ok = 0
foreach ($card in $cards) {
    $filename = $card[0]
    $text = $card[1]
    $outPath = Join-Path $outDir $filename
    try {
        $synth.SetOutputToWaveFile($outPath)
        $synth.Speak($text)
        $synth.SetOutputToNull()
        $ok++
        Write-Host "  [$ok/$total] $filename" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $filename -- $_" -ForegroundColor Red
    }
}

$synth.Dispose()
Write-Host ""
Write-Host "Generated $ok / $total WAV files in $outDir" -ForegroundColor Cyan
