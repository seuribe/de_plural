/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/plurals.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/definitions.js":
/*!*******************************!*\
  !*** ./src/js/definitions.js ***!
  \*******************************/
/*! exports provided: Genders, Cases, Plurality, DefiniteArticles, IndefiniteArticles, definiteArticle, indefiniteArticle, Noun, AdjektivDeclensionType, AdjektivDeclensionPostFix, Adjektiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genders", function() { return Genders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cases", function() { return Cases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plurality", function() { return Plurality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefiniteArticles", function() { return DefiniteArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndefiniteArticles", function() { return IndefiniteArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definiteArticle", function() { return definiteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indefiniteArticle", function() { return indefiniteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noun", function() { return Noun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjektivDeclensionType", function() { return AdjektivDeclensionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjektivDeclensionPostFix", function() { return AdjektivDeclensionPostFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adjektiv", function() { return Adjektiv; });

const Genders = Object.freeze({
  Maskulin: "Maskulin",
  Feminin: "Feminin",
  Neutrum: "Neutrum",
  Plural: "Plural"
});

const Cases = Object.freeze({
  Nominativ: "Nominativ",
  Akkusativ: "Akkusativ",
  Dativ: "Dativ",
  Genitiv: "Genitiv"
});

const Plurality = Object.freeze({
  Singular: "Singular",
  Plural: "Plural"
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


/***/ }),

/***/ "./src/js/dictionary.js":
/*!******************************!*\
  !*** ./src/js/dictionary.js ***!
  \******************************/
/*! exports provided: Dictionary, Adjectives, randomAdjective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adjectives", function() { return Adjectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomAdjective", function() { return randomAdjective; });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "./src/js/definitions.js");


const Dictionary = [
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Bus", "Busse", [_definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin], 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Zimmer", "Zimmer", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Tür", "Türen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Held", "Helden", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 3),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Kind", "Kinder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Hand", "Hände", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 5),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Opa", "Opas", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Mama", "Mamas", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Komma", "Kommas", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),

  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Bahn", "Bahnen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Amt", "Ämter", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Wort", "Wörter", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Messe", "Messen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Spiel", "Spiele", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
    
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Anlage", "Anlagen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Welle", "Wellen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Messer", "Messer", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Mantel", "Mäntel", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Schuh", "Schuhe", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Ampel", "Ampeln", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Wurst", "Würste", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 5),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Hase", "Hasen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 3),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Lied", "Lieder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Wald", "Wälder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1), // confirm type
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Büro", "Büros", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Kolibri", "Kolibris", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Datum", "Daten", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1, [{ kasus: _definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"].Dativ, form: "Daten"}]), // confirm type
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Vater", "Väter", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Mutter", "Mütter", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Pferd", "Pferde", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Tisch", "Tische", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Feder", "Federn", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),

  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Koch", "Köche", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Hund", "Hunde", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Gans", "Gänse", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 5),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Haus", "Häuser", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Mund", "Münder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Name", "Namen", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 3),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Lehre", "Lehren", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Kino", "Kinos", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Radio", "Radios", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Onkel", "Onkel", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Wand", "Wände", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 5),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Runde", "Runden", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Beere", "Beeren", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Farbe", "Farben", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 2),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Bier", "Biere", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Stück", "Stücke", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Zimmer", "Zimmer", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Bär", "Bären", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Wal", "Wale", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Faden", "Fäden", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Schere", "Scheren", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Stein", "Steine", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Zug", "Züge", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Fehler", "Fehler", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Schnabel", "Schnäbel", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("LKW", "LKWS", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Hotel", "Hotels", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Rind", "Rinder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Oma", "Omas", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Land", "Länder", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Haus", "Häuser", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 4),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Bett", "Betten", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Instrument", "Instrumente", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 1),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Blau", "Blau", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  new _definitions__WEBPACK_IMPORTED_MODULE_0__["Noun"]("Spanisch", "Spanisch", _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Neutrum, 6),
  

];

function createAdjectives() {
  return Array.from(arguments).map( rootForm => new _definitions__WEBPACK_IMPORTED_MODULE_0__["Adjektiv"](rootForm) );
}

const Adjectives = createAdjectives("groß", "schön", "heiß", "neu", "gut", "schlecht");

function randomAdjective() {
  return Adjectives[Math.floor(Math.random() * Adjectives.length)];
}

/***/ }),

