# SPA-Abschlussprojekt: Kühlschrank-Management-App

## Einleitung
Dies ist das Abschlussprojekt für das Single-Page-Application Modul.
Es enthält neben dieser README, die die Aufgabe beschreibt, noch eine `vite-react`-Boilerplate, die für das Projekt genutzt werden soll.

## Projektbeschreibung

### Szenario
Innerhalb eines größeren Projekts entsteht eine Web-App zur Verwaltung eine Kühlschranks. <br>
Das GUI-Design Team hat bereits anhand der Projektvorgabe eine GUI designt, wie in der oberen Abbildung zu sehen.

Du als versierter Javascript/React Frontend-Entwickler sollst nun die GUI mit Leben befüllen wobei du die nötige Datenstruktur vom beiliegenden Server fetcht und die GUI-Elemente mit Funktionen zum Manipulieren dieser Datenstruktur verbindest. <br>
Um das zu bewerkstelligen hast du nun knapp eine Woche Zeit, also ran an die Arbeit ;-)

### Spezifikationen
#### **Die GUI**
Die GUI sollte übersichtlich und funktional sein. Wenn du möchtest, kannst du mit Routing arbeiten, ist aber für die Umsetzung des Projekts nicht unbedingt nötig.
Folgend eine beispielhafte Umsetzung der GUI:
![Fridge Management App Screenshot](readme_assets/fridge-management_screenshot.png)

Das obige Bild ist eine Art _Serviervorschlag_, du musst es nicht so eins zu eins umsetzen.
Wichtig ist lediglich, dass die aus den untenstehenden Userstories (Anforderungen) hervorgehenden Elemente enthalten sind.

#### **Userstories (Anforderungen)**
Für die Verwaltung der Produkte im Kühlschrank werden einige Funktionen erwartet:
- Das Anzeigen von eingelagerten Produkten in einer übersichtlichen, aber kompakten Weise. Die Anzeige der Produkte sind zentraler Bestandteil der Anwendung.
- Das Hinzufügen neuer Produkte per Formular.
- Das Entfernen einzelner bereits eingelagerter Produkte per Knopfdruck.
- Das Entfernen aller bereits abgelaufener Produkte per Knopfdruck.
- Das Sortieren aller Produkte nach Ablaufdatum in aufsteigender Reihenfolge (also ältestes Datum zuerst) per Knopfdruck.
- Das Entfernen ALLER eingelagerten Produkte per Knopfdruck.

**BONUS**: Eventuell möchte man einige Voreinstellungen zum Hinzufügen von Produkten haben, die per Knopfdruck vorgefertigte Werte für `Name` und `Volume` in die Maske eintragen, so dass nurnoch ein Ablaufdatum händisch hinzugefügt werden soll.

Für die Überwachung des Kühlschrank Status sind einige Anzeigewerte in der GUI vorgesehen:
- Die Gesamtkapazität des Kühlschranks, also das in der Kühlschrank-Instanz hinterlegte Gesamtvolumen.
- Die Anzahl der bereits eingelagerten Produkte.
- Die freie Kapazität des Kühlschranks, also wieviel Volumen im Kühlschrank noch frei ist.
- Die Anzahl der Produkte, die in einem Tag verfallen.
- Die Anzahl der Produkte, die bereits abgelaufen sind.
- Das Volumen des kleinsten Produkts, also das Produkt mit dem kleinsten Volumen.
- Das Volumen des größten Produkts, also das Produkt mit dem größten Volumen.

Es sind auch weitere mögliche Features denkbar. Sei gerne kreativ, wenn du noch die Zeit und Lust hast.

### Das Backend
Da unser Smarter Kühlschrank über eine zentrale Datenbank verfügt, müssen wir zunächst das Backend einrichten und starten, bevor wir im Frontend mit den Daten arbeiten können.

