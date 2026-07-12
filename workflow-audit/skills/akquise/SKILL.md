---
name: akquise
description: Führt die laufende Verwaltung der Schul-Direktakquise aus Säule A der Sichtbarkeitsstrategie — CRM-Pflege für die 50–60-Schulen-Zielliste, das dienstrechtliche Stundenprotokoll (§ 73 NBG), die UWG-konforme Vorbereitung von Kontakt-Wellen und den Blackout-Abgleich gegen Klausur-/Prüfungsphasen. Verwenden bei: CRM aktualisieren, Nachfässe prüfen, eine Welle vorbereiten, Stunden protokollieren, oder vor jedem Akquise-Schritt (Anruf, Mail, Post, Termin), um gegen den Blackout-Kalender zu prüfen. Trigger: "/akquise", "CRM aktualisieren", "Welle vorbereiten", "wen muss ich nachfassen", "Stundenprotokoll", "Akquise-Stand", "Stunden eintragen", "ist [Datum] Blackout". NICHT für: strategische Gesamtbewertung, Kurskorrektur oder KPI-Interpretation (Skill "berater"/"cockpit" — akquise liefert nur die Rohzahlen zu), NICHT für das Schreiben der Substack-Ausgabe oder anderer Content-Texte, NICHT für das Verfassen von Fortbildungsmaterial. Versendet nichts selbst — legt nur Entwürfe ab.
---

# Akquise — CRM, Stundenprotokoll, Wellen, Blackout

Dieser Skill verwaltet den operativen Unterbau von Säule A der Sichtbarkeitsstrategie (`sichtbarkeits-strategie/STRATEGIE.md`). Er trifft keine strategischen Entscheidungen und schreibt keine Werbetexte von Grund auf — er pflegt Daten, hält Fristen sichtbar, produziert Entwürfe aus vorhandenen Textbausteinen und schützt Michael vor UWG- und dienstrechtlichen Fehlern, die die gesamte Strategie gefährden würden (§ 73 Abs. 2 NBG).

**Datenablage (immer diese Pfade, relativ zum Projektverzeichnis):**
- `projekte/Business/akquise/crm.md` — Zielliste als Markdown-Tabelle
- `projekte/Business/akquise/stundenprotokoll.md` — Append-only-Stundenerfassung
- `projekte/Business/akquise/blackout-kalender.md` — Blackout-Wochen
- `projekte/Business/akquise/vorlagen/` — Textbausteine (Telefon-Skript, Post-Einseiter, Mail-Vorlagen, Weiterempfehlungs-Mail)
- `projekte/Business/akquise/wellen/welle-<N>-entwuerfe.md` — abgelegte, personalisierte Entwürfe je Welle

**Datenschutz (verbindlich):** Diese Dateien enthalten dienstlich relevante Kontaktdaten von Schulen (Schulleitungen, Sekretariate). Sie bleiben ausschließlich auf privater lokaler Infrastruktur. Niemals in Cloud-Dienste, Notiz-Apps mit Sync-Funktion, IServ oder NiBiS kopieren oder spiegeln — das steht so in der Strategie (Sphärentrennung dienstlich/privat, Rechtliches & Formales Punkt 4). Kein Tool in diesem Skill lädt CRM-Inhalte irgendwohin hoch; Ausgaben bleiben lokale Dateien.

Wenn eine der vier Zieldateien fehlt, beim ersten Bedarf mit Kopfzeile/Tabellenschema neu anlegen (Schema siehe unten) statt den Lauf abzubrechen — außer bei `blackout-kalender.md`: fehlt sie, sofort darauf hinweisen, dass Woche 1 der 90-Tage-Roadmap ("Blackout-Kalender bauen") noch aussteht, und ohne Blackout-Daten keine Welle freigeben.

