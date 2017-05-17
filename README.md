# PRG04-Week2-oefening2

## Pixel Aquarium Typescript

### Opdracht

- Lees de onderstaande installatie tips door en zorg dat je aan de slag kan met Visual Studio Code en Typescript
- In het project vind je een **main.ts** class. Hierin staat code die een vis en een bubble op het scherm toont. Verplaats deze code naar de lege **fish.ts** en **bubble.ts** classes.
- In **main.ts** maak je een instance van de fish en de bubble. Kijk of deze op het scherm verschijnen
- Als dat lukt, maak dan in **main.ts** een loop die honderd visjes en bubbles toont
- De visjes hebben een random kleur en positie
- De bubbles hebben een random horizontale positie

![UML](uml.png?raw=true "UML")

### Installatie

- Installeer Typescript en Visual Studio Code [installatie handleiding](https://github.com/HR-CMGT/PRG04-Week0)

### Opzet project

Dit project bevat een **dev** en een **dist** folder. 

- In de **dev** folder staat het typescript code project. Dit is de map waarin je je project programmeert. Je compileert deze code naar Javascript.
- In de **dist** folder staat het eindproject zoals dat op een server geplaatst wordt. In de **js** map vind je de javascript code die door de Typescript compiler wordt gegenereerd.

### Compileren

In het **tsconfig.json** bestand vind je de instellingen voor het compileren naar Javascript. Hierin kan je zien dat alle losse .ts bestanden worden samengevoegd in het **dist/js/main.js** bestand.

In **Visual Studio Code** compileer je naar Javascript met de shortcut: CMD+SHIFT+B / CTRL+SHIFT+B. Deze task bevat een **file watcher** zodat je niet telkens op CMD+SHIFT+B hoeft te drukken om te compileren.

## Lezen

- [Class Code Naming Conventions](https://dev.to/mohitrajput987/coding-best-practices-part-1-naming-conventions--class-designing-principles)
