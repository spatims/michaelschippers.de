# Öffentliche Claude-Skills & -Plugins: Recherche für Michael Schippers

**Stand:** 12.07.2026 · **Methode:** Websuche + Verifikation jedes Fundes per GitHub-API (Sterne, letzter Push, Lizenz) und Lesen der SKILL.md/README-Inhalte. Aufgenommen wurde nur, was tatsächlich verifiziert werden konnte — Repos, die sich nicht öffnen ließen oder deren Inhalt vage blieb, sind entsprechend gekennzeichnet.

**Ausgangslage:** Du hast bereits Dokument-Skills (docx/xlsx/pptx/pdf), skill-creator, sowie eigene Skills für Lektorat, Schreibstil, Didaktik-Review, LZK-Generator, Infografiken, ein Folien-Plugin, Dashboards, Business-Berater und ein Tagesstart-Plugin — dazu laut `workflow-audit/AUDIT.md` die drei neuen Entwürfe `/fallstudie`, `/akquise`, `/eduki`. Nichts davon wird hier erneut empfohlen; es geht um echte Lücken.

⚠️ **Sicherheitshinweis vorab:** Eine SKILL.md ist keine passive Dokumentation, sondern ein Text, den Claude als Anweisung ausführt — inklusive aller darin verlinkten Skripte. Installiere nur aus Repos, deren Autor/Organisation du einschätzen kannst, und **lies die SKILL.md einmal komplett durch**, bevor du sie aktivierst. Bei Skills mit Skripten (Python/Shell) gilt das erst recht, da diese Dateien lesen/schreiben oder Netzwerkzugriffe machen können.

---

## Wie installiert man das in Cowork/Claude Code?

Zwei Wege, je nach Fund:

1. **Als Plugin über eine Marketplace** (wenn das Repo ein `.claude-plugin/marketplace.json` hat, z. B. `anthropics/skills`, `AgriciDaniel/claude-seo`):
   ```
   /plugin marketplace add <owner>/<repo>
   /plugin install <plugin-name>@<marketplace-name>
   ```
2. **Als einzelner Skill-Import** (wenn nur eine SKILL.md ohne Plugin-Wrapper vorliegt, z. B. `aevans-eng/seo-skill`): Datei nach `~/.claude/skills/<name>/SKILL.md` kopieren, oder in Cowork über die Skill-Upload-Funktion einlesen lassen (ggf. mit skill-creator anpassen).

Bei allen Funden unten steht der jeweils passende Weg dabei.

---

## Einzelfunde

### 1. `anthropics/skills` → Skill `frontend-design`
**Link:** https://github.com/anthropics/skills (Skill-Pfad: `skills/frontend-design/SKILL.md`)

**Was er tut:** Eine Design-Methodik (kein Codegenerator) für „distinctive, intentional" Weboberflächen — führt durch Brainstorming, typografische/farbliche Entscheidungen, die sich an der Zielgruppe orientieren, und explizit gegen generische Templates. Kein SaaS-Anschluss, keine externen Aufrufe.

**Nutzen für Michael:** Genau das fehlt laut `AUDIT.md` als eigener Arbeitsauftrag Anfang August — die Angebotsseite michaelschippers.de. Statt einer generischen Landingpage hilft der Skill, einen Auftritt zu bauen, der „seriös für Schulleitungen" wirkt statt nach Templat­e auszusehen.

**Installation:** `/plugin marketplace add anthropics/skills` → `/plugin install example-skills@anthropic-agent-skills` (enthält frontend-design).

**Vertrauen:** Offizielles Anthropic-Repo, 160.560 Sterne, zuletzt gepusht 01.07.2026, aktiv gepflegt (43 Commits, 733 offene PRs zeigen reges Ökosystem). Höchstmögliche Vertrauensstufe.

---

### 2. `AgriciDaniel/claude-seo`
**Link:** https://github.com/AgriciDaniel/claude-seo

**Was er tut:** Umfassendes SEO-Plugin mit 25 Unter-Skills/18 Subagenten: technische SEO, Meta-Tags, JSON-LD-Schema, E-E-A-T-Bewertung, lokale SEO, GEO/AEO (Sichtbarkeit in KI-Suchen), PDF/Excel-Reports. Läuft standardmäßig offline; optionale kostenpflichtige Erweiterungen (DataForSEO, Firecrawl) sind nicht nötig für die Basisfunktion.