Michael sagt in der Regel, welche der vier Funktionen er braucht. Ist das nicht eindeutig, aus dem Kontext ableiten (z. B. "was steht diese Woche an" → CRM-Pflege + Blackout-Check kombiniert) oder kurz nachfragen. Mehrere Funktionen können in einem Lauf kombiniert werden.

---

## Funktion 1 — CRM-Pflege

Tabelle `projekte/Business/akquise/crm.md`, Spalten in dieser Reihenfolge:

| Schule | Schulform | Ort | Ansprechperson | Kanal Erstkontakt | Einwilligung Infomaterial | Letzter Kontakt | Nächster Schritt | Fällig am | Status |
|---|---|---|---|---|---|---|---|---|---|

- **Kanal Erstkontakt:** Telefon / Post / mpB-Empfehlung — entspricht der Erstkontakt-Hierarchie der Strategie (warm > Telefon > Post; Mail ist kein Erstkontaktkanal).
- **Einwilligung Infomaterial:** Pflichtfeld, Format `ja, TT.MM.JJJJ` oder `nein`. Ohne dokumentiertes „ja" + Datum ist diese Schule für Funktion 3 (Wellen) **nicht** mailfähig — das ist die UWG-Absicherung (§ 7 Abs. 2 UWG). Ein „ja" ohne Datum zählt als unvollständig und wird bei jedem Lauf als Datenlücke gemeldet.
- **Status:** kalt / kontaktiert / Gespräch / Pilot / Auftrag / abgesagt.
- **Nächster Schritt + Fällig am:** freier Text + Datum, z. B. "Telefon-Slot Mi nachfassen — 13.08.2026".

**Bei jedem Lauf, in dieser Reihenfolge:**
1. **Überfällige Nachfässe zuerst** — alle Zeilen mit „Fällig am" < heute, Status ≠ abgesagt/Auftrag, sortiert nach Fälligkeitsdatum (älteste zuerst). Das ist immer der erste Output-Block.
2. Datenlücken melden: fehlende Einwilligungsdaten, Status ohne „Nächster Schritt", Schulen ohne jeden Kontaktversuch seit > 4 Wochen trotz Status "kontaktiert".
3. Änderungen, die Michael nennt (neuer Kontakt, Status-Wechsel, neue Fälligkeit, neue Schule), direkt in die Tabelle eintragen. Bei neuen Schulen: alle zehn Felder abfragen, mindestens Schule/Ort/Status kalt sind Pflicht, Rest kann "offen" sein.
4. Zielgröße im Blick behalten: Gesamtzahl der Zeilen gegen den Korridor 50–60 Schulen spiegeln (nicht künstlich auffüllen, nur melden, wenn deutlich darunter/darüber).

Kein automatisches Löschen von Zeilen — abgesagte Schulen bleiben mit Status "abgesagt" stehen (Historie für die Anlass-Analyse in Q4 der Strategie).

---

## Funktion 2 — Stundenprotokoll

Append-only-Tabelle `projekte/Business/akquise/stundenprotokoll.md`:

| Datum | Tätigkeit | Stunden |
|---|---|---|

**Bei jedem Lauf:**
1. Kurz abfragen, was seit dem letzten Eintrag (letztes Datum in der Tabelle) an nebentätigkeitsrelevanter Arbeit angefallen ist (Akquise, Formate bauen, Durchführung, Substack, Admin, Fahrt). Nur anhängen, nie vorhandene Zeilen verändern oder umsortieren — dienstrechtliche Beweiskraft (§ 73 Abs. 3 NBG) hängt an der lückenlosen, unveränderten Historie.
2. Monatssumme automatisch berechnen und ausweisen (aktueller Kalendermonat).
3. **Warnung**, wenn der laufende Monats-Durchschnitt über ca. 5 h/Woche steigt (Richtwert aus der Fünftel-Vermutung § 73 Abs. 3 NBG — Michaels Grundlast laut Strategie liegt bei ~4,75 h/Woche, mit dokumentierten Spitzenwochen in Akquise-Fenstern). Die Warnung ist ein Hinweis, keine Sperre — Spitzenwochen sind laut Strategie erlaubt, solange dokumentiert.
4. Bei sehr hohen Einzeleinträgen (> 8–10 h in einer Woche) explizit auf die Blackout-Regel hinweisen: solche Wochen sollen laut Zeitbudget-Realität die Ausnahme sein (Ganztag/Tagung), nicht der Regelfall.