/***/ "./src/js/plurals.js":
/*!***************************!*\
  !*** ./src/js/plurals.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "./src/js/definitions.js");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "./src/js/dictionary.js");



const CasePrefix = {
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"].Nominativ]: "nom",
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"].Akkusativ]: "akk",
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"].Dativ]: "dat",
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"].Genitiv]: "gen"
};
const NumberPostfix = {
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Plurality"].Singular]: "singular",
  [_definitions__WEBPACK_IMPORTED_MODULE_0__["Plurality"].Plural]: "plural"
};

var app = new Vue({
  el: "#app",
  data: {
    word: "",
    conjugations: null,
    type: "",
    gender_guess: "",
    gender: "",
    answers: {},
    reveal_type: false,
    reveal_gender: false,
    reveal_gender_buttons: true
  },

  created: function() {
    this.newWord();
  },

  methods: {
    checkAnswer: function(kasus, number) {
      const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
      const userInput = document.getElementById(inputId).value;
      const answer = this.conjugations[number][kasus];
      const answerField = document.getElementById(inputId + "_answer");
  
      answerField.innerText = answer;
      if (answer != userInput)
        answerField.classList.add("incorrect");
      else
        answerField.classList.remove("incorrect");
      },

    clearConjugation: function(kasus, number) {
      const inputId = CasePrefix[kasus] + "_" + NumberPostfix[number];
      const answerField = document.getElementById(inputId + "_answer");
      document.getElementById(inputId).value = "";
      answerField.innerText = "";
      answerField.classList.remove("incorrect");
    },

    genderName: function(gender) {
      return (gender == _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Feminin) ? "Feminin" :
              (gender == _definitions__WEBPACK_IMPORTED_MODULE_0__["Genders"].Maskulin) ? "Maskulin":
              "Neutrum";
    },

    checkGender: function(gender) {
      this.gender_guess = gender;
      this.reveal_gender = true;
      this.reveal_gender_buttons = false;
    },

    check: function(kasusList = null) {
      if (kasusList == null)
        kasusList = Object.values(_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"]);

      for (const kasus of kasusList) {
        for (const number of Object.values(_definitions__WEBPACK_IMPORTED_MODULE_0__["Plurality"])) {
          this.checkAnswer(kasus, number);
        }
      }
      this.checkGender(this.word.gender);
      this.reveal_type = true;
    },

    newWord: function() {
      this.word = _dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"][ Math.floor(Math.random() * _dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"].length) ];
      this.conjugations = this.word.conjugations();
      this.reveal_type = false;
      this.reveal_gender = false;
      this.reveal_gender_buttons = true;

      for (const kasus of Object.values(_definitions__WEBPACK_IMPORTED_MODULE_0__["Cases"])) {
        for (const number of Object.values(_definitions__WEBPACK_IMPORTED_MODULE_0__["Plurality"])) {
          this.clearConjugation(kasus, number);
        }
      }
    }
  }
});



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RlZmluaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wbHVyYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEOztBQUV4RDtBQUNQLE1BQU0saURBQUksa0JBQWtCLG9EQUFPO0FBQ25DLE1BQU0saURBQUkscUJBQXFCLG9EQUFPO0FBQ3RDLE1BQU0saURBQUksaUJBQWlCLG9EQUFPO0FBQ2xDLE1BQU0saURBQUksbUJBQW1CLG9EQUFPO0FBQ3BDLE1BQU0saURBQUksbUJBQW1CLG9EQUFPO0FBQ3BDLE1BQU0saURBQUksa0JBQWtCLG9EQUFPO0FBQ25DLE1BQU0saURBQUksZ0JBQWdCLG9EQUFPO0FBQ2pDLE1BQU0saURBQUksa0JBQWtCLG9EQUFPO0FBQ25DLE1BQU0saURBQUksb0JBQW9CLG9EQUFPOztBQUVyQyxNQUFNLGlEQUFJLG1CQUFtQixvREFBTztBQUNwQyxNQUFNLGlEQUFJLGlCQUFpQixvREFBTztBQUNsQyxNQUFNLGlEQUFJLG1CQUFtQixvREFBTztBQUNwQyxNQUFNLGlEQUFJLG9CQUFvQixvREFBTztBQUNyQyxNQUFNLGlEQUFJLG9CQUFvQixvREFBTzs7QUFFckMsTUFBTSxpREFBSSxzQkFBc0Isb0RBQU87QUFDdkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxxQkFBcUIsb0RBQU87QUFDdEMsTUFBTSxpREFBSSxxQkFBcUIsb0RBQU87QUFDdEMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSx3QkFBd0Isb0RBQU87QUFDekMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU8sZUFBZSxRQUFRLGtEQUFLLHNCQUFzQjtBQUN0RixNQUFNLGlEQUFJLG1CQUFtQixvREFBTztBQUNwQyxNQUFNLGlEQUFJLHFCQUFxQixvREFBTztBQUN0QyxNQUFNLGlEQUFJLG9CQUFvQixvREFBTztBQUNyQyxNQUFNLGlEQUFJLG9CQUFvQixvREFBTztBQUNyQyxNQUFNLGlEQUFJLG9CQUFvQixvREFBTzs7QUFFckMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxrQkFBa0Isb0RBQU87QUFDbkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxxQkFBcUIsb0RBQU87QUFDdEMsTUFBTSxpREFBSSxpQkFBaUIsb0RBQU87QUFDbEMsTUFBTSxpREFBSSxnQkFBZ0Isb0RBQU87QUFDakMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxzQkFBc0Isb0RBQU87QUFDdkMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxnQkFBZ0Isb0RBQU87QUFDakMsTUFBTSxpREFBSSxxQkFBcUIsb0RBQU87QUFDdEMsTUFBTSxpREFBSSx5QkFBeUIsb0RBQU87QUFDMUMsTUFBTSxpREFBSSxnQkFBZ0Isb0RBQU87QUFDakMsTUFBTSxpREFBSSxvQkFBb0Isb0RBQU87QUFDckMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxnQkFBZ0Isb0RBQU87QUFDakMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSxtQkFBbUIsb0RBQU87QUFDcEMsTUFBTSxpREFBSSw4QkFBOEIsb0RBQU87QUFDL0MsTUFBTSxpREFBSSxpQkFBaUIsb0RBQU87QUFDbEMsTUFBTSxpREFBSSx5QkFBeUIsb0RBQU87OztBQUcxQzs7QUFFQTtBQUNBLG9EQUFvRCxxREFBUTtBQUM1RDs7QUFFTzs7QUFFQTtBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUEwRDtBQUNoQjs7QUFFMUM7QUFDQSxHQUFHLGtEQUFLO0FBQ1IsR0FBRyxrREFBSztBQUNSLEdBQUcsa0RBQUs7QUFDUixHQUFHLGtEQUFLO0FBQ1I7QUFDQTtBQUNBLEdBQUcsc0RBQVM7QUFDWixHQUFHLHNEQUFTO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CLHlCQUF5QixvREFBTztBQUNoQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQUs7O0FBRXZDO0FBQ0EsMkNBQTJDLHNEQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esa0JBQWtCLHNEQUFVLDZCQUE2QixzREFBVTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0Msa0RBQUs7QUFDN0MsMkNBQTJDLHNEQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wbHVyYWxzLmpzXCIpO1xuIiwiXHJcbmV4cG9ydCBjb25zdCBHZW5kZXJzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgTWFza3VsaW46IFwiTWFza3VsaW5cIixcclxuICBGZW1pbmluOiBcIkZlbWluaW5cIixcclxuICBOZXV0cnVtOiBcIk5ldXRydW1cIixcclxuICBQbHVyYWw6IFwiUGx1cmFsXCJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FzZXMgPSBPYmplY3QuZnJlZXplKHtcclxuICBOb21pbmF0aXY6IFwiTm9taW5hdGl2XCIsXHJcbiAgQWtrdXNhdGl2OiBcIkFra3VzYXRpdlwiLFxyXG4gIERhdGl2OiBcIkRhdGl2XCIsXHJcbiAgR2VuaXRpdjogXCJHZW5pdGl2XCJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUGx1cmFsaXR5ID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgU2luZ3VsYXI6IFwiU2luZ3VsYXJcIixcclxuICBQbHVyYWw6IFwiUGx1cmFsXCJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmaW5pdGVBcnRpY2xlcyA9IE9iamVjdC5mcmVlemUoe1xyXG4gIFtHZW5kZXJzLk1hc2t1bGluXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IFwiZGVyXCIsXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XTogXCJkZW5cIixcclxuICAgIFtDYXNlcy5EYXRpdl06IFwiZGVtXCIsXHJcbiAgICBbQ2FzZXMuR2VuaXRpdl06IFwiZGVzXCJcclxuICB9LFxyXG4gIFtHZW5kZXJzLk5ldXRydW1dOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XTogXCJkYXNcIixcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImRhc1wiLFxyXG4gICAgW0Nhc2VzLkRhdGl2XTogXCJkZW1cIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJkZXNcIlxyXG4gIH0sXHJcbiAgW0dlbmRlcnMuRmVtaW5pbl06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImRpZVwiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZGllXCIsXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiBcImRlclwiLFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiBcImRlclwiXHJcbiAgfSxcclxuICBbR2VuZGVycy5QbHVyYWxdOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XTogXCJkaWVcIixcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImRpZVwiLFxyXG4gICAgW0Nhc2VzLkRhdGl2XTogXCJkZW5cIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJkZXJcIlxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW5kZWZpbml0ZUFydGljbGVzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgW0dlbmRlcnMuTWFza3VsaW5dOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XTogXCJlaW5cIixcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImVpbmVuXCIsXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiBcImVpbmVtXCIsXHJcbiAgICBbQ2FzZXMuR2VuaXRpdl06IFwiZWluZXNcIlxyXG4gIH0sXHJcbiAgW0dlbmRlcnMuTmV1dHJ1bV06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImVpblwiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZWluXCIsXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiBcImVpbmVtXCIsXHJcbiAgICBbQ2FzZXMuR2VuaXRpdl06IFwiZWluZXNcIlxyXG4gIH0sXHJcbiAgW0dlbmRlcnMuRmVtaW5pbl06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImVpbmVcIixcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImVpbmVcIixcclxuICAgIFtDYXNlcy5EYXRpdl06IFwiZWluZXJcIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJlaW5lclwiXHJcbiAgfSxcclxuICBbR2VuZGVycy5QbHVyYWxdOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XTogdW5kZWZpbmVkLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IHVuZGVmaW5lZCxcclxuICAgIFtDYXNlcy5EYXRpdl06IHVuZGVmaW5lZCxcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogdW5kZWZpbmVkXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbml0ZUFydGljbGUoZ2VuZGVyLCBrYXN1cykge1xyXG4gIHJldHVybiBEZWZpbml0ZUFydGljbGVzW2dlbmRlcl1ba2FzdXNdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZWZpbml0ZUFydGljbGUoZ2VuZGVyLCBrYXN1cykge1xyXG4gIHJldHVybiBJbmRlZmluaXRlQXJ0aWNsZXNbZ2VuZGVyXVtrYXN1c107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3VuIHtcclxuICBjb25zdHJ1Y3RvcihzaW5ndWxhciwgcGx1cmFsLCBnZW5kZXIsIHR5cGUsIGV4Y2VwdGlvbnMgPSBbXSkge1xyXG4gICAgdGhpcy5zaW5ndWxhciA9IHNpbmd1bGFyO1xyXG4gICAgdGhpcy5wbHVyYWwgPSBwbHVyYWw7XHJcbiAgICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmV4Y2VwdGlvbnMgPSBleGNlcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgYXJ0aWNsZShrYXN1cywgbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKG51bWJlciA9PSBQbHVyYWxpdHkuU2luZ3VsYXIpID8gRGVmaW5pdGVBcnRpY2xlc1t0aGlzLmdlbmRlcl1ba2FzdXNdIDogRGVmaW5pdGVBcnRpY2xlc1tHZW5kZXJzLlBsdXJhbF1ba2FzdXNdXHJcbiAgfVxyXG5cclxuICBjb25qdWdhdGUoa2FzdXMsIG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJ0aWNsZShrYXN1cywgbnVtYmVyKSArIFwiIFwiICsgdGhpcy5pbk51bWJlcihudW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgaW5OdW1iZXIobnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKChudW1iZXIgPT0gUGx1cmFsaXR5LlNpbmd1bGFyKSA/IHRoaXMuc2luZ3VsYXIgOiB0aGlzLnBsdXJhbCk7XHJcbiAgfVxyXG5cclxuICBjb25qdWdhdGlvbnMoKSB7XHJcblxyXG4gICAgdmFyIGNvbmp1Z2F0aW9ucyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBudW1iZXIgb2YgT2JqZWN0LnZhbHVlcyhQbHVyYWxpdHkpKSB7XHJcbiAgICAgIGNvbmp1Z2F0aW9uc1tudW1iZXJdID0ge307XHJcbiAgICAgIGZvciAoY29uc3Qga2FzdXMgb2YgT2JqZWN0LnZhbHVlcyhDYXNlcykpIHtcclxuICAgICAgICBjb25qdWdhdGlvbnNbbnVtYmVyXVtrYXN1c10gPSB0aGlzLmNvbmp1Z2F0ZShrYXN1cywgbnVtYmVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuU2luZ3VsYXJdW0Nhc2VzLkdlbml0aXZdICs9IFwic1wiO1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuUGx1cmFsXVtDYXNlcy5EYXRpdl0gKz0gXCJuXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdGZpeCA9IHRoaXMuc2luZ3VsYXIuY2hhckF0KHRoaXMuc2luZ3VsYXIubGVuZ3RoIC0gMSkgPT0gXCJlXCIgPyBcIm5cIiA6IFwiZW5cIjtcclxuXHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5TaW5ndWxhcl1bQ2FzZXMuR2VuaXRpdl0gKz0gcG9zdGZpeDtcclxuICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlNpbmd1bGFyXVtDYXNlcy5EYXRpdl0gKz0gcG9zdGZpeDtcclxuICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlNpbmd1bGFyXVtDYXNlcy5Ba2t1c2F0aXZdICs9IHBvc3RmaXg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5TaW5ndWxhcl1bQ2FzZXMuR2VuaXRpdl0gKz0gXCJlc1wiO1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuUGx1cmFsXVtDYXNlcy5EYXRpdl0gKz0gXCJuXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5QbHVyYWxdW0Nhc2VzLkRhdGl2XSArPSBcIm5cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDY6IHtcclxuICAgICAgICBpZiAodGhpcy5nZW5kZXIgPT0gR2VuZGVycy5NYXNrdWxpbiB8fCB0aGlzLmdlbmRlciA9PSBHZW5kZXJzLk5ldXRydW0pXHJcbiAgICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlNpbmd1bGFyXVtDYXNlcy5HZW5pdGl2XSArPSBcInNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4Y2VwdGlvbnMuZm9yRWFjaChleCA9PiB7XHJcbiAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuUGx1cmFsXVtleC5rYXN1c10gPSB0aGlzLmFydGljbGUoZXgua2FzdXMsIFBsdXJhbGl0eS5QbHVyYWwpICsgXCIgXCIgKyBleC5mb3JtO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmp1Z2F0aW9ucztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGpla3RpdkRlY2xlbnNpb25UeXBlID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgQmVzdGltbXRlcjogMSxcclxuICBVbmJlc3RpbW10ZXI6IDIsXHJcbiAgT2huZTogM1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGpla3RpdkRlY2xlbnNpb25Qb3N0Rml4ID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgW0FkamVrdGl2RGVjbGVuc2lvblR5cGUuQmVzdGltbXRlcl06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVcIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZVwiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVuXCJcclxuICAgIH0sXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZVwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZW5cIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5EYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVuXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVuXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVuXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZW5cIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5HZW5pdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZW5cIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZW5cIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlblwiXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgW0FkamVrdGl2RGVjbGVuc2lvblR5cGUuVW5iZXN0aW1tdGVyXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVyXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVcIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZXNcIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlXCJcclxuICAgIH0sXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZVwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlc1wiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVcIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5EYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVuXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVuXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVuXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZW5cIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5HZW5pdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZW5cIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZW5cIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlblwiXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgW0FkamVrdGl2RGVjbGVuc2lvblR5cGUuT2huZV06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlclwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVzXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZVwiXHJcbiAgICB9LFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVuXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVcIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZXNcIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlXCJcclxuICAgIH0sXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlbVwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlclwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlbVwiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVuXCJcclxuICAgIH0sXHJcbiAgICBbQ2FzZXMuR2VuaXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVuXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVyXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVuXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZXJcIlxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGpla3RpdiB7XHJcbiAgY29uc3RydWN0b3Iocm9vdEZvcm0pIHtcclxuICAgIHRoaXMucm9vdEZvcm0gPSByb290Rm9ybTtcclxuICB9XHJcblxyXG4gIGRlY2xpbmUodHlwZSwgZ2VuZGVyLCBrYXN1cykge1xyXG4gICAgY29uc3QgZGVjbGluZWQgPSB0aGlzLnJvb3RGb3JtICsgQWRqZWt0aXZEZWNsZW5zaW9uUG9zdEZpeFt0eXBlXVtrYXN1c11bZ2VuZGVyXTtcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBBZGpla3RpdkRlY2xlbnNpb25UeXBlLkJlc3RpbW10ZXI6XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRlQXJ0aWNsZShnZW5kZXIsIGthc3VzKSArIFwiIFwiICsgZGVjbGluZWQ7XHJcbiAgICAgIGNhc2UgQWRqZWt0aXZEZWNsZW5zaW9uVHlwZS5VbmJlc3RpbW10ZXI6XHJcbiAgICAgICAgaWYgKGdlbmRlciA9PSBHZW5kZXJzLlBsdXJhbClcclxuICAgICAgICAgIHJldHVybiBkZWNsaW5lZDtcclxuICAgICAgICByZXR1cm4gaW5kZWZpbml0ZUFydGljbGUoZ2VuZGVyLCBrYXN1cykgKyBcIiBcIiArIGRlY2xpbmVkO1xyXG4gICAgICBjYXNlIEFkamVrdGl2RGVjbGVuc2lvblR5cGUuT2huZTpcclxuICAgICAgICByZXR1cm4gZGVjbGluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWNsZW5zaW9ucygpIHtcclxuICAgIHZhciBkZWNsZW5zaW9ucyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCB0eXBlIG9mIE9iamVjdC52YWx1ZXMoQWRqZWt0aXZEZWNsZW5zaW9uVHlwZSkpIHtcclxuICAgICAgZGVjbGVuc2lvbnNbdHlwZV0gPSB7fTtcclxuXHJcbiAgICAgIGZvciAoY29uc3Qga2FzdXMgb2YgT2JqZWN0LnZhbHVlcyhDYXNlcykpIHtcclxuICAgICAgICBkZWNsZW5zaW9uc1t0eXBlXVtrYXN1c10gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdlbmRlciBvZiBPYmplY3QudmFsdWVzKEdlbmRlcnMpKSB7XHJcbiAgICAgICAgICBkZWNsZW5zaW9uc1t0eXBlXVtrYXN1c11bZ2VuZGVyXSA9IHRoaXMuZGVjbGluZSh0eXBlLCBnZW5kZXIsIGthc3VzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZWNsZW5zaW9ucztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTm91biwgR2VuZGVycywgQ2FzZXMsIEFkamVrdGl2IH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgRGljdGlvbmFyeSA9IFtcclxuICBuZXcgTm91bihcIkJ1c1wiLCBcIkJ1c3NlXCIsIFtHZW5kZXJzLk1hc2t1bGluXSwgMSksXHJcbiAgbmV3IE5vdW4oXCJaaW1tZXJcIiwgXCJaaW1tZXJcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIlTDvHJcIiwgXCJUw7xyZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIkhlbGRcIiwgXCJIZWxkZW5cIiwgR2VuZGVycy5NYXNrdWxpbiwgMyksXHJcbiAgbmV3IE5vdW4oXCJLaW5kXCIsIFwiS2luZGVyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNCksXHJcbiAgbmV3IE5vdW4oXCJIYW5kXCIsIFwiSMOkbmRlXCIsIEdlbmRlcnMuRmVtaW5pbiwgNSksXHJcbiAgbmV3IE5vdW4oXCJPcGFcIiwgXCJPcGFzXCIsIEdlbmRlcnMuTWFza3VsaW4sIDYpLFxyXG4gIG5ldyBOb3VuKFwiTWFtYVwiLCBcIk1hbWFzXCIsIEdlbmRlcnMuRmVtaW5pbiwgNiksXHJcbiAgbmV3IE5vdW4oXCJLb21tYVwiLCBcIktvbW1hc1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG5cclxuICBuZXcgTm91bihcIkJhaG5cIiwgXCJCYWhuZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIkFtdFwiLCBcIsOEbXRlclwiLCBHZW5kZXJzLk5ldXRydW0sIDQpLFxyXG4gIG5ldyBOb3VuKFwiV29ydFwiLCBcIlfDtnJ0ZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIk1lc3NlXCIsIFwiTWVzc2VuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJTcGllbFwiLCBcIlNwaWVsZVwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gICAgXHJcbiAgbmV3IE5vdW4oXCJBbmxhZ2VcIiwgXCJBbmxhZ2VuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJXZWxsZVwiLCBcIldlbGxlblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiTWVzc2VyXCIsIFwiTWVzc2VyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSksXHJcbiAgbmV3IE5vdW4oXCJNYW50ZWxcIiwgXCJNw6RudGVsXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiU2NodWhcIiwgXCJTY2h1aGVcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJBbXBlbFwiLCBcIkFtcGVsblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiV3Vyc3RcIiwgXCJXw7xyc3RlXCIsIEdlbmRlcnMuRmVtaW5pbiwgNSksXHJcbiAgbmV3IE5vdW4oXCJIYXNlXCIsIFwiSGFzZW5cIiwgR2VuZGVycy5NYXNrdWxpbiwgMyksXHJcbiAgbmV3IE5vdW4oXCJMaWVkXCIsIFwiTGllZGVyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNCksXHJcbiAgbmV3IE5vdW4oXCJXYWxkXCIsIFwiV8OkbGRlclwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSwgLy8gY29uZmlybSB0eXBlXHJcbiAgbmV3IE5vdW4oXCJCw7xyb1wiLCBcIkLDvHJvc1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiS29saWJyaVwiLCBcIktvbGlicmlzXCIsIEdlbmRlcnMuTWFza3VsaW4sIDYpLFxyXG4gIG5ldyBOb3VuKFwiRGF0dW1cIiwgXCJEYXRlblwiLCBHZW5kZXJzLk5ldXRydW0sIDEsIFt7IGthc3VzOiBDYXNlcy5EYXRpdiwgZm9ybTogXCJEYXRlblwifV0pLCAvLyBjb25maXJtIHR5cGVcclxuICBuZXcgTm91bihcIlZhdGVyXCIsIFwiVsOkdGVyXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiTXV0dGVyXCIsIFwiTcO8dHRlclwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiUGZlcmRcIiwgXCJQZmVyZGVcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIlRpc2NoXCIsIFwiVGlzY2hlXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiRmVkZXJcIiwgXCJGZWRlcm5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuXHJcbiAgbmV3IE5vdW4oXCJLb2NoXCIsIFwiS8O2Y2hlXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiSHVuZFwiLCBcIkh1bmRlXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiR2Fuc1wiLCBcIkfDpG5zZVwiLCBHZW5kZXJzLkZlbWluaW4sIDUpLFxyXG4gIG5ldyBOb3VuKFwiSGF1c1wiLCBcIkjDpHVzZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIk11bmRcIiwgXCJNw7xuZGVyXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiTmFtZVwiLCBcIk5hbWVuXCIsIEdlbmRlcnMuTWFza3VsaW4sIDMpLFxyXG4gIG5ldyBOb3VuKFwiTGVocmVcIiwgXCJMZWhyZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIktpbm9cIiwgXCJLaW5vc1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiUmFkaW9cIiwgXCJSYWRpb3NcIiwgR2VuZGVycy5OZXV0cnVtLCA2KSxcclxuICBuZXcgTm91bihcIk9ua2VsXCIsIFwiT25rZWxcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJXYW5kXCIsIFwiV8OkbmRlXCIsIEdlbmRlcnMuRmVtaW5pbiwgNSksXHJcbiAgbmV3IE5vdW4oXCJSdW5kZVwiLCBcIlJ1bmRlblwiLCBHZW5kZXJzLkZlbWluaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiQmVlcmVcIiwgXCJCZWVyZW5cIiwgR2VuZGVycy5GZW1pbmluLCAxKSxcclxuICBuZXcgTm91bihcIkZhcmJlXCIsIFwiRmFyYmVuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJCaWVyXCIsIFwiQmllcmVcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIlN0w7xja1wiLCBcIlN0w7xja2VcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIlppbW1lclwiLCBcIlppbW1lclwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gIG5ldyBOb3VuKFwiQsOkclwiLCBcIkLDpHJlblwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIldhbFwiLCBcIldhbGVcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJGYWRlblwiLCBcIkbDpGRlblwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIlNjaGVyZVwiLCBcIlNjaGVyZW5cIiwgR2VuZGVycy5GZW1pbmluLCAxKSxcclxuICBuZXcgTm91bihcIlN0ZWluXCIsIFwiU3RlaW5lXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSksXHJcbiAgbmV3IE5vdW4oXCJadWdcIiwgXCJaw7xnZVwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIkZlaGxlclwiLCBcIkZlaGxlclwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIlNjaG5hYmVsXCIsIFwiU2NobsOkYmVsXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiTEtXXCIsIFwiTEtXU1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiSG90ZWxcIiwgXCJIb3RlbHNcIiwgR2VuZGVycy5OZXV0cnVtLCA2KSxcclxuICBuZXcgTm91bihcIlJpbmRcIiwgXCJSaW5kZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIk9tYVwiLCBcIk9tYXNcIiwgR2VuZGVycy5GZW1pbmluLCA2KSxcclxuICBuZXcgTm91bihcIkxhbmRcIiwgXCJMw6RuZGVyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNCksXHJcbiAgbmV3IE5vdW4oXCJIYXVzXCIsIFwiSMOkdXNlclwiLCBHZW5kZXJzLk5ldXRydW0sIDQpLFxyXG4gIG5ldyBOb3VuKFwiQmV0dFwiLCBcIkJldHRlblwiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiSW5zdHJ1bWVudFwiLCBcIkluc3RydW1lbnRlXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSksXHJcbiAgbmV3IE5vdW4oXCJCbGF1XCIsIFwiQmxhdVwiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiU3BhbmlzY2hcIiwgXCJTcGFuaXNjaFwiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIFxyXG5cclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkamVjdGl2ZXMoKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oYXJndW1lbnRzKS5tYXAoIHJvb3RGb3JtID0+IG5ldyBBZGpla3Rpdihyb290Rm9ybSkgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkamVjdGl2ZXMgPSBjcmVhdGVBZGplY3RpdmVzKFwiZ3Jvw59cIiwgXCJzY2jDtm5cIiwgXCJoZWnDn1wiLCBcIm5ldVwiLCBcImd1dFwiLCBcInNjaGxlY2h0XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUFkamVjdGl2ZSgpIHtcclxuICByZXR1cm4gQWRqZWN0aXZlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBBZGplY3RpdmVzLmxlbmd0aCldO1xyXG59IiwiaW1wb3J0IHsgR2VuZGVycywgQ2FzZXMsIFBsdXJhbGl0eSB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcclxuXHJcbmNvbnN0IENhc2VQcmVmaXggPSB7XHJcbiAgW0Nhc2VzLk5vbWluYXRpdl06IFwibm9tXCIsXHJcbiAgW0Nhc2VzLkFra3VzYXRpdl06IFwiYWtrXCIsXHJcbiAgW0Nhc2VzLkRhdGl2XTogXCJkYXRcIixcclxuICBbQ2FzZXMuR2VuaXRpdl06IFwiZ2VuXCJcclxufTtcclxuY29uc3QgTnVtYmVyUG9zdGZpeCA9IHtcclxuICBbUGx1cmFsaXR5LlNpbmd1bGFyXTogXCJzaW5ndWxhclwiLFxyXG4gIFtQbHVyYWxpdHkuUGx1cmFsXTogXCJwbHVyYWxcIlxyXG59O1xyXG5cclxudmFyIGFwcCA9IG5ldyBWdWUoe1xyXG4gIGVsOiBcIiNhcHBcIixcclxuICBkYXRhOiB7XHJcbiAgICB3b3JkOiBcIlwiLFxyXG4gICAgY29uanVnYXRpb25zOiBudWxsLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcl9ndWVzczogXCJcIixcclxuICAgIGdlbmRlcjogXCJcIixcclxuICAgIGFuc3dlcnM6IHt9LFxyXG4gICAgcmV2ZWFsX3R5cGU6IGZhbHNlLFxyXG4gICAgcmV2ZWFsX2dlbmRlcjogZmFsc2UsXHJcbiAgICByZXZlYWxfZ2VuZGVyX2J1dHRvbnM6IHRydWVcclxuICB9LFxyXG5cclxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMubmV3V29yZCgpO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNoZWNrQW5zd2VyOiBmdW5jdGlvbihrYXN1cywgbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0SWQgPSBDYXNlUHJlZml4W2thc3VzXSArIFwiX1wiICsgTnVtYmVyUG9zdGZpeFtudW1iZXJdO1xyXG4gICAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKS52YWx1ZTtcclxuICAgICAgY29uc3QgYW5zd2VyID0gdGhpcy5jb25qdWdhdGlvbnNbbnVtYmVyXVtrYXN1c107XHJcbiAgICAgIGNvbnN0IGFuc3dlckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCArIFwiX2Fuc3dlclwiKTtcclxuICBcclxuICAgICAgYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0gYW5zd2VyO1xyXG4gICAgICBpZiAoYW5zd2VyICE9IHVzZXJJbnB1dClcclxuICAgICAgICBhbnN3ZXJGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5jb3JyZWN0XCIpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgYW5zd2VyRmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxuICAgICAgfSxcclxuXHJcbiAgICBjbGVhckNvbmp1Z2F0aW9uOiBmdW5jdGlvbihrYXN1cywgbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0SWQgPSBDYXNlUHJlZml4W2thc3VzXSArIFwiX1wiICsgTnVtYmVyUG9zdGZpeFtudW1iZXJdO1xyXG4gICAgICBjb25zdCBhbnN3ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQgKyBcIl9hbnN3ZXJcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgYW5zd2VyRmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2VuZGVyTmFtZTogZnVuY3Rpb24oZ2VuZGVyKSB7XHJcbiAgICAgIHJldHVybiAoZ2VuZGVyID09IEdlbmRlcnMuRmVtaW5pbikgPyBcIkZlbWluaW5cIiA6XHJcbiAgICAgICAgICAgICAgKGdlbmRlciA9PSBHZW5kZXJzLk1hc2t1bGluKSA/IFwiTWFza3VsaW5cIjpcclxuICAgICAgICAgICAgICBcIk5ldXRydW1cIjtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tHZW5kZXI6IGZ1bmN0aW9uKGdlbmRlcikge1xyXG4gICAgICB0aGlzLmdlbmRlcl9ndWVzcyA9IGdlbmRlcjtcclxuICAgICAgdGhpcy5yZXZlYWxfZ2VuZGVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZXZlYWxfZ2VuZGVyX2J1dHRvbnMgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2s6IGZ1bmN0aW9uKGthc3VzTGlzdCA9IG51bGwpIHtcclxuICAgICAgaWYgKGthc3VzTGlzdCA9PSBudWxsKVxyXG4gICAgICAgIGthc3VzTGlzdCA9IE9iamVjdC52YWx1ZXMoQ2FzZXMpO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBrYXN1cyBvZiBrYXN1c0xpc3QpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG51bWJlciBvZiBPYmplY3QudmFsdWVzKFBsdXJhbGl0eSkpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tBbnN3ZXIoa2FzdXMsIG51bWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tHZW5kZXIodGhpcy53b3JkLmdlbmRlcik7XHJcbiAgICAgIHRoaXMucmV2ZWFsX3R5cGUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBuZXdXb3JkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy53b3JkID0gRGljdGlvbmFyeVsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGljdGlvbmFyeS5sZW5ndGgpIF07XHJcbiAgICAgIHRoaXMuY29uanVnYXRpb25zID0gdGhpcy53b3JkLmNvbmp1Z2F0aW9ucygpO1xyXG4gICAgICB0aGlzLnJldmVhbF90eXBlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmV2ZWFsX2dlbmRlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJldmVhbF9nZW5kZXJfYnV0dG9ucyA9IHRydWU7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGthc3VzIG9mIE9iamVjdC52YWx1ZXMoQ2FzZXMpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBudW1iZXIgb2YgT2JqZWN0LnZhbHVlcyhQbHVyYWxpdHkpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyQ29uanVnYXRpb24oa2FzdXMsIG51bWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=