---
name: eduki
description: Bereitet ein fertiges Unterrichtsmaterial (PDF/HTML/DOCX) für die Veröffentlichung auf eduki auf — Titel, Materialbeschreibung, Tags, Preisempfehlung, Lizenz-/Urheber-Check und Vorschaubilder. Beherrscht zwei Modi, weil Materialverkauf laut Sichtbarkeits-Strategie (sichtbarkeits-strategie/STRATEGIE.md, Säule D) in Jahr 1 bewusst aufgeschoben ist: Freebie-Aufbereitung mit CC-BY-NC-ND (jetzt, als Lead-Kanal) und Verkaufs-Listing (später, ab der Gewerbe-Entscheidung Q4 2027). Claude verwendet diesen Skill, wenn Michael ein fertiges Material zur Veröffentlichung nennt. Trigger: "/eduki", "fürs eduki aufbereiten", "Material veröffentlichen", "eduki-Listing", "Materialbeschreibung schreiben". NICHT für die didaktische Prüfung des Materials selbst (Stolperstellen, Fehleranfälligkeit, Aufgabenqualität) — dafür den Skill "schueleraugen" verwenden. NICHT für die Business-Einordnung, ob sich ein Verkauf überhaupt lohnt oder wie eduki zur Gesamtstrategie passt — dafür den Skill "berater" verwenden. Veröffentlicht nie selbst; erzeugt nur das Listing-Paket zum manuellen Hochladen.
---

# eduki-Veröffentlichung

Bereitet ein fertiges Material für eduki auf: Listing-Paket erzeugen, Qualitäts-Gate prüfen, Vorschaubilder anweisen, Ablage pflegen. Der Skill entscheidet nicht, ob sich ein Material lohnt (→ "berater"), und prüft nicht die didaktische Substanz (→ "schueleraugen"). Er verarbeitet, was bereits fertig ist.

## Kontext, den dieser Skill kennen muss

Materialverkauf ist in Jahr 1 bewusst zurückgestellt (siehe STRATEGIE.md, Rechtliches Punkt 5 und Anhang "Verworfene Wege"): echter Verkauf wäre gewerblich (Gewerbeanmeldung, IHK, erweiterte Nebentätigkeitsanzeige) und verwässert die Honorar-Fokussierung von Jahr 1. Deshalb laufen Materialien zunächst als **Freebies unter CC-BY-NC-ND** (Reichweite ja, kommerzielle Übernahme durch Wettbewerber nein, max. 1 Update/Jahr, siehe Säule D). Die Gewerbe-Entscheidung fällt erst in Q4 2027.

Daraus folgt für diesen Skill: **beide Modi müssen jederzeit abrufbar sein.** Bis auf Widerruf ist Freebie der Standardmodus — Verkaufsmodus nur, wenn Michael ihn ausdrücklich anfragt oder die Gewerbe-Entscheidung bereits gefallen ist. Im Zweifel nachfragen, nicht annehmen.

## Abgrenzung

- **Didaktische Qualität, Stolperstellen, Fehleranfälligkeit des Materials selbst:** nicht dieser Skill. Delegieren an "schueleraugen" (siehe Schritt 2).
- **Ob sich Verkauf/Veröffentlichung überhaupt lohnt, Timing gegen die Strategie, Gewerbe-Frage:** nicht dieser Skill. Delegieren an "berater".
- Dieser Skill nimmt beide Entscheidungen als gegeben und kümmert sich um die handwerkliche Aufbereitung des Listings.

## Workflow

### 1. Eingang & Klärung

Michael nennt ein fertiges Material (Pfad zu PDF/HTML/DOCX). Claude liest es vollständig, bevor irgendetwas erzeugt wird (Umfang, Aufbau, Differenzierung, Seitenzahl, enthaltene Elemente).

Danach höchstens 4 Rückfragen — nur die, deren Antwort sich nicht aus dem Material oder aus dem bisherigen Gespräch ergibt:

