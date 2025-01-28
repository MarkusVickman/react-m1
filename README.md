# React Moment 1
Återigen en träningswebbplats. Denna webbplats ger möjligheten för användare att följa och träna efter ett specifikt träningsschema. Denna webbplats har stöd för PWA så ladda gärna hem och testa.

Besök webbplatsen [Min träningsvecka](https://workout-week.netlify.app/).

## Uppgift
Uppgiften gick ut på att skapa en react webbplats programmerad i TypeScript.

**Krav:**
* Design efter wireframe
* Sidhuvud med H1 som tas in som props
* Sidfot
* Huvudinnehåll som skrivs ut dynamiskt i komponenterna med map-funktionen av en array med objekt.
* Responsiv för olika enheter
* Komponentspecifik CSS
* JSX-syntax, variabler, props och vilkor.

## Lösning
Webbplatsen använder många komponenten. De två huvudkomponenterna är App.tsx och Workout.tsx. 
App.tsx är parent till Workout och skickar med props till Workout. I workout skrivs träningsinläggen ut enligt datan från App.tsx. Workout använder också useState för att ändra stil och text vid klick på inlägg. App.tsx hämtar och ändrar data från klassen LocalStoredWorkouts.tsx.

Filer för att lösa detta:
* Filen WorkoutTypes-interface.tsx med interfacen "WorkoutType"
* Klassfilen LocalStoredWorkouts.tsx där klassen sköter hantering av data.json samt lagring och läsning i localstorage.
* Komponentfilerna App.tsx, Workout.tsx, Header.tsx, Footer.tsx, WorkoutInfo.tsx.
* PWA-stöd med ServiceWorker, Manifest samt specifika ikoner för detta.
