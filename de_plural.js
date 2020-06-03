
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

  conjugate(kasus, number) {
    return this.article(kasus, number) + " " + this.inNumber(number);
  }

  inNumber(number) {
    return ((number == Plurality.Singular) ? this.singular : this.plural);
  }

  conjugations() {

    var conjugations = {};
    for (const number of Object.values(Plurality)) {
      conjugations[number] = {};
      for (const kasus of Object.values(Cases)) {
        conjugations[number][kasus] = this.conjugate(kasus, number);
      }
    }

    switch (this.type) {
      case 1: {
        conjugations[Plurality.Singular][Cases.Genitiv] += "s";
        conjugations[Plurality.Plural][Cases.Dativ] += "n";
        break;
      }
      case 3: {
        const postfix = this.singular.charAt(this.singular.length - 1) == "e" ? "n" : "en";

        conjugations[Plurality.Singular][Cases.Genitiv] += postfix;
        conjugations[Plurality.Singular][Cases.Dativ] += postfix;
        conjugations[Plurality.Singular][Cases.Akkusativ] += postfix;
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
