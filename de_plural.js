

const Genders = Object.freeze({
  Maskulin: 1,
  Neutrum: 2,
  Feminin: 3
});

const Cases = Object.freeze({
  Nominativ: 1,
  Akkusativ: 2,
  Dativ: 3,
  Genitiv: 4
});

const Plurality = Object.freeze({
  Singular: 1,
  Plural: 2
});

const SingularArticles = Object.freeze({
  [Genders.Maskulin]: {
    [Cases.Nominativ]: "der",
    [Cases.Akkusativ]: "den",
    [Cases.Dativ]: "dem",
    [Cases.Genitiv]: "des"
  },
  [Genders.Neutrum]: {
    [Cases.Nominativ]: "das",
    [Cases.Akkusativ]: "das",
    [Cases.Dativ]: "dem",
    [Cases.Genitiv]: "des"
  },
  [Genders.Feminin]: {
    [Cases.Nominativ]: "die",
    [Cases.Akkusativ]: "die",
    [Cases.Dativ]: "der",
    [Cases.Genitiv]: "der"
  }
});

const PluralArticles = Object.freeze({
  [Cases.Nominativ]: "die",
  [Cases.Akkusativ]: "die",
  [Cases.Dativ]: "den",
  [Cases.Genitiv]: "der"
})

class Word {
  constructor(singular, plural, gender, type, exceptions = []) {
    this.singular = singular;
    this.plural = plural;
    this.gender = gender;
    this.type = type;
    this.exceptions = exceptions;
  }

  article(kasus, number) {
    return (number == Plurality.Singular) ? SingularArticles[this.gender][kasus] : PluralArticles[kasus]
  }

  conjugate(plurality, kasus) {
    return this.article(kasus, plurality) + " " + this.inNumber(plurality);
  }

  inNumber(plurality) {
    return ((plurality == Plurality.singular) ? this.singular : this.plural);
  }

  conjugations() {
    var conjugations = {
      [Plurality.Singular]: {
        [Cases.Nominativ]: this.conjugate(Cases.Nominativ, Plurality.Singular),
        [Cases.Akkusativ]: this.article(Cases.Akkusativ, Plurality.Singular) + " " + this.singular,
        [Cases.Dativ]: this.article(Cases.Dativ, Plurality.Singular) + " " + this.singular,
        [Cases.Genitiv]: this.article(Cases.Genitiv, Plurality.Singular) + " " + this.singular,
      },
      [Plurality.Plural]: {
        [Cases.Nominativ]: this.article(Cases.Nominativ, Plurality.Plural) + " " + this.plural,
        [Cases.Akkusativ]: this.article(Cases.Akkusativ, Plurality.Plural) + " " + this.plural,
        [Cases.Dativ]: this.article(Cases.Dativ, Plurality.Plural) + " " + this.plural,
        [Cases.Genitiv]: this.article(Cases.Genitiv, Plurality.Plural) + " " + this.plural,
      }
    };
    switch (this.type) {
      case 1: {
        conjugations[Plurality.Singular][Cases.Genitiv] += "s";
        conjugations[Plurality.Plural][Cases.Dativ] += "n";
        break;
      }
      case 3: {
        conjugations[Plurality.Singular][Cases.Genitiv] += "en";
        conjugations[Plurality.Singular][Cases.Dativ] += "en";
        conjugations[Plurality.Singular][Cases.Akkusativ] += "en";
        break;
      }
      case 4: {
        conjugations[Plurality.Singular][Cases.Genitiv] += "es";
        conjugations[Plurality.Plural][Cases.Dativ] += "n";
        break;
      }
      case 5: {
        conjugations[Plurality.Plural][Cases.Dativ] += "n";
        break;
      }
      case 6: {
        if (this.gender == Genders.Maskulin || this.gender == Genders.Neutrum)
          conjugations[Plurality.Singular][Cases.Genitiv] += "s";
          break;
        }
    }
    this.exceptions.forEach(ex => {
      conjugations[Plurality.Plural][ex.kasus] = this.article(ex.kasus, Plurality.Plural) + " " + ex.form;
    });

    return conjugations;
  }
}

const Dictionary = [
  new Word("Bus", "Busse", [Genders.Maskulin], 1),
  new Word("Zimmer", "Zimmer", Genders.Neutrum, 1),
  new Word("Tür", "Türen", Genders.Feminin, 2),
  new Word("Held", "Helden", Genders.Maskulin, 3),
  new Word("Kind", "Kinder", Genders.Neutrum, 4),
  new Word("Hand", "Hände", Genders.Feminin, 5),
  new Word("Opa", "Opas", Genders.Maskulin, 6),
  new Word("Mama", "Mamas", Genders.Feminin, 6),
  new Word("Komma", "Kommas", Genders.Neutrum, 6),

  new Word("Bahn", "Bahnen", Genders.Feminin, 2),
  new Word("Amt", "Amter", Genders.Neutrum, 4),
  new Word("Wort", "Wörter", Genders.Neutrum, 4),
  new Word("Messe", "Messen", Genders.Feminin, 2),
  new Word("Spiel", "Spiele", Genders.Neutrum, 1),
    
  new Word("Anlage", "Anlagen", Genders.Feminin, 2),
  new Word("Welle", "Wellen", Genders.Feminin, 2),
  new Word("Messer", "Messer", Genders.Neutrum, 1),
  new Word("Mantel", "Mäntel", Genders.Maskulin, 1),
  new Word("Schuh", "Schuhe", Genders.Maskulin, 1),
  new Word("Ampel", "Ampeln", Genders.Feminin, 2),
  new Word("Wurst", "Würste", Genders.Feminin, 5),
  new Word("Hase", "Hasen", Genders.Maskulin, 3),
  new Word("Lied", "Lieder", Genders.Neutrum, 4),
  new Word("Wald", "Wälder", Genders.Maskulin, 1), // confirm type
  new Word("Büro", "Büros", Genders.Neutrum, 6),
  new Word("Kolibri", "Kolibris", Genders.Maskulin, 6),
  new Word("Datum", "Daten", Genders.Neutrum, 1, [{ kasus: Cases.Dativ, form: "Daten"}]), // confirm type
  new Word("Vater", "Väter", Genders.Maskulin, 1),
  new Word("Mutter", "Mütter", Genders.Feminin, 2),
  new Word("Pferd", "Pferde", Genders.Neutrum, 1),
  new Word("Tisch", "Tische", Genders.Maskulin, 1),
  new Word("Feder", "Federn", Genders.Feminin, 2),

  new Word("Koch", "Köche", Genders.Maskulin, 1),
  new Word("Hund", "Hunde", Genders.Maskulin, 1),
  new Word("Gans", "Gänse", Genders.Feminin, 5),
  new Word("Haus", "Häuser", Genders.Neutrum, 4),
  new Word("Mund", "Münder", Genders.Maskulin, 1),
  new Word("Name", "Namen", Genders.Maskulin, 3),
  new Word("Lehre", "Lehren", Genders.Feminin, 2),
  new Word("Kino", "Kinos", Genders.Neutrum, 6),
  new Word("Radio", "Radios", Genders.Neutrum, 6),
  new Word("Onkel", "Onkel", Genders.Maskulin, 1),
  
];
