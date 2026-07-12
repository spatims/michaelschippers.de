# Workflow-Audit: Tägliche Arbeit mit Cowork (Juli 2026)

**Für:** Michael Schippers · **Anlass:** Durchsicht des gesamten Arbeits-Setups (Website, Substack, eduki, Strategie, Workshops, Schule, Wissenschaft) auf Verbesserungen, Automatisierung, Plugins und öffentliche Skills · **Stand:** 12.07.2026

**Grundlage:** die 12-Monats-Strategie (`sichtbarkeits-strategie/STRATEGIE.md`), die 24 aktiven Cowork-Skills und 8 Plugins.

---

## Gesamtbild

Das Setup ist in den **Produktions-Bereichen stark** (Material, Texte, Dokumente, Dashboards) und in den **Betriebs-Bereichen dünn** (Akquise, Fallstudien-Erfassung, eduki, Website). Genau die Betriebs-Bereiche trägt aber die Strategie ab August: CRM, Wellen, Stundenprotokoll, Fallstudien-Korpus, Angebotsseite. Die drei größten Lücken sind als Skill-Entwürfe in `workflow-audit/skills/` beigelegt und können direkt in Cowork importiert werden.

| Bereich | Abdeckung heute | Größte Lücke |
|---|---|---|
| Schule (Material, LEB, LZK) | ●●●● sehr gut | — (bestes Segment) |
| Texte & Stil (Lektor, Schreibstil, Übersetzer) | ●●●● sehr gut | — |
| Strategie/Business-Überblick (berater, cockpit, wip, log) | ●●● gut | Zahlen kommen nicht aus dem operativen Geschäft |
| Workshops/Fortbildung (folien, infografik, sw-minimal) | ●●● gut | Feedbackbogen + Einwilligungen als fester Baustein |
| Substack | ●● teilweise | nur Lese-Digest (fremde Beiträge), kein Produktions-Skill für die eigene Ausgabe |
| Website michaelschippers.de | ● kaum | Repo enthält noch keine Website — laut Plan bis 20.08. live |
| eduki | ○ fehlt | kompletter Veröffentlichungs-Workflow → **Skill-Entwurf `eduki`** |
| Akquise/Betrieb (CRM, Wellen, Stundenprotokoll, Blackout) | ○ fehlt | → **Skill-Entwurf `akquise`** |
| Fallstudien-Korpus (der „Burggraben" der Strategie) | ○ fehlt | → **Skill-Entwurf `fallstudie`** |

---

## 1. Die drei neuen Skills (Entwürfe liegen bei)

### `/fallstudie` — der wichtigste
Die Strategie nennt den dokumentierten Fallstudien-Korpus (15–20 datierte Praxisfälle) als den eigentlichen Burggraben — und er speist Substack, Praxisreport, Pitch und Website zugleich. Es gibt dafür bisher keinerlei Werkzeug. Der Entwurf: geführte 10-Minuten-Erfassung direkt nach Stunde/Fortbildung, feste Struktur, fortlaufende Nummerierung, INDEX mit Verwertungsstatus. **Ein Ritual, vier Verwertungen.**

### `/akquise` — der dienstrechtlich kritische
CRM-Zielliste mit UWG-Einwilligungsfeld, Stundenprotokoll ab Tag 1 (die Verteidigung bei § 73 NBG-Nachfragen), Wellen-Vorbereitung nach der Erstkontakt-Hierarchie, Blackout-Check gegen den Klausurkalender. Das ist der Skill, der die „~0,25 h/Woche Admin" aus der Strategie realistisch macht.

### `/eduki` — der aufgeschobene, aber vorbereitete
Jahr 1 = Freebies (CC-BY-NC-ND), Verkauf frühestens nach der Q4-Entscheidung. Der Skill kann beide Modi: Freebie-Aufbereitung mit Lizenzblock + Verweis auf die Angebotsseite jetzt, komplettes Verkaufs-Listing (Titel, Beschreibung, Tags, Preisempfehlung, Urheber-Check, Vorschaubilder) später. Qualitäts-Gate über `/schueleraugen` ist eingebaut.

**Import:** In Cowork jeweils den Ordner `workflow-audit/skills/<name>/` als Skill hinzufügen (oder per skill-creator einlesen und anpassen lassen).

---

## 2. Website michaelschippers.de — die terminkritischste Baustelle

Das Repo trägt den Namen der Website, enthält aber nur die Strategie. Laut 90-Tage-Plan: **Woche 3 (03.–09.08.) Angebotsseite bauen, live bis 20.08.** Anforderungen stehen fertig in der Strategie: Formate mit „ab"-Preisen, Liste der konkreten Ganztagstermine 2026/27, Terminbuchungslink, Gegenüberstellung Gratis-Landesangebot vs. Audit, später Referenzblock und Fallstudien-Auszüge, Datenschutzerklärung inkl. E-Mail-Gating.

**Empfehlung:** Die Seite als statische Site in diesem Repo bauen (GitHub Pages o.ä. — kein CMS, kein Wartungsaufwand), Inhalte als Markdown/JSON-Daten getrennt vom Layout, damit Terminliste und Referenzblock per Cowork-Session aktualisierbar sind („Termin 14.05. ist verkauft — nimm ihn von der Website" als Ein-Satz-Auftrag). Das ist ein eigener Arbeitsauftrag von ~1 Session; die Design-Skills (werkzeugkasten-Stil vs. eigenständiger, seriöser Auftritt für Schulleitungen) sind vorhanden.

⚠️ **Terminhinweis:** KonfBD27-CfP-Deadline ist der **14.07., 12 Uhr** — laut Strategie einreichen mit internem Vermerk (nur bei Zusage + Freistellung). Außerdem beginnt Woche 1 (Nebentätigkeitsanzeige ans RLSB) am **20.07.**

---

## 3. Substack: vom Lese-Digest zum Produktions-Workflow

Vorhanden: `/substack` (Digest fremder Beiträge), `/lektor`, `/schreibstil`. Es fehlt der Workflow für die **eigene monatliche Ausgabe**. Die Strategie definiert das Format bereits exakt: 1 datierte Fallstudie + 1 Niedersachsen-Meldung + Link zur Angebotsseite, dazu ein 60-Minuten-Notfallformat und die Regel „erschienen oder bewusst ausgefallen".

**Empfehlung (nach Import von `/fallstudie` fast geschenkt):** Ein schlanker Skill oder eine feste Prompt-Routine „`/ausgabe`":
1. nimmt die nächste unverwertete Fallstudie aus dem Korpus-INDEX,
2. holt die Niedersachsen-Meldung aus dem letzten `/substack`-Digest,
3. schreibt den Entwurf per `/schreibstil`, prüft per `/lektor`,
4. erzeugt daraus direkt die **2 LinkedIn-Posts des Monats** (die Strategie will LinkedIn ausschließlich als Substack-Recycling),
5. Notfallmodus: „/ausgabe notfall" = 60-Minuten-Kurzformat.
Damit kollabieren vier Strategie-Pflichten (Substack, LinkedIn ×2, Fallstudien-Verwertung) in einen Monats-Durchlauf.

---

## 4. Automatisierung: Routinen statt Merkzettel

Vorhanden und gut: `tagesstart`-Plugin, `/log` (Abendreflexion), `/wip`, `/cockpit`. Sinnvolle Ergänzungen als **geplante Routinen in Cowork** (alle so gebaut, dass sie Entwürfe liefern, nie selbst senden):

| Routine | Rhythmus | Was sie tut |
|---|---|---|
| **Wochenschluss** | Fr nachmittags | `/akquise`-Kurzlauf: überfällige Nachfässe, Stundenprotokoll-Abfrage der Woche, Blackout-Check der kommenden 14 Tage. Ersetzt das Aus-dem-Kopf-Verwalten. |
| **SVBl-Screening** | monatlich | Die Strategie verlangt: SVBl-Stellenteil (mpB-Ausschreibungen) monatlich screenen. Perfekt automatisierbar: abrufen, auf relevante Ausschreibungen filtern, Kurznotiz. |
| **Monatsausgabe-Anstoß** | 1. des Monats | Erinnert an `/ausgabe`, zeigt die unverwerteten Fallstudien und den Blackout-Status („diesen Monat darf Substack ausfallen"). |
| **Deadline-Wächter** | wöchentlich | Prüft die festen Strategie-Termine (13.08. VISION-Pitch, Welle-Fenster 07.–17.01., Frühbucher Anfang Mai …) gegen den Kalender und meldet, was in den nächsten 21 Tagen fällig ist. |

Nicht automatisieren: die Substack-Ausgabe selbst und alles mit Außenwirkung (Mails, Posts) — die Strategie setzt bewusst auf dokumentierte Einwilligungen und persönliche Freigabe; Automatisierung endet hier beim Entwurf.

---

## 5. Plugins & angebundene Dienste

- **Vorhanden und ausreichend** für die Kernarbeit: folien, tagesstart, pdf-viewer, operations, design, productivity, enterprise-search. Kein akuter Bedarf an weiteren Katalog-Plugins — die Lücken sind Skill-Lücken, keine Plugin-Lücken.
- **Canva-Anbindung** (bereits verbunden): bisher ungenutztes Potenzial für eduki-Vorschaubilder und den postalischen Einseiter — beides Q1-Deliverables. Der `/eduki`-Entwurf verweist darauf.
- **Gmail/Kalender-Anbindung** (bereits verbunden): Grundlage für Deadline-Wächter und Terminbuchungs-Follow-ups; Mails immer nur als Entwurf (deckt sich mit der UWG-Regel der Strategie).
- **Zapier** (verbunden): erst relevant, wenn der Freebie-Funnel steht (Double-Opt-in → Ablage der Leads in der CRM-Tabelle). Vorher keine Zeit investieren.

## 6. Öffentliche Skill-Repositories

Separate Recherche mit verifizierten Quellen: **`oeffentliche-skills-recherche.md`** (im selben Ordner). Wichtigste Regel dabei: Skills aus fremden Repos sind ausführbare Anweisungen — vor dem Import immer die SKILL.md lesen; im Zweifel per skill-creator eine eigene, schlankere Variante bauen (so sind auch die drei beiliegenden Entwürfe gedacht).

## 7. Kleinere Aufräum-Punkte

- **`lebgpt` und `leb-generator` sind Dubletten** (identische Beschreibung). Einen von beiden deaktivieren — sonst konkurrieren sie beim Triggern.
- Die Skill-Landschaft ist mit 24 Skills gut kuratiert; die Beschreibungen mit NICHT-für-Abgrenzungen sind vorbildlich und sollten bei den drei neuen Skills genauso gepflegt werden.
- `/cockpit` und `/berater` beziehen ihre Business-Zahlen bisher aus kuratierten Dateien; sobald `/akquise` läuft, sollten beide dessen Status-Zahlen (Kontakte, Nachfässe, Stunden) als Quelle nutzen — dann zeigt das Cockpit erstmals operative Realität statt Selbsteinschätzung.

---

## Empfohlene Reihenfolge

1. **Sofort (diese Woche):** KonfBD27-CfP (14.07.!) · `lebgpt`-Dublette deaktivieren · die drei Skill-Entwürfe durchsehen und importieren.
2. **Woche 1–2 (ab 20.07.):** `/akquise` scharf schalten (Stundenprotokoll ab Tag 1, Blackout-Kalender einpflegen — die Strategie nennt das „die wichtigste Einzelmaßnahme des Härtetests").
3. **Woche 3 (03.–09.08.):** Website als eigenen Auftrag bauen (Inhalte stehen in der Strategie).
4. **Ab Schuljahresbeginn:** `/fallstudie` als Ritual nach jedem Unterrichtsversuch · Routinen (Wochenschluss, SVBl, Deadline-Wächter) einrichten.
5. **Zur ersten Substack-Ausgabe (W7):** `/ausgabe`-Workflow aus Abschnitt 3 anlegen.