1. **Zielgruppe:** Klassenstufe, Schulform, Fach.
2. **Modus:** Freebie (CC-BY-NC-ND) oder Verkauf. Standardannahme Freebie, wenn nicht anders gesagt — trotzdem explizit bestätigen lassen.
3. **Differenzierungsniveau:** ein Niveau oder LZK mit zwei Niveaustufen (Standard bei Michaels Material)? Welche Stufen?
4. **Alleinstellungsmerkmal:** Was unterscheidet dieses Material von den üblichen eduki-Treffern zum selben Thema (z. B. interaktives HTML-Tool statt reinem Arbeitsblatt, spezifischer Kontext, Differenzierungstiefe)?

Bereits beantwortete Fragen nicht wiederholen. Nie mehr als 4 Fragen in einer Runde.

### 2. Qualitäts-Gate

Vor jeder Listing-Erstellung prüfen: Hat Michael das Material bereits mit "schueleraugen" begutachten lassen (Stolperstellen, missverständliche Formulierungen, Fehleranfälligkeit)?

- **Falls ja:** Ergebnis kurz referenzieren, weiter mit Schritt 3.
- **Falls nein oder unklar:** aktiv vorschlagen, zuerst "schueleraugen" auf das Material anzusetzen, und erst danach das Listing zu bauen. Nicht selbst durchführen — das ist Aufgabe des anderen Skills. Nur bei ausdrücklichem "trotzdem jetzt" von Michael ohne Gate weitermachen, dann im Listing-Paket vermerken, dass das Gate übersprungen wurde.

### 3. Listing-Paket erzeugen

Alle Teile in `listing.md` (siehe Ablage-Template unten), unabhängig vom Modus, außer wo vermerkt.

**(a) eduki-Titel**
Max. ca. 60 Zeichen, suchwortstark: Fach + Thema + Klassenstufe/Schulform + Materialtyp (z. B. "Bruchrechnung LZK 2 Niveaus Kl. 6 IGS"). Keine Füllwörter, keine Ausrufezeichen.

**(b) Materialbeschreibung**
Nach eduki-Konventionen, Fließtext plus Stichpunkte, in dieser Reihenfolge:
- Was ist enthalten (Materialtyp, Anzahl Aufgaben/Seiten, Lösungen ja/nein)
- Einsatzszenario (Unterrichtsphase, Sozialform, Zeitbedarf)
- Differenzierung (Niveaustufen, wie sie sich unterscheiden)
- Umfang/Seitenzahl
- Benötigte Vorkenntnisse

**(c) Suchbegriffe/Tags**
10–15 Stück, Mischung aus Fachbegriff, Klassenstufe, Schulform, Materialtyp, Themenbereich (Lehrplan-nah formulieren). In `tags.txt` ablegen, eine Zeile pro Tag oder kommagetrennt.

**(d) Preisempfehlung (nur Verkaufsmodus; im Freebie-Modus entfällt dieser Punkt — Preis ist 0)**
Heuristik als Ausgangspunkt:
- Einzelnes Arbeitsblatt: 1–3 €
- LZK-Paket (mit Niveaustufen, Lösungen): 3–6 €
- Reihe/Themenpaket (mehrere Einheiten): 8–15 €

Wenn Web-Recherche verfügbar ist: 3–5 vergleichbare eduki-Listings zum selben Thema/Klassenstufe suchen und Preis danach kalibrieren, nicht blind die Heuristik übernehmen. Begründung mit konkretem Vergleich in `preis-begruendung.md` festhalten (Vergleichsmaterial, Preis, Unterschied zum eigenen Material).

**(e) Lizenz-/Urheber-Check — Pflichtblock, immer, beide Modi**
Vor jeder Freigabe explizit durchgehen und im Listing als Checkliste dokumentieren:
- Keine fremden Logos im Material
- Verwendete Schriften geklärt (Newsreader, Hanken Grotesk: OFL, unkritisch — andere Schriften einzeln prüfen)
- Keine Aufgaben aus Schulbüchern/fremden Werken übernommen
- Keine echten Schülerdaten (Namen, Noten, Fotos) — nur synthetische Beispiele
- Bildquellen geklärt (eigene Erstellung, gemeinfrei, oder Lizenz vorhanden und vermerkt)