Nie rückwirkend Einträge "glätten" oder zusammenfassen — jede Tätigkeit einzeln, mit Datum, damit die Tabelle im Streitfall als Nachweis taugt.

---

## Funktion 3 — Wellen-Vorbereitung

Erzeugt aus dem aktuellen CRM-Stand die nächste Kontakt-Welle nach der Erstkontakt-Hierarchie der Strategie:

1. **Warm zuerst:** Schulen mit Kanal "mpB-Empfehlung" oder einer Notiz zu einer Pilot-Weiterempfehlung → personalisierter warmer Text (Referenz auf die vermittelnde Person/Schule nennen).
2. **Telefon-Kurzanfrage:** Schulen mit Status "kalt" und noch keinem dokumentierten Erstkontakt → Telefon-Skript aus `vorlagen/` als Gesprächsleitfaden ausgeben (kein Versand nötig, das ist ein Anruf-Vorbereitungstext), inkl. der Bitte um Erlaubnis, Infomaterial zusenden zu dürfen.
3. **Postalischer Einseiter:** Schulen, die telefonisch nicht erreicht wurden (aus "Letzter Kontakt"/"Nächster Schritt"-Notizen ersichtlich) oder bei denen Post laut Strategie der Fallback ist → Einseiter-Vorlage personalisieren (Schule, Ort, Ansprechperson).
4. **Mail:** **ausschließlich** an Zeilen mit Einwilligung Infomaterial = "ja" + Datum. Vor jeder Mail-Erzeugung diesen Filter laut nennen und die Anzahl der dadurch ausgeschlossenen Schulen mit fehlender Einwilligung separat auflisten — das ist die zentrale UWG-Kontrollstelle des Skills.
5. Textbausteine aus `projekte/Business/akquise/vorlagen/` ziehen (Telefon-Skript, Post-Einseiter, Mail-Erstkontakt, Mail-Nachfass, Weiterempfehlungs-Mail). Fehlt ein Baustein, das melden statt frei zu texten — Textentwicklung ist nicht Aufgabe dieses Skills, nur Personalisierung vorhandener Vorlagen.
6. Alle Entwürfe personalisiert (Schulname, Ort, Ansprechperson, ggf. Referenz) in `projekte/Business/akquise/wellen/welle-<N>-entwuerfe.md` ablegen, klar gruppiert nach Kanal, mit der jeweiligen Schule referenziert.
7. **Nie selbst versenden, keine Mail-, Post- oder Telefon-Aktion auslösen.** Der Skill liefert ausschließlich Entwürfe zur manuellen Freigabe und zum manuellen Versand durch Michael.
8. Nach Erzeugung: CRM-Zeilen der betroffenen Schulen mit neuem "Nächster Schritt" (z. B. "Rückmeldung abwarten") und plausibler Fälligkeit aktualisieren — auf Bestätigung durch Michael warten, bevor das automatisch geschieht, wenn unklar ist, ob die Welle tatsächlich so verschickt wird.

**Vor Ausgabe der Welle immer Funktion 4 (Blackout-Check) auf den geplanten Versand-/Anrufzeitraum anwenden.**

---

## Funktion 4 — Blackout-Check

Liest `projekte/Business/akquise/blackout-kalender.md`. Erwartetes Schema:

| Zeitraum | Typ | Beschreibung |
|---|---|---|

Typen: Klausurblock, Notenkonferenz, Zeugnisphase, Abiturphase, Elternsprechtag (entsprechend Rechtliches/Zeitbudget-Abschnitt der Strategie).

