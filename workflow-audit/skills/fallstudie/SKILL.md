---
name: fallstudie
description: Erfasst eine einzelne Praxis-Fallstudie (eigener Unterrichtsversuch oder gehaltene Fortbildung) in einer geführten Erfassung mit max. 6 Fragen, legt sie als datierte Markdown-Datei im Fallstudien-Korpus ab und aktualisiert die INDEX.md. Trigger, auf die dieser Skill anspringt: "/fallstudie", "Fallstudie festhalten", "Fallstudie anlegen", "Unterrichtsversuch dokumentieren", "das lief heute gut, halt das fest", "SchiLf dokumentieren", "Pilot dokumentieren" – typischerweise direkt nach einer Unterrichtsstunde, einem Prüfungsformat-Versuch oder einer gehaltenen Fortbildung, wenn ein Ergebnis für den Fallstudien-Korpus (Zielgröße: 15–20 datierte Fälle bis Juli 2027, siehe STRATEGIE.md Säule D und Positionierung) festgehalten werden soll. NICHT für didaktische Begutachtung oder die Frage, ob eine Stunde pädagogisch gelungen war – dafür den Skill "schueleraugen" verwenden. NICHT für die geschäftliche Einordnung einer Fallstudie (eignet sie sich als Referenz? Preiswirkung? Akquise-Nutzen bei welcher Schule?) – dafür den Skill "berater" verwenden. Dieser Skill erfasst und dokumentiert ausschließlich; er bewertet nicht didaktisch und trifft keine Geschäftsentscheidung.
---

# Fallstudie erfassen

## Zweck

Der Burggraben der Strategie ist kein Themenwissen (das ist kopierbar), sondern ein dokumentierter Fallstudien-Korpus: jeder eigene Unterrichtsversuch und jede gehaltene Fortbildung wird als kurze, datierte Fallstudie festgehalten. Dieser Korpus speist vier Dinge:

1. den monatlichen Substack (Format: 1 Fallstudie + 1 Niedersachsen-Meldung + Link zur Angebotsseite),
2. den jährlichen "Praxisreport Prüfen mit KI in Niedersachsen",
3. den Pitch bei Schulleitungen ("Diese drei Prüfungsformate laufen seit Februar in meiner 10. Klasse, hier sind die Ergebnisse"),
4. Fallstudien-Auszüge auf der Website.

Dieser Skill leistet ausschließlich die Erfassung. Er urteilt nicht über didaktische Qualität und trifft keine Aussage darüber, ob und wie eine Fallstudie geschäftlich verwertet werden sollte – beides sind eigene Skills.

## Ablauf

### 1. Geführte Erfassung (max. 6 Fragen, ca. 10 Minuten)

Direkt nach einer Unterrichtsstunde, einem Prüfungsformat-Versuch oder einer Fortbildung stellt Claude nacheinander genau diese sechs Fragen – knapp, eine nach der anderen, keine Sammel-Frageliste auf einmal:

1. **Datum.** Wann war der Versuch bzw. die Fortbildung?
2. **Kontext (anonymisiert).** Jahrgang/Fach oder Fortbildungsanlass, Schulform, Gruppengröße grob. Keine Klassenbezeichnung oder Formulierung, die eine reale Person identifizierbar macht.
3. **Material/Tool.** Welches KI-Tool, welches Aufgabenformat, welche Vorlage kam zum Einsatz?
4. **Vorgehen.** Ablauf in Kurzform – was wurde in welcher Reihenfolge gemacht?
5. **Ergebnis und Belege.** Was ist passiert? Konkrete Beobachtungen, nach Möglichkeit mit Zahlen (z. B. "18 von 24 Aufgaben zeigten X"), Schülerreaktionen ausschließlich anonymisiert/aggregiert wiedergegeben.
6. **Learnings.** Was hat funktioniert, was würde er beim nächsten Mal anders machen?

Antworten so übernehmen, wie Michael sie gibt – nicht ausschmücken, keine Bewertung einfügen ("das war didaktisch stark" o. ä. gehört nicht in diesen Skill). Bei vagen Antworten einmal gezielt nachhaken, dann mit dem Vorhandenen weiterarbeiten. Ziel ist ein belastbarer Datenpunkt in 10 Minuten, kein Interview.

### 2. DSGVO-Regeln (nicht verhandelbar)