**Nutzen für Michael:** Die Angebotsseite soll gefunden werden (SEO ist explizit Teil der Anforderung). Dieses Plugin deckt weit mehr ab, als eine Ein-Personen-Seite braucht — aber gerade der Basisdurchlauf (Meta-Tags, Schema, Sitemap, Local-SEO für „Fortbildung Mathematik Niedersachsen") ist genau der Bedarf.

**Installation:** `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo`. Verifikation danach mit `/seo`.

**Vertrauen:** 11.156 Sterne, 1.631 Forks, MIT-Lizenz, zuletzt gepusht 06.07.2026 (aktiv, Release v2.2.0 im Juni 2026), Einzelautor mit sichtbarer Online-Präsenz (YouTube, Blog). Solide, aber wegen der Größe (25 Sub-Skills) lohnt ein Blick, ob nicht die schlankere Alternative unten reicht.

---

### 3. `aevans-eng/seo-skill` — leichtgewichtige Alternative
**Link:** https://github.com/aevans-eng/seo-skill

**Was er tut:** Ein einzelnes SKILL.md (keine Sub-Agenten, keine externen API-Calls) für genau den Fall „kleine statische Seite": Meta-Tags, Open Graph, JSON-LD (Person/WebSite), robots.txt, sitemap.xml, Alt-Texte, interne Links. Explizit *nicht* für E-Commerce/Enterprise gedacht.

**Nutzen für Michael:** Passt vom Zuschnitt besser zur geplanten „statischen Site ohne CMS" aus dem AUDIT als das große claude-seo-Plugin — und die gesamte Anweisung ist eine einzige, kurze Datei, die man in fünf Minuten komplett gelesen hat (guter Sicherheits-Kompromiss).

**Installation:** Datei manuell nach `~/.claude/skills/seo/SKILL.md` kopieren (kein Plugin-Wrapper vorhanden).

**Vertrauen:** Nur 4 Sterne, 1 Fork, ein einzelner Commit seit März 2026 — geringe Popularität/Praxiserprobung. MIT-Lizenz, keine Abhängigkeiten, Code ist kurz genug zum vollständigen Selbst-Review. Empfehlung: als Ausgangspunkt lesen und ggf. mit skill-creator an die eigene Seite anpassen, nicht blind übernehmen.

---

### 4. `ComposioHQ/awesome-claude-skills` → Skill `invoice-organizer`
**Link:** https://github.com/ComposioHQ/awesome-claude-skills/blob/master/invoice-organizer/SKILL.md

**Was er tut:** Liest einen Ordner voller Rechnungen/Belege (PDF/Bilder), extrahiert Lieferant, Datum, Betrag, Rechnungsnummer, benennt die Dateien einheitlich (`YYYY-MM-DD Lieferant - Rechnung - Beschreibung`), sortiert sie (nach Wahl: Lieferant/Kategorie/Datum/Steuerstatus) und erzeugt eine CSV-Zusammenfassung für die Steuererklärung.

**Nutzen für Michael:** Kein Rechnungs-*Erstellungs*-Tool (das braucht er für Kunden separat), aber genau die Ablage-/Buchhaltungsseite von „leichtgewichtiges CRM + Rechnungen als Solo-Selbstständiger" — Eingangsbelege für die Steuer sauber halten, ohne eigene Software.

**Installation:** Kein eigenständiges Plugin; SKILL.md-Ordner manuell nach `~/.claude/skills/invoice-organizer/` kopieren.

**Vertrauen:** Das Elternrepo hat 67.535 Sterne, 7.614 Forks, ist von Composio (bekannter Anbieter für Agent-Integrationen), zuletzt gepusht 22.05.2026 — hohe Reputation für die Sammlung als Ganzes.

---

### 5. `sergebulaev/linkedin-skills`
**Link:** https://github.com/sergebulaev/linkedin-skills

**Was er tut:** Zehn Skills rund um LinkedIn: Post-Writer (16 Hook-Formeln), Comment Drafter, Reply Handler, Post Audit (Algorithmus-Konformität + KI-Erkennungs-Check), **Humanizer** (entfernt typische KI-Marker wie Gedankenstriche/Floskeln), Hook Extractor, Content Planner (7-Tage-Kadenz), Engagement Monitor, Profile Optimizer, Employee Advocacy. Alle Skills verlangen explizit deine Freigabe vor Veröffentlichung — kein Autopost.

**Nutzen für Michael:** Die Strategie sieht LinkedIn ausschließlich als Substack-Recycling vor (2 Posts/Monat aus der Ausgabe). Post-Writer und Humanizer passen direkt in den geplanten `/ausgabe`-Workflow aus `AUDIT.md` Abschnitt 3 (Schritt 4: „erzeugt daraus die 2 LinkedIn-Posts"), Content Planner hilft bei der Kadenz.

**Installation:** Plattformübergreifend über `npx skills add sergebulaev/linkedin-skills` oder manuellen Kopiervorgang der einzelnen Skill-Ordner.

**Vertrauen:** 360 Sterne, 51 Forks, MIT, zuletzt gepusht 08.07.2026 (aktiv), 13 Releases — solides, wachsendes Ein-Personen-Projekt mit klarer Dokumentation.

---

### 6. `charlie947/social-media-skills` → nur `newsletter-voice` / `content-matrix` (mit Dopplungswarnung)
**Link:** https://github.com/charlie947/social-media-skills

**Was er tut:** Skill-Sammlung eines Creators mit 350k+ Followern über Substack, LinkedIn, Instagram etc. Enthält u. a. `voice-builder` (Stimme aus Schreibproben extrahieren), `newsletter-voice` (Newsletter-spezifische Schreibregeln), `post-writer`, `content-matrix` (32+ Post-Ideen aus Content-Säulen), `niche-research`.

**Nutzen für Michael:** `content-matrix` könnte helfen, aus einer Fallstudie mehr Verwertungsideen zu ziehen, als der `/ausgabe`-Workflow vorsieht.

**Wichtig — Dopplungsrisiko:** `voice-builder` deckt sich funktional mit deinem bereits vorhandenen `/schreibstil`-Skill. Beide zu installieren kann — genau wie bei den bereits erkannten `lebgpt`/`leb-generator`-Dubletten — zu konkurrierenden Trigger-Beschreibungen führen. **Nur `newsletter-voice` oder `content-matrix` einzeln übernehmen, nicht das ganze Paket.**

**Installation:** Marketplace-Eintrag, manueller Klon oder Einzel-Skill-Upload (README nennt alle drei Wege); `voice-builder` müsste laut Autor zuerst laufen, wenn man es nutzt — für Michael also gerade zu vermeiden.

**Vertrauen:** 1.676 Sterne, 412 Forks, MIT, zuletzt gepusht 20.05.2026, Autor betreibt selbst einen Substack-Newsletter (Praxisbezug vorhanden).

---

### 7. `K-Dense-AI/claude-scientific-writer` — nur einzelne Skills, nicht das ganze Bundle
**Link:** https://github.com/K-Dense-AI/claude-scientific-writer (Übersicht: `docs/SKILLS.md`)

**Was er tut:** 18 Skills für wissenschaftliches Arbeiten. Für Michael relevant sind nur drei: **Scientific Writing** (IMRaD-Struktur, Zitierstile APA/MLA/Chicago), **Literature Review** (systematische Literatursuche, PubMed/Web of Science), **Citation Management** (Google Scholar/PubMed-Suche, DOI→BibTeX). Der Rest (Klinische Berichte, NSF/NIH-Förderanträge, LaTeX-Poster) zielt auf Natur-/Medizinwissenschaft und ist für Fachdidaktik-Publikationen nicht einschlägig — die docx/pdf/pptx/xlsx-Skills im Paket dupliziert er ohnehin mit deinen vorhandenen.

**Nutzen für Michael:** Für „wissenschaftliches Schreiben/Publizieren" (z. B. Beiträge zu Tagungen wie KonfBD) ist die Zitierverwaltung und IMRaD-Anleitung ein echter Mehrwert, wenn er über die reine Lektorat-Funktion seines eigenen Skills hinausgeht.

**Installation:** Skills laden automatisch aus `.claude/skills/`; empfehlenswert, nur die drei genannten Unterordner zu kopieren statt des ganzen Repos.

**Vertrauen:** 2.090 Sterne, 252 Forks, MIT-Lizenz, aktiv (gepusht 05.07.2026), Trägerorganisation K-Dense AI (kommerzielles Produkt, kein Ein-Personen-Hobby-Repo) — überdurchschnittlich vertrauenswürdig für diese Kategorie.

---

### 8. `bahayonghang/academic-writing-skills` — nur bei LaTeX/Typst relevant
**Link:** https://github.com/bahayonghang/academic-writing-skills

**Was er tut:** 5 fokussierte Skills zur *Politur* bestehender Manuskripte (kein Erst-Entwurf): `cover-letter`, `paper-audit` (Reviewer-Perspektive), `latex-paper-en`, `latex-thesis-zh`, `typst-paper`.

**Nutzen für Michael:** Nur relevant, falls er tatsächlich in LaTeX/Typst schreibt — für deutsche Fachdidaktik-Tagungsbeiträge (z. B. GDM, KonfBD) ist das eher unüblich (meist Word-Vorlagen). Vor Installation prüfen, ob die Zielvenue LaTeX verlangt.

**Installation:** `npx skills add bahayonghang/academic-writing-skills`.

**Vertrauen:** 382 Sterne, 31 Forks, aktiv (gepusht heute, 12.07.2026) — **aber: GitHub weist für dieses Repo keine erkannte Lizenz aus** (kein LICENSE-File). Rechtlich unklar, ob/wie man den Code weiterverwenden darf; für den persönlichen Gebrauch als Kopiervorlage unkritisch, aber kein „sauberes" Open-Source-Repo wie die anderen Funde hier.

---

### 9. `obra/superpowers` — nur für den einmaligen Website-Bau, nicht für den Alltag
**Link:** https://github.com/obra/superpowers

**Was er tut:** Eine komplette Softwareentwicklungs-Methodik als Skill-Framework (Brainstorming vor dem Coden, Git-Worktrees, testgetriebene Kleinschritt-Pläne). Extrem populär.

**Nutzen für Michael:** Der einzige echte Berührungspunkt ist der einmalige Website-Bau (Woche 3, statisches Repo) — dort könnte allein der `brainstorming`-Skill helfen, Layout-Entscheidungen sauber vorzustrukturieren, bevor gebaut wird. Für den täglichen, nicht-coding-lastigen Betrieb (Substack, eduki, Workshops, CRM) ist das gesamte Framework Overkill und thematisch am Ziel vorbei.

**Vertrauen:** 252.973 Sterne(!), 22.593 Forks, MIT, sehr aktiv (gepusht 10.07.2026) — mit Abstand das größte Repo dieser Recherche, aber für Michaels Kernarbeit die falsche Kategorie.

**Empfehlung:** nicht als Ganzes installieren; höchstens den `brainstorming`-Einzel-Skill für den Website-Sprint ausleihen.

---

## Marketplaces im Überblick (geprüft, aber wenig branchenspezifisch)

- **`anthropics/claude-plugins-official`** (32.028 Sterne, Apache-2.0, gepusht heute) — die offizielle, kuratierte Marketplace. Katalog ist stark auf Software-Entwicklung/Enterprise-SaaS ausgerichtet (AWS, Datenbanken, CI/CD, Jira, Salesforce …). Für Michaels Themenfelder kaum Treffer — außer den bereits verbundenen Canva/Notion-artigen Integrationen, die laut `AUDIT.md` schon anderweitig genutzt werden. Der Wert liegt darin, dass **alle oben genannten Anthropic-Skills darüber installiert werden**.
- **`anthropics/claude-plugins-community`** — Community-Marketplace mit automatischer Sicherheitsprüfung vor Aufnahme; gleiches Bild wie oben, kein spezifischer Treffer für Lehrer/Fortbildner-Workflows gefunden.
- **„Awesome"-Listen als Fundgrube, nicht selbst verifiziert:** `travisvn/awesome-claude-skills`, `karanb192/awesome-claude-skills`, `BehiSecc/awesome-claude-skills` existieren und werden gepflegt, wurden hier aber nur als Sprungbrett genutzt (ComposioHQ/awesome-claude-skills war der einzige tief geprüfte). Lohnt sich als Lesezeichen für künftige Stichproben — aber jeden Fund dort einzeln nach demselben Muster prüfen (Sterne/Datum/Lizenz/SKILL.md lesen), bevor er installiert wird.

---

## Top-5-Empfehlung (priorisiert)

1. **`anthropics/skills` → `frontend-design`** — offiziell, kostenlos, direkt einsatzbereit für den terminkritischsten Punkt (Angebotsseite bis 20.08.).
2. **`aevans-eng/seo-skill`** (oder alternativ `AgriciDaniel/claude-seo` für mehr Tiefe) — SEO für dieselbe Seite; klein genug, um vor der Nutzung vollständig zu lesen.
3. **`sergebulaev/linkedin-skills`** (nur Post-Writer + Humanizer) — schließt die einzige noch offene Lücke im `/ausgabe`-Workflow (Schritt 4: LinkedIn-Posts erzeugen).
4. **`ComposioHQ/awesome-claude-skills` → `invoice-organizer`** — schließt die Beleg-/Steuerablage-Seite von „leichtgewichtiges CRM + Rechnungen", ohne die geplante `/akquise`-CRM-Logik zu duplizieren.
5. **`K-Dense-AI/claude-scientific-writer`** (nur Scientific-Writing/Literature-Review/Citation-Management-Unterordner) — einzige verifizierte, seriös getragene Quelle für die wissenschaftliche Schreib-/Publikationsseite.

---

## Geprüft und verworfen

| Fund | Grund für Verwerfung |
|---|---|
| `Imbad0202/academic-research-skills` (37.480 Sterne) | Trotz hoher Sternezahl: Lizenzfeld „NOASSERTION" (keine erkannte Lizenz, rechtlich unklar für Wiederverwendung), Homepage verlinkt auf eine buymeacoffee-Spendenseite statt Dokumentation — Signale sprechen für aggressive Reichweiten-Optimierung, nicht für saubere Pflege. Funktional außerdem deckungsgleich mit dem bereits vorhandenen Lektorat/Didaktik-Review-Ansatz. |
| `claude-office-skills/skills` → `invoice-template` | Erzeugt Rechnungen, benötigt aber eigene MCP-Tools (`create_docx`, `fill_docx_template`, `docx_to_pdf`), die in Cowork nicht standardmäßig vorhanden sind — Zusatzaufwand ohne klaren Mehrwert gegenüber den vorhandenen docx/pdf-Skills. |
| `claude-office-skills/skills` → `form-builder` | Für Feedbackbögen geprüft, basiert aber auf der externen Plattform „docassemble" (eigener Server nötig) — für einfache Workshop-Feedbackbögen deutlich zu schwergewichtig. Mit den vorhandenen docx/pdf-Skills direkt lösbar. |
| CRM-Automations in `ComposioHQ/awesome-claude-skills` (HubSpot, Salesforce, Zoho, Pipedrive, Close) | Auf mittelständische/Enterprise-Vertriebsteams zugeschnitten, erfordern kostenpflichtige SaaS-Accounts — für eine Solo-Selbstständigen-CRM-Tabelle unpassend und funktional dopplung zum bereits geplanten `/akquise`-Skill-Entwurf. |
| Dediziertes Skill für deutsche Kleinunternehmer-Rechnungen (Kleinunternehmerregelung, USt-Hinweis) | **Nichts gefunden.** Recherche ergab nur die themenfremde Standalone-Software `nicolettas-muggelbude/RechnungsFee` (keine Claude-Skill, eigene Buchhaltungsapp) — kein SKILL.md-Fund verifizierbar. |
| Dediziertes Skill für eduki-Publishing | **Nichts gefunden.** Bestätigt die Einschätzung aus `AUDIT.md`: eduki ist eine Nischenplattform ohne öffentliche Skill-Abdeckung — der eigene `/eduki`-Entwurf bleibt der richtige Weg. |
| `obra/superpowers` als Ganzes | Software-Entwicklungsmethodik (Git-Worktrees, TDD-Kleinschritte, Subagenten-SDLC) — passt nicht zum überwiegend nicht-coding-lastigen Tagesgeschäft; nur der `brainstorming`-Einzel-Skill wäre für den einmaligen Website-Sprint denkbar. |
| `anthropics/claude-plugins-official` / `claude-plugins-community` als Quelle für branchenspezifische Treffer | Katalog dominiert von Software-Entwicklungs- und Enterprise-SaaS-Plugins (AWS, Datenbanken, CI/CD); keine Treffer für Lehrer-/Fortbildner-/Solo-Consulting-Workflows über das bereits Genutzte hinaus. |
| `charlie947/social-media-skills` → `voice-builder` (als Ganzes-Paket) | Funktional deckungsgleich mit dem vorhandenen `/schreibstil`-Skill — Installation nur einzelner Komponenten (`newsletter-voice`, `content-matrix`) statt des Gesamtpakets, um konkurrierende Skill-Trigger zu vermeiden. |

---

## Kurzfazit für die Umsetzung

Am dringendsten sind die beiden Website-Skills (`frontend-design`, `seo-skill`), weil sie exakt auf die 20.08.-Deadline aus dem AUDIT einzahlen. LinkedIn- und Rechnungsablage-Skills sind „nice to have" und lassen sich unabhängig davon jederzeit nachziehen. Bei den wissenschaftlichen Schreib-Skills lohnt sich vorher die Frage, ob überhaupt LaTeX im Spiel ist — sonst reicht der K-Dense-Ausschnitt.
