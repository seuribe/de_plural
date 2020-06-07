
const Genders = Object.freeze({
  Maskulin: 1,
  Feminin: 2,
  Neutrum: 3,
  Plural: 4
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

const DefiniteArticles = Object.freeze({
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
  },
  [Genders.Plural]: {
    [Cases.Nominativ]: "die",
    [Cases.Akkusativ]: "die",
    [Cases.Dativ]: "den",
    [Cases.Genitiv]: "der"
  }
});


const IndefiniteArticles = Object.freeze({
  [Genders.Maskulin]: {
    [Cases.Nominativ]: "ein",
    [Cases.Akkusativ]: "einen",
    [Cases.Dativ]: "einem",
    [Cases.Genitiv]: "eines"
  },
  [Genders.Neutrum]: {
    [Cases.Nominativ]: "ein",
    [Cases.Akkusativ]: "ein",
    [Cases.Dativ]: "einem",
    [Cases.Genitiv]: "eines"
  },
  [Genders.Feminin]: {
    [Cases.Nominativ]: "eine",
    [Cases.Akkusativ]: "eine",
    [Cases.Dativ]: "einer",
    [Cases.Genitiv]: "einer"
  },
  [Genders.Plural]: {
    [Cases.Nominativ]: undefined,
    [Cases.Akkusativ]: undefined,
    [Cases.Dativ]: undefined,
    [Cases.Genitiv]: undefined
  }
});

function definiteArticle(gender, kasus) {
  return DefiniteArticles[gender][kasus];
}

function indefiniteArticle(gender, kasus) {
  return IndefiniteArticles[gender][kasus];
}

class Noun {
  constructor(singular, plural, gender, type, exceptions = []) {
    this.singular = singular;
    this.plural = plural;
    this.gender = gender;
    this.type = type;
    this.exceptions = exceptions;
  }

  article(kasus, number) {
    return (number == Plurality.Singular) ? DefiniteArticles[this.gender][kasus] : DefiniteArticles[Genders.Plural][kasus]
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

const AdjektivDeclensionType = Object.freeze({
  Bestimmter: 1,
  Unbestimmter: 2,
  Ohne: 3
});

const AdjektivDeclensionPostFix = Object.freeze({
  [AdjektivDeclensionType.Bestimmter]: {
    [Cases.Nominativ]: {
      [Genders.Maskulin]: "e", [Genders.Feminin]: "e", [Genders.Neutrum]: "e", [Genders.Plural]: "en"
    },
    [Cases.Akkusativ]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "e", [Genders.Neutrum]: "e", [Genders.Plural]: "en"
    },
    [Cases.Dativ]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "en", [Genders.Neutrum]: "en", [Genders.Plural]: "en"
    },
    [Cases.Genitiv]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "en", [Genders.Neutrum]: "en", [Genders.Plural]: "en"
    },
  },
  [AdjektivDeclensionType.Unbestimmter]: {
    [Cases.Nominativ]: {
      [Genders.Maskulin]: "er", [Genders.Feminin]: "e", [Genders.Neutrum]: "es", [Genders.Plural]: "e"
    },
    [Cases.Akkusativ]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "e", [Genders.Neutrum]: "es", [Genders.Plural]: "e"
    },
    [Cases.Dativ]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "en", [Genders.Neutrum]: "en", [Genders.Plural]: "en"
    },
    [Cases.Genitiv]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "en", [Genders.Neutrum]: "en", [Genders.Plural]: "en"
    },
  },
  [AdjektivDeclensionType.Ohne]: {
    [Cases.Nominativ]: {
      [Genders.Maskulin]: "er", [Genders.Feminin]: "e", [Genders.Neutrum]: "es", [Genders.Plural]: "e"
    },
    [Cases.Akkusativ]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "e", [Genders.Neutrum]: "es", [Genders.Plural]: "e"
    },
    [Cases.Dativ]: {
      [Genders.Maskulin]: "em", [Genders.Feminin]: "er", [Genders.Neutrum]: "em", [Genders.Plural]: "en"
    },
    [Cases.Genitiv]: {
      [Genders.Maskulin]: "en", [Genders.Feminin]: "er", [Genders.Neutrum]: "en", [Genders.Plural]: "er"
    },
  },
});

class Adjektiv {
  constructor(rootForm) {
    this.rootForm = rootForm;
  }

  decline(type, gender, kasus) {
    const declined = this.rootForm + AdjektivDeclensionPostFix[type][kasus][gender];

    switch (type) {
      case AdjektivDeclensionType.Bestimmter:
        return definiteArticle(gender, kasus) + " " + declined;
      case AdjektivDeclensionType.Unbestimmter:
        if (gender == Genders.Plural)
          return declined;
        return indefiniteArticle(gender, kasus) + " " + declined;
      case AdjektivDeclensionType.Ohne:
        return declined;
    }
  }

  declensions() {
    var declensions = {};
    for (const type of Object.values(AdjektivDeclensionType)) {
      declensions[type] = {};

      for (const kasus of Object.values(Cases)) {
        declensions[type][kasus] = {};
        for (const gender of Object.values(Genders)) {
          declensions[type][kasus][gender] = this.decline(type, gender, kasus);
        }
      }
    }
    return declensions;
  }
}