Ihr findet hierzu in der package.json zwei Skripte:
`seed`: Mit diesem Befehl erstellt ihr euch eine kleine Datenbank mit Testprodukten. gebt ihr noch eine Zahl als Argument mit (`npm run seed 12`), werden entsprechend viele Produkte generiert. Ohne Argument (`npm run seed`) erhaltet ihr sechs Produkte.
`start-backend`: Hiermit startet ihr den Server, der euch eine REST API zur Verfügung stellt. Die Adresse und Endpoints werden euch nach Aufruf in der Konsole angezeigt. Lasst die Konsole geöffnet, da der Server nur aktiv ist, solange der Prozess läuft.

Ihr könnt mit `GET /products` die Daten aus eurer Datenbank abrufen. Ebenso lassen sich mit den Methoden POST, PUT, DELETE die Einträge verändern. Weitere Details zur Benutzung des Servers findet ihr in der Dokumentation des Moduls *json-server*: https://github.com/typicode/json-server.

TIPP: Möchtet ihr mit anderen Daten testen oder habt ihr sämtliche Einträge in der Datenbank gelöscht oder verändert, führt ganz einfach `npm run seed` aus. Ihr habt damit einen frischen Satz neuer Produkte in der Datenbank.

HINWEIS: Bitte verändert die vorhandene Datenbankstruktur nicht. Ihr könnt für weitere Bonus-Features aber gerne beliebig viele Eigenschaften hinzufügen. Achtet dann allerdings darauf, dass das Seed-Script mit angepasst wird. Andernfalls gehen eure Änderungen beim erneuten Aufruf des Scripts verloren.

### Vorgehensweise
1. Nachdem du diese Projektbeschreibung durchgelesen hast, mache dich mit dem Setup vertraut, teste ob du soweit alles zum Laufen bringen kannst.
2. Mache dich mit den Daten, die der Server bereitstellt vertraut.
3. Schaue die oben aufgezählten Userstories noch einmal genau durch und plane anhand dieser deine GUI (evtl. erst einmal auf einem Zettel).
4. Plane deine Komponenten anhand deiner GUI und berücksichtige Dabei auch den Datenfluss. Manchmal hat der Datenfluss einen Einfluss auf die Organisation der Komponenten.
5. Beginne deine Komponenten zu bauen und teste am besten regelmäßig nach Abschluss kleiner Meilensteine, so dass mögliche Fehler schon frühzeitig erkannt werden können.

### Dokumentation
Zum Projekt soll auch eine kleine Reflektion als Markdown Datei mitgeliefert werden.
Beschreibe darin dein Vorgehen bei der Entwicklung sowie die folgenden drei Fragen:
- Was lief besonders gut?
- Was lief nicht so gut?
- Was würde ich beim nächsten mal anders machen in Bezug auf meine Herangehensweise bzw. Arbeitsweise?

Die Datei sollte im Ordner `docs/` hinterlegt werden und mit ins Repository eures Projekts eingecheckt werden.

### Projektpräsentation
Zum Projektabschluss wird eine kleine Präsentation deines Projektes stattfinden.

Im Zuge der Präsentation sollst du die Funktionsweise deines Projekts vorzeigen und evtl. auf Besonderheiten eingehen.

Gib dem Publikum außerdem einen Einblick in die Projektstruktur und deinen Code. Erläutere besondere Lösungen gerne.

Die Präsentation soll so ablaufen als würdest du als Entwickler uns als Auftraggeber deine Lösung verkaufen wollen. Lustige Werbesprüche müssen nicht sein, aber der Enthausiasmus sollte vorhanden sein.
Zeige uns warum wir von deiner Lösung überzeugt sein sollten.

Folien sind keine Pflicht, aber dürfen gerne erstellt werden. Sei ruhig kreativ und plane deine Präsentation.
Überlege dir schon vorher gute Beispiele und übe deine Präsentation.



Bei Fragen sind der Lehrer und der Assistenzlehrer natürlich immer ansprechbar.

Viel Erfolg!
