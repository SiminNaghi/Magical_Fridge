# Kühlschrank-Management-System

## Userstories (Anforderungen)

### Produktverwaltung

1. **Anzeige von Produkten:** Eingelagerte Produkte sollen in einer übersichtlichen und kompakten Weise angezeigt werden.
2. **Hinzufügen von Produkten:** Neue Produkte können über ein Formular hinzugefügt werden.
3. **Entfernen von Produkten:** Einzelne Produkte können per Knopfdruck entfernt werden.
4. **Entfernen abgelaufener Produkte:** Alle abgelaufenen Produkte können per Knopfdruck entfernt werden.
5. **Sortieren nach Ablaufdatum:** Produkte können nach ihrem Ablaufdatum in aufsteigender Reihenfolge sortiert werden.
6. **Entfernen aller Produkte:** Möglichkeit, alle eingelagerten Produkte per Knopfdruck zu entfernen.
7. **Voreinstellungen für Produkte:** Voreinstellungen für das Hinzufügen von Produkten, inklusive vorgefertigter Werte für Name und Volumen.

### Kühlschrank-Status

1. **Gesamtkapazität:** Anzeige des Gesamtvolumens des Kühlschranks.
2. **Anzahl eingelagerter Produkte:** Anzeige der Anzahl der Produkte im Kühlschrank.
3. **Freie Kapazität:** Anzeige des noch verfügbaren Volumens im Kühlschrank.
4. **Produkte, die bald verfallen:** Anzahl der Produkte, die innerhalb eines Tages verfallen.
5. **Abgelaufene Produkte:** Anzahl der bereits abgelaufenen Produkte.
6. **Kleinstes Produkt:** Volumen des kleinsten Produkts im Kühlschrank.
7. **Größtes Produkt:** Volumen des größten Produkts im Kühlschrank.

### Weitere mögliche Features

- Sei kreativ und ergänze weitere Features, wenn Zeit und Lust vorhanden sind.

## Das Backend

### Setup und Start

- **Datenbank initialisieren:** Mit dem Befehl `npm run seed` (optional mit einer Zahl, z.B. `npm run seed 12`) wird eine Datenbank mit Testprodukten erstellt.
- **Backend starten:** Mit `npm run start-backend` wird der Server gestartet, der eine REST API zur Verfügung stellt. Die Adresse und Endpoints werden in der Konsole angezeigt. Der Server bleibt aktiv, solange der Prozess läuft.

## Loslegen

1. Klonen Sie das Repository.
2. Führen Sie `npm install` aus, um die benötigten Pakete zu installieren.
3. Starten Sie das Backend wie oben beschrieben.
4. Öffnen Sie die Anwendung im Frontend, um mit der Verwaltung des Kühlschranks zu beginnen.

---

Viel Spaß mit dem Kühlschrank-Management-System!