- Keine Schülernamen, keine Klassenlisten, keine Fotos ohne dokumentierte Einzeleinwilligung (die liegt außerhalb dieses Skills).
- Nur synthetische oder anonymisierte/aggregierte Angaben zu Schülerreaktionen und -ergebnissen.
- Bei Fallstudien aus der eigenen Schule (interne Generalprobe): Schule niemals namentlich nennen, keine Formulierung, die die Schule identifizierbar macht. Laut Strategie ist die eigene Schule ausschließlich interne Generalprobe – keine kommerzielle Verwertung als benannte Referenz. Anonymisiert (z. B. für Substack, Praxisreport, Website-Auszug) darf die Fallstudie trotzdem verwendet werden; das Feld `quelle` im Template hält diese Unterscheidung fest.
- Bei externen Piloten/Fortbildungen: Schulname nur dann in der Fallstudie, wenn eine schriftliche Freigabe der dortigen Schulleitung vorliegt. Ohne dokumentierte Freigabe: anonymisieren, Freigabestatus im Feld `einwilligung` vermerken.
- Im Zweifel: anonymisieren statt riskieren. Rückfrage an Michael, bevor irgendetwas Identifizierendes in die Datei kommt.

### 3. Ablage

Eine Markdown-Datei pro Fallstudie im Ordner `projekte/Business/fallstudien-korpus/`.

**Dateiname:** `FS-<lfd. Nr., 3-stellig>_<Datum YYYY-MM-DD>_<kurzer-slug>.md`
Beispiel: `FS-007_2026-09-14_hinge-fragen-klasse10.md`

Vor dem Anlegen: bestehende Dateien im Ordner (bzw. die INDEX.md) prüfen und die nächste freie laufende Nummer verwenden – keine Lücken, keine Duplikate.

**INDEX.md** im selben Ordner wird bei jeder neuen Fallstudie um eine Zeile ergänzt (falls die Datei noch nicht existiert, wird sie mit Kopfzeile neu angelegt):

| Nr | Datum | Thema | Format | Verwertung |
|---|---|---|---|---|
| FS-007 | 2026-09-14 | Hinge-Fragen als Prüfungsformat, Klasse 10 | Unterrichtsversuch | Substack: offen · Report: offen · Website: offen |

Die Spalte "Verwertung" wird nur bei tatsächlicher Nutzung auf "erledigt (Ausgabe/Datum)" o. ä. aktualisiert – das passiert in anderen Workflows (Substack-Erstellung, Praxisreport), nicht automatisch durch diesen Skill.

### 4. Fallstudien-Aufbau (fester Rahmen: YAML + Prosa)

```markdown
---
nr: FS-007
datum: 2026-09-14
thema: Hinge-Fragen als Prüfungsformat, Klasse 10
format: unterrichtsversuch   # unterrichtsversuch | fortbildung | pilot
quelle: eigene-schule        # eigene-schule | extern-pilot | extern-fortbildung
einwilligung: nicht-erforderlich   # nicht-erforderlich | eingeholt | ausstehend
schueler_daten: anonymisiert
verwertung:
  substack: offen
  praxisreport: offen
  website: offen
---

## Kontext

[Jahrgang/Fach oder Fortbildungsanlass, Schulform, Gruppengröße – anonymisiert]

## Anlass

[Warum dieser Versuch/diese Fortbildung, welche Frage oder welches Problem stand dahinter]

## Vorgehen

[Ablauf in Kurzform, eingesetztes Material/Tool]

## Ergebnis

[Konkrete, datierte Beobachtungen und Belege – Zahlen wenn vorhanden, Schülerreaktionen
anonymisiert/aggregiert]

## Learnings

[Was hat funktioniert, was würde er beim nächsten Mal anders machen]

## Verwertungsstatus

[Kurzer Hinweis, wofür sich die Fallstudie eignet – ohne geschäftliche Bewertung, das macht
der Skill "berater"]
```

Reihenfolge und Feldnamen sind fix – das macht den Korpus über 15–20 Fälle hinweg durchsuchbar und für den Praxisreport auswertbar.

### 5. Abschluss jedes Laufs

Am Ende jeder Erfassung:

1. Kurzer Stand: "Korpus jetzt: X von 15–20 Fallstudien (Ziel Juli 2027)."
2. Ein Satz Einschätzung, ob sich diese Fallstudie inhaltlich als nächste Substack-Ausgabe eignet (nur inhaltliche Passung – Timing/Redaktionsplan ist nicht Teil dieses Skills).
3. Keine weiteren Vorschläge (Website-Auszug, Praxisreport-Aufnahme) von sich aus ausformulieren – das gehört in die jeweiligen anderen Workflows.

### 6. Freigabe

Der Skill schließt nie autonom ab. Entwurf der Fallstudien-Datei (und ggf. der INDEX.md-Zeile) wird Michael vorgelegt; er liest gegen, korrigiert Fakten und Anonymisierung und gibt frei. Erst nach seiner Freigabe gilt die Datei als abgelegt.
