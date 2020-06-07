
const Dictionary = [
  new Noun("Bus", "Busse", [Genders.Maskulin], 1),
  new Noun("Zimmer", "Zimmer", Genders.Neutrum, 1),
  new Noun("Tür", "Türen", Genders.Feminin, 2),
  new Noun("Held", "Helden", Genders.Maskulin, 3),
  new Noun("Kind", "Kinder", Genders.Neutrum, 4),
  new Noun("Hand", "Hände", Genders.Feminin, 5),
  new Noun("Opa", "Opas", Genders.Maskulin, 6),
  new Noun("Mama", "Mamas", Genders.Feminin, 6),
  new Noun("Komma", "Kommas", Genders.Neutrum, 6),

  new Noun("Bahn", "Bahnen", Genders.Feminin, 2),
  new Noun("Amt", "Ämter", Genders.Neutrum, 4),
  new Noun("Wort", "Wörter", Genders.Neutrum, 4),
  new Noun("Messe", "Messen", Genders.Feminin, 2),
  new Noun("Spiel", "Spiele", Genders.Neutrum, 1),
    
  new Noun("Anlage", "Anlagen", Genders.Feminin, 2),
  new Noun("Welle", "Wellen", Genders.Feminin, 2),
  new Noun("Messer", "Messer", Genders.Neutrum, 1),
  new Noun("Mantel", "Mäntel", Genders.Maskulin, 1),
  new Noun("Schuh", "Schuhe", Genders.Maskulin, 1),
  new Noun("Ampel", "Ampeln", Genders.Feminin, 2),
  new Noun("Wurst", "Würste", Genders.Feminin, 5),
  new Noun("Hase", "Hasen", Genders.Maskulin, 3),
  new Noun("Lied", "Lieder", Genders.Neutrum, 4),
  new Noun("Wald", "Wälder", Genders.Maskulin, 1), // confirm type
  new Noun("Büro", "Büros", Genders.Neutrum, 6),
  new Noun("Kolibri", "Kolibris", Genders.Maskulin, 6),
  new Noun("Datum", "Daten", Genders.Neutrum, 1, [{ kasus: Cases.Dativ, form: "Daten"}]), // confirm type
  new Noun("Vater", "Väter", Genders.Maskulin, 1),
  new Noun("Mutter", "Mütter", Genders.Feminin, 2),
  new Noun("Pferd", "Pferde", Genders.Neutrum, 1),
  new Noun("Tisch", "Tische", Genders.Maskulin, 1),
  new Noun("Feder", "Federn", Genders.Feminin, 2),

  new Noun("Koch", "Köche", Genders.Maskulin, 1),
  new Noun("Hund", "Hunde", Genders.Maskulin, 1),
  new Noun("Gans", "Gänse", Genders.Feminin, 5),
  new Noun("Haus", "Häuser", Genders.Neutrum, 4),
  new Noun("Mund", "Münder", Genders.Maskulin, 1),
  new Noun("Name", "Namen", Genders.Maskulin, 3),
  new Noun("Lehre", "Lehren", Genders.Feminin, 2),
  new Noun("Kino", "Kinos", Genders.Neutrum, 6),
  new Noun("Radio", "Radios", Genders.Neutrum, 6),
  new Noun("Onkel", "Onkel", Genders.Maskulin, 1),
  new Noun("Wand", "Wände", Genders.Feminin, 5),
  new Noun("Runde", "Runden", Genders.Feminin, 1),
  new Noun("Beere", "Beeren", Genders.Feminin, 1),
  new Noun("Farbe", "Farben", Genders.Feminin, 2),
  new Noun("Bier", "Biere", Genders.Neutrum, 1),
  new Noun("Stück", "Stücke", Genders.Neutrum, 1),
  new Noun("Zimmer", "Zimmer", Genders.Neutrum, 1),
  new Noun("Bär", "Bären", Genders.Maskulin, 1),
  new Noun("Wal", "Wale", Genders.Maskulin, 1),
  new Noun("Faden", "Fäden", Genders.Maskulin, 1),
  new Noun("Schere", "Scheren", Genders.Feminin, 1),
  new Noun("Stein", "Steine", Genders.Neutrum, 1),
  new Noun("Zug", "Züge", Genders.Maskulin, 1),
  new Noun("Fehler", "Fehler", Genders.Maskulin, 1),
  new Noun("Schnabel", "Schnäbel", Genders.Maskulin, 1),
  new Noun("LKW", "LKWS", Genders.Neutrum, 6),
  new Noun("Hotel", "Hotels", Genders.Neutrum, 6),
  new Noun("Rind", "Rinder", Genders.Neutrum, 4),
  new Noun("Oma", "Omas", Genders.Feminin, 6),
  new Noun("Land", "Länder", Genders.Neutrum, 4),
  new Noun("Haus", "Häuser", Genders.Neutrum, 4),
  new Noun("Bett", "Betten", Genders.Neutrum, 6),
  new Noun("Instrument", "Instrumente", Genders.Neutrum, 1),
  new Noun("Blau", "Blau", Genders.Neutrum, 6),
  new Noun("Spanisch", "Spanisch", Genders.Neutrum, 6),
  

];

function createAdjectives() {
  return Array.from(arguments).map( rootForm => new Adjektiv(rootForm) );
}

const Adjectives = createAdjectives("groß", "schön", "heiß", "neu", "gut", "schlecht");

function randomAdjective() {
  return Adjectives[Math.floor(Math.random() * Adjectives.length)];
}