Bei offenem Punkt: nicht weitermachen, Punkt an Michael zurückspielen. Kein Listing mit ungeklärtem Lizenzpunkt gilt als abschlussbereit.

### 4. Vorschaubilder

Anweisung an Michael (Claude rendert nicht selbst ohne entsprechendes Werkzeug, kann aber die Schritte konkret vorgeben bzw. bei vorhandenen Tools ausführen):
- 3–5 Vorschauseiten als PNG.
- Erste Seite immer dabei (Wiedererkennung, sauberes Layout).
- 2–4 weitere, repräsentative Innenseiten (nicht nur Titelseite + Lösungen — Aufgabentyp und Differenzierung sollen erkennbar sein).
- Bei Verkaufsmaterial: dezentes Wasserzeichen (Domain oder "Vorschau", niedrige Deckkraft, diagonal oder am Rand — nicht materialdeckend).
- Bei Freebie-Material: kein Wasserzeichen nötig, da das ganze Material ohnehin frei verfügbar ist.
- Dateiablage: `vorschau/` im Material-Ordner (siehe Schritt 6).

### 5. Freebie-Modus — zusätzliche Schritte

Nur wenn Modus = Freebie:

- **CC-BY-NC-ND-Lizenzhinweis** für die PDF-Fußzeile formulieren und ins Material einfügen (lassen):
  „Dieses Material ist lizenziert unter CC BY-NC-ND 4.0 (Namensnennung – Nicht kommerziell – Keine Bearbeitung). © [Jahr] Michael Schippers, michaelschippers.de"
- **Verweis auf die Angebotsseite** michaelschippers.de in Material und Listing-Beschreibung aufnehmen — das Freebie ist Lead-Kanal für die Sichtbarkeits-Strategie (Säule D), kein Selbstzweck.
- **Update-Grenze beachten:** max. 1 Update pro Jahr, ausgelöst durch echten Anlass (Fehlerkorrektur, curricularer Änderungsbedarf), nicht nach Kalender. Im Index vermerken, wann zuletzt aktualisiert.

### 6. Ablage

Alles unter `projekte/Business/eduki/<material-slug>/`:

```
projekte/Business/eduki/<material-slug>/
  listing.md              # Titel, Beschreibung, Zielgruppe, Modus, Lizenz-Check
  tags.txt                # 10-15 Suchbegriffe
  preis-begruendung.md    # nur Verkaufsmodus
  vorschau/                # PNG-Vorschauseiten
```

`<material-slug>` = kurzer, sprechender Ordnername (z. B. `bruchrechnung-lzk-kl6`).

Zusätzlich Statuszeile in `projekte/Business/eduki/eduki-INDEX.md` pflegen (Tabelle, neue Zeile pro Material, bestehende Zeile bei Statuswechsel aktualisieren):

| Material | Modus | Status | Datum |
|---|---|---|---|
| Bruchrechnung LZK Kl. 6 | Freebie | Entwurf | 2026-07-12 |

Status-Werte: `Entwurf` (Listing steht, noch nicht hochgeladen), `online` (von Michael veröffentlicht — Claude setzt diesen Status nur, wenn Michael die Veröffentlichung bestätigt hat, nie eigenständig).

### 7. Nie autonom veröffentlichen

Dieser Skill erzeugt ausschließlich das Listing-Paket in `projekte/Business/eduki/`. Kein automatischer Upload, kein Öffnen der eduki-Plattform im Namen von Michael, keine Statusänderung auf `online` ohne seine Bestätigung. Michael kopiert Titel, Beschreibung, Tags, Preis und Vorschaubilder selbst in die eduki-Oberfläche.
