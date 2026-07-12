# Angebotsseite — Übergabe-Paket

Dieses Verzeichnis enthält das komplette Inhalts- und Code-Paket für die Angebotsseite von michaelschippers.de. Inhalte stammen 1:1 aus `sichtbarkeits-strategie/STRATEGIE.md`, Stand Juli 2026 — bei inhaltlichen Änderungen zuerst dort nachsehen, nicht nur hier editieren.

## Dateien

- **`angebot-inhalte.md`** — alle Textbausteine der Seite (Hero, Formate, Audit-Verfahren, Gegenüberstellung, Terminliste, Über mich, Buchung, Freebie, Preisargument, FAQ, Datenschutz-Hinweis), stackunabhängig als Markdown. Zum Übernehmen in jedes CMS oder jeden Site-Generator.
- **`index.html`** — eigenständige, responsive HTML-Seite mit den gleichen Inhalten, komplett inline gestylt (kein externes CSS/JS außer den Google-Fonts-Links). Kann 1:1 gehostet oder als Vorlage für die bestehende Live-Site zerlegt werden.

## Offene Platzhalter — vor dem Livegang ersetzen

- **`[BUCHUNGSLINK]`** — im Terminbuchungs-Block und im Freebie-Formular. Aktuell verlinkt der Button nirgendwohin.
- **`[TERMINE AUS BLACKOUT-KALENDER EINTRAGEN]`** — Abschnitt „Verfügbare Ganztagstermine 2026/27". Die zwei Beispieleinträge in der Tabelle sind nur Struktur-Demos, keine echten Termine — durch die real extrahierten Brückentage/Ferienränder aus dem eigenen Blackout-Kalender ersetzen.
- **`[IMPRESSUM-LINK]`** und **`[DATENSCHUTZ-LINK]`** — in der Fußzeile und im Datenschutz-Hinweisblock.
- **`[Heimatregion]`** — im Hero-Umfeld nicht verwendet, aber im Über-mich-Block und in der Fußzeile („Region [Heimatregion]").
- **`[Jahr]`** — Copyright-Zeile in der Fußzeile.
- **Private E-Mail-Adresse** — im aktuellen Entwurf nirgends direkt als Text sichtbar (Kontaktaufnahme läuft ausschließlich über den Buchungslink und das Freebie-Formular). Falls eine direkte Mailto-Adresse ergänzt werden soll: ausschließlich die private Adresse verwenden, nie eine dienstliche (IServ/NiBiS).
- **Freebie-Formular in `index.html`** — aktuell ein reines HTML-Formular ohne Backend/Action. Muss an den tatsächlichen Double-Opt-in-Dienst (z. B. Mailchimp, Newsletter2Go) angebunden werden.
- **Referenzblock** — bewusst als HTML-Kommentar in `index.html` (Abschnitt „Über mich") sowie als auskommentierter Platzhalter in `angebot-inhalte.md` hinterlegt. Laut Strategie erst ab Q2 2027 aktivieren, nur mit externen Piloten, keine eigene Schule.

## Wichtig für die Weiterbearbeitung

Die Sprachregeln aus der Strategie sind bindend: „Audit" ist erlaubt, „Beratung"/„Prozessbegleitung" nicht als Leistungsbezeichnung; keine Landeslogos; keine amtliche-Nähe-Anmutung; eigene Schule nie als Referenz. Details siehe Kopf von `angebot-inhalte.md`.
