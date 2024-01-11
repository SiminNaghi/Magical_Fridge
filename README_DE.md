# Magical Fridge

## Eine App zur intelligenten Verwaltung des Kühlschrankinhalts

Durch strukturellen Aufbau und die zentrale Auslagerung der
Hauptfunktionen ebenso wie Neutralität im Styling und Naming,
ist die App individuell, dynamisch skalierbar.
So kann man sie problemlos jederzeit erweitern
oder auch für ganz andere Verwaltungsvorgänge verwenden.

## Umgesetzte Userstories

### Produktverwaltung

1. **Anzeige von Produkten:** Eingelagerte Produkte werden in einer übersichtlichen und kompakten Weise angezeigt.Die Haltbarkeit wird im Ampel-System dargestellt. Grün für Produkte, die noch länger haltbar sind. Gelb für Produkte, die heute verzehrt werden müssten und Rot für Produkte, die bereits abgelaufen sind.
2. **Hinzufügen von Produkten:** Neue Produkte können über ein Formular hinzugefügt werden.
3. **Entfernen von Produkten:** Einzelne Produkte können per Knopfdruck entfernt werden.
4. **Entfernen abgelaufener Produkte:** Alle abgelaufenen Produkte können per Knopfdruck entfernt werden.
5. **Sortieren nach Ablaufdatum:** Produkte können nach ihrem Ablaufdatum in aufsteigender Reihenfolge sortiert werden.
6. **Entfernen aller Produkte:** Möglichkeit, alle eingelagerten Produkte per Knopfdruck zu entfernen.

### Kühlschrank-Status

1. **Gesamtkapazität:** Anzeige des Gesamtvolumens des Kühlschranks.
2. **Anzahl eingelagerter Produkte:** Anzeige der Anzahl der Produkte im Kühlschrank.
3. **Freie Kapazität:** Anzeige des noch verfügbaren Volumens im Kühlschrank.Auch hier wird die Anzeige durch Ampelfraben unterstützt, damit der User weiß, wann der Platz im Kühlschrank knapp wird. Sollte der Inhalt das volumen des Kühlschranks überschreiten, wird der User gewarnt.
4. **Produkte, die bald verfallen:** Anzahl der Produkte, die innerhalb eines Tages verfallen.
5. **Abgelaufene Produkte:** Anzahl der bereits abgelaufenen Produkte.
6. **Kleinstes Produkt:** Volumen des kleinsten Produkts im Kühlschrank.
7. **Größtes Produkt:** Volumen des größten Produkts im Kühlschrank.

## Loslegen

1. Klonen Sie das Repository.
2. Führen Sie `npm install` aus, um die benötigten Pakete zu installieren.
3. Mit `npm run start-backend-with-seeding` wird der Server gestartet, der eine REST API zur Verfügung stellt.
   Die Adresse und Endpoints werden in der Konsole angezeigt. Der Server bleibt aktiv, solange der Prozess läuft.
4. Öffnen Sie in einem neune Terminal die Anwendung im Frontend mit `npm run dev`, um mit der Verwaltung des Kühlschranks zu beginnen.

---

Viel Spaß mit dem Kühlschrank-Management-System!