**Prüflogik:**
1. Jeden geplanten Termin oder jede geplante Welle (Versanddatum, Telefon-Slot, Gesprächstermin, Durchführungstermin) gegen die Zeiträume in der Tabelle abgleichen.
2. Liegt ein Termin in einem Blackout-Zeitraum: klar melden, welcher Blackout-Eintrag greift, und **keine** eigene Verschiebung vorschlagen, ohne dass Michael das bestätigt — die Strategie sagt ausdrücklich "Blackout schlägt Roadmap", das heißt: der Termin entfällt oder verschiebt sich aus dem Blackout heraus, nicht die Blackout-Regel wird aufgeweicht.
3. **Zwei-Strikes-Regel:** Mitzählen, wie oft in Folge eine geplante Welle/ein geplanter Termin gegen den Blackout-Kalender verstoßen hätte (d. h. wie oft Michael eine Blackout-Warnung ignoriert bzw. wie oft in Folge ein Termin erst nachträglich als Blackout-Verstoß auffiel). Bei zwei aufeinanderfolgenden gerissenen Blackout-Regeln: die nächste anstehende Welle explizit **streichen, nicht verschieben** — das so benennen und als eigenen Hinweis ausgeben, nicht stillschweigend umplanen. Diesen Zähler in einer kurzen Notiz am Ende von `blackout-kalender.md` oder direkt im Lauf-Output mitführen, damit er über mehrere Läufe hinweg nachvollziehbar bleibt.
4. Wenn `blackout-kalender.md` für den betroffenen Zeitraum keine Einträge enthält (z. B. weil das Schuljahr noch nicht eingetragen wurde), das explizit als Lücke benennen statt stillschweigend "kein Blackout" anzunehmen.

Dieser Check ist verpflichtender Vorlauf für Funktion 3 und für jede Terminierung (Pilot, Erstgespräch, Ganztag), die im Gespräch erwähnt wird — auch außerhalb eines expliziten "Blackout-Check"-Auftrags.

---

## Status-Ausgabe am Ende jedes Laufs

Kompakter Block, unabhängig davon, welche Funktion(en) gelaufen sind — dieselben Kennzahlen, die auch das `/cockpit`-Dashboard zeigt, damit beide Quellen nie auseinanderlaufen:

- Kontakte gesamt (Zeilen im CRM, ohne "abgesagt" ggf. separat ausweisen)
- Offene Nachfässe (überfällige "Fällig am"-Einträge)
- Erstgespräche (Status "Gespräch" oder höher)
- Monats-Stunden (laufender Monat, aus dem Stundenprotokoll)

Bei Bedarf ergänzend: Anzahl mailfähiger Kontakte (Einwilligung = ja), aktueller Blackout-Status (frei/eingeschränkt) für die nächsten zwei Wochen.

---

## Abgrenzung

- **Keine strategische Bewertung:** ob die Zahlen gut oder schlecht sind, ob die Strategie angepasst werden muss, Kurskorrektur-Signale interpretieren — das ist Aufgabe von `berater`/`cockpit`. Dieser Skill liefert Rohzahlen zu, bewertet sie nicht.
- **Kein Content:** keine Substack-Ausgaben, keine Fallstudientexte, keine Fortbildungsmaterialien. Für Textbausteine in `vorlagen/` gilt: personalisieren, nicht neu verfassen.
- **Kein Versand:** nie eigenständig Mails senden, Anrufe tätigen oder Post auslösen. Immer nur Entwürfe/Vorbereitung.
- **Keine Cloud-Synchronisation der CRM-Daten**, keine Ablage in IServ/NiBiS.

Stil: nüchtern, präzise, deutsch. Bei Unsicherheit lieber eine Datenlücke benennen als eine Annahme stillschweigend treffen — bei dienstrechtlich und UWG-relevanten Feldern (Einwilligung, Stundenprotokoll, Blackout) gilt das strikt.
