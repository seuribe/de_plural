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

Vue.component('checked-input', {
  props: ['expected', 'show', 'bus'],
  data: function() {
    return {
      input: "",
    }
  },
  methods: {
    clear: function() {
      this.input = "";
    }
  },
  mounted() {
    this.bus.$on('clear', this.clear);
  },
  template: `<div>
               <input v-model="input" type="text"></input>
               <span v-if="show" v-bind:class="{ incorrect: (input != expected) }">{{expected}}</span>
             </div>`

});

Vue.component('checked-case', {
  props: ['kasus', 'conjugations', 'show', 'bus'],
  data: function() {
    return {
    }
  },
  template:`<div class="row">
              <div class="rowhead">{{ kasus }}</div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="conjugations['Singular'][kasus]" v-bind:show="show"></checked-input></div>
              <div class="inputcell"><checked-input v-bind:bus="bus" v-bind:expected="conjugations['Plural'][kasus]" v-bind:show="show"></checked-input></div>
              <div class="buttoncell"><button v-on:click="show = !show">{{ (show ? "Hide" : "Check") }}</button></div>
            </div>`
});

var app = new Vue({
  el: "#app",
  data: {
    word: "",
    conjugations: null,
    type: "",
    gender_guess: "",
    gender: "",
    show_answers: false,
    reveal_type: false,
    reveal_gender: false,
    reveal_gender_buttons: true,
    bus: new Vue()
  },

  created: function() {
    this.newWord();
  },

  methods: {
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

      this.checkGender(this.word.gender);
      this.reveal_type = true;
      this.show_answers = true;

    },

    newWord: function() {
      this.word = _dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"][ Math.floor(Math.random() * _dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"].length) ];
      this.conjugations = this.word.conjugations();
      this.show_answers = false;
      this.reveal_type = false;
      this.reveal_gender = false;
      this.reveal_gender_buttons = true;
      this.bus.$emit('clear');
    }
  }
});



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RlZmluaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wbHVyYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQix5QkFBeUIsb0RBQU87QUFDaEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFLOztBQUV2QztBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLGtCQUFrQixzREFBVSw2QkFBNkIsc0RBQVU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicGx1cmFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3BsdXJhbHMuanNcIik7XG4iLCJcclxuZXhwb3J0IGNvbnN0IEdlbmRlcnMgPSBPYmplY3QuZnJlZXplKHtcclxuICBNYXNrdWxpbjogXCJNYXNrdWxpblwiLFxyXG4gIEZlbWluaW46IFwiRmVtaW5pblwiLFxyXG4gIE5ldXRydW06IFwiTmV1dHJ1bVwiLFxyXG4gIFBsdXJhbDogXCJQbHVyYWxcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXNlcyA9IE9iamVjdC5mcmVlemUoe1xyXG4gIE5vbWluYXRpdjogXCJOb21pbmF0aXZcIixcclxuICBBa2t1c2F0aXY6IFwiQWtrdXNhdGl2XCIsXHJcbiAgRGF0aXY6IFwiRGF0aXZcIixcclxuICBHZW5pdGl2OiBcIkdlbml0aXZcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbHVyYWxpdHkgPSBPYmplY3QuZnJlZXplKHtcclxuICBTaW5ndWxhcjogXCJTaW5ndWxhclwiLFxyXG4gIFBsdXJhbDogXCJQbHVyYWxcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZpbml0ZUFydGljbGVzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgW0dlbmRlcnMuTWFza3VsaW5dOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XTogXCJkZXJcIixcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImRlblwiLFxyXG4gICAgW0Nhc2VzLkRhdGl2XTogXCJkZW1cIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJkZXNcIlxyXG4gIH0sXHJcbiAgW0dlbmRlcnMuTmV1dHJ1bV06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImRhc1wiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZGFzXCIsXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiBcImRlbVwiLFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiBcImRlc1wiXHJcbiAgfSxcclxuICBbR2VuZGVycy5GZW1pbmluXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IFwiZGllXCIsXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XTogXCJkaWVcIixcclxuICAgIFtDYXNlcy5EYXRpdl06IFwiZGVyXCIsXHJcbiAgICBbQ2FzZXMuR2VuaXRpdl06IFwiZGVyXCJcclxuICB9LFxyXG4gIFtHZW5kZXJzLlBsdXJhbF06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImRpZVwiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZGllXCIsXHJcbiAgICBbQ2FzZXMuRGF0aXZdOiBcImRlblwiLFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiBcImRlclwiXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRlZmluaXRlQXJ0aWNsZXMgPSBPYmplY3QuZnJlZXplKHtcclxuICBbR2VuZGVycy5NYXNrdWxpbl06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiBcImVpblwiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZWluZW5cIixcclxuICAgIFtDYXNlcy5EYXRpdl06IFwiZWluZW1cIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJlaW5lc1wiXHJcbiAgfSxcclxuICBbR2VuZGVycy5OZXV0cnVtXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IFwiZWluXCIsXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XTogXCJlaW5cIixcclxuICAgIFtDYXNlcy5EYXRpdl06IFwiZWluZW1cIixcclxuICAgIFtDYXNlcy5HZW5pdGl2XTogXCJlaW5lc1wiXHJcbiAgfSxcclxuICBbR2VuZGVycy5GZW1pbmluXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IFwiZWluZVwiLFxyXG4gICAgW0Nhc2VzLkFra3VzYXRpdl06IFwiZWluZVwiLFxyXG4gICAgW0Nhc2VzLkRhdGl2XTogXCJlaW5lclwiLFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiBcImVpbmVyXCJcclxuICB9LFxyXG4gIFtHZW5kZXJzLlBsdXJhbF06IHtcclxuICAgIFtDYXNlcy5Ob21pbmF0aXZdOiB1bmRlZmluZWQsXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XTogdW5kZWZpbmVkLFxyXG4gICAgW0Nhc2VzLkRhdGl2XTogdW5kZWZpbmVkLFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiB1bmRlZmluZWRcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluaXRlQXJ0aWNsZShnZW5kZXIsIGthc3VzKSB7XHJcbiAgcmV0dXJuIERlZmluaXRlQXJ0aWNsZXNbZ2VuZGVyXVtrYXN1c107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmRlZmluaXRlQXJ0aWNsZShnZW5kZXIsIGthc3VzKSB7XHJcbiAgcmV0dXJuIEluZGVmaW5pdGVBcnRpY2xlc1tnZW5kZXJdW2thc3VzXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdW4ge1xyXG4gIGNvbnN0cnVjdG9yKHNpbmd1bGFyLCBwbHVyYWwsIGdlbmRlciwgdHlwZSwgZXhjZXB0aW9ucyA9IFtdKSB7XHJcbiAgICB0aGlzLnNpbmd1bGFyID0gc2luZ3VsYXI7XHJcbiAgICB0aGlzLnBsdXJhbCA9IHBsdXJhbDtcclxuICAgIHRoaXMuZ2VuZGVyID0gZ2VuZGVyO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuZXhjZXB0aW9ucyA9IGV4Y2VwdGlvbnM7XHJcbiAgfVxyXG5cclxuICBhcnRpY2xlKGthc3VzLCBudW1iZXIpIHtcclxuICAgIHJldHVybiAobnVtYmVyID09IFBsdXJhbGl0eS5TaW5ndWxhcikgPyBEZWZpbml0ZUFydGljbGVzW3RoaXMuZ2VuZGVyXVtrYXN1c10gOiBEZWZpbml0ZUFydGljbGVzW0dlbmRlcnMuUGx1cmFsXVtrYXN1c11cclxuICB9XHJcblxyXG4gIGNvbmp1Z2F0ZShrYXN1cywgbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcnRpY2xlKGthc3VzLCBudW1iZXIpICsgXCIgXCIgKyB0aGlzLmluTnVtYmVyKG51bWJlcik7XHJcbiAgfVxyXG5cclxuICBpbk51bWJlcihudW1iZXIpIHtcclxuICAgIHJldHVybiAoKG51bWJlciA9PSBQbHVyYWxpdHkuU2luZ3VsYXIpID8gdGhpcy5zaW5ndWxhciA6IHRoaXMucGx1cmFsKTtcclxuICB9XHJcblxyXG4gIGNvbmp1Z2F0aW9ucygpIHtcclxuXHJcbiAgICB2YXIgY29uanVnYXRpb25zID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG51bWJlciBvZiBPYmplY3QudmFsdWVzKFBsdXJhbGl0eSkpIHtcclxuICAgICAgY29uanVnYXRpb25zW251bWJlcl0gPSB7fTtcclxuICAgICAgZm9yIChjb25zdCBrYXN1cyBvZiBPYmplY3QudmFsdWVzKENhc2VzKSkge1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tudW1iZXJdW2thc3VzXSA9IHRoaXMuY29uanVnYXRlKGthc3VzLCBudW1iZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5TaW5ndWxhcl1bQ2FzZXMuR2VuaXRpdl0gKz0gXCJzXCI7XHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5QbHVyYWxdW0Nhc2VzLkRhdGl2XSArPSBcIm5cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICBjb25zdCBwb3N0Zml4ID0gdGhpcy5zaW5ndWxhci5jaGFyQXQodGhpcy5zaW5ndWxhci5sZW5ndGggLSAxKSA9PSBcImVcIiA/IFwiblwiIDogXCJlblwiO1xyXG5cclxuICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlNpbmd1bGFyXVtDYXNlcy5HZW5pdGl2XSArPSBwb3N0Zml4O1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuU2luZ3VsYXJdW0Nhc2VzLkRhdGl2XSArPSBwb3N0Zml4O1xyXG4gICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuU2luZ3VsYXJdW0Nhc2VzLkFra3VzYXRpdl0gKz0gcG9zdGZpeDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQ6IHtcclxuICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlNpbmd1bGFyXVtDYXNlcy5HZW5pdGl2XSArPSBcImVzXCI7XHJcbiAgICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5QbHVyYWxdW0Nhc2VzLkRhdGl2XSArPSBcIm5cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICBjb25qdWdhdGlvbnNbUGx1cmFsaXR5LlBsdXJhbF1bQ2FzZXMuRGF0aXZdICs9IFwiblwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNjoge1xyXG4gICAgICAgIGlmICh0aGlzLmdlbmRlciA9PSBHZW5kZXJzLk1hc2t1bGluIHx8IHRoaXMuZ2VuZGVyID09IEdlbmRlcnMuTmV1dHJ1bSlcclxuICAgICAgICAgIGNvbmp1Z2F0aW9uc1tQbHVyYWxpdHkuU2luZ3VsYXJdW0Nhc2VzLkdlbml0aXZdICs9IFwic1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhjZXB0aW9ucy5mb3JFYWNoKGV4ID0+IHtcclxuICAgICAgY29uanVnYXRpb25zW1BsdXJhbGl0eS5QbHVyYWxdW2V4Lmthc3VzXSA9IHRoaXMuYXJ0aWNsZShleC5rYXN1cywgUGx1cmFsaXR5LlBsdXJhbCkgKyBcIiBcIiArIGV4LmZvcm07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29uanVnYXRpb25zO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkamVrdGl2RGVjbGVuc2lvblR5cGUgPSBPYmplY3QuZnJlZXplKHtcclxuICBCZXN0aW1tdGVyOiAxLFxyXG4gIFVuYmVzdGltbXRlcjogMixcclxuICBPaG5lOiAzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkamVrdGl2RGVjbGVuc2lvblBvc3RGaXggPSBPYmplY3QuZnJlZXplKHtcclxuICBbQWRqZWt0aXZEZWNsZW5zaW9uVHlwZS5CZXN0aW1tdGVyXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVcIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZVwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZW5cIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlblwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVcIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlblwiXHJcbiAgICB9LFxyXG4gICAgW0Nhc2VzLkRhdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZW5cIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZW5cIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlblwiXHJcbiAgICB9LFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlblwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlblwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlblwiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVuXCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBbQWRqZWt0aXZEZWNsZW5zaW9uVHlwZS5VbmJlc3RpbW10ZXJdOiB7XHJcbiAgICBbQ2FzZXMuTm9taW5hdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZXJcIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZVwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlc1wiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVcIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5Ba2t1c2F0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlblwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVzXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZVwiXHJcbiAgICB9LFxyXG4gICAgW0Nhc2VzLkRhdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZW5cIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZW5cIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlblwiXHJcbiAgICB9LFxyXG4gICAgW0Nhc2VzLkdlbml0aXZdOiB7XHJcbiAgICAgIFtHZW5kZXJzLk1hc2t1bGluXTogXCJlblwiLCBbR2VuZGVycy5GZW1pbmluXTogXCJlblwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlblwiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVuXCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBbQWRqZWt0aXZEZWNsZW5zaW9uVHlwZS5PaG5lXToge1xyXG4gICAgW0Nhc2VzLk5vbWluYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVyXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVcIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZXNcIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlXCJcclxuICAgIH0sXHJcbiAgICBbQ2FzZXMuQWtrdXNhdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZVwiLCBbR2VuZGVycy5OZXV0cnVtXTogXCJlc1wiLCBbR2VuZGVycy5QbHVyYWxdOiBcImVcIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5EYXRpdl06IHtcclxuICAgICAgW0dlbmRlcnMuTWFza3VsaW5dOiBcImVtXCIsIFtHZW5kZXJzLkZlbWluaW5dOiBcImVyXCIsIFtHZW5kZXJzLk5ldXRydW1dOiBcImVtXCIsIFtHZW5kZXJzLlBsdXJhbF06IFwiZW5cIlxyXG4gICAgfSxcclxuICAgIFtDYXNlcy5HZW5pdGl2XToge1xyXG4gICAgICBbR2VuZGVycy5NYXNrdWxpbl06IFwiZW5cIiwgW0dlbmRlcnMuRmVtaW5pbl06IFwiZXJcIiwgW0dlbmRlcnMuTmV1dHJ1bV06IFwiZW5cIiwgW0dlbmRlcnMuUGx1cmFsXTogXCJlclwiXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkamVrdGl2IHtcclxuICBjb25zdHJ1Y3Rvcihyb290Rm9ybSkge1xyXG4gICAgdGhpcy5yb290Rm9ybSA9IHJvb3RGb3JtO1xyXG4gIH1cclxuXHJcbiAgZGVjbGluZSh0eXBlLCBnZW5kZXIsIGthc3VzKSB7XHJcbiAgICBjb25zdCBkZWNsaW5lZCA9IHRoaXMucm9vdEZvcm0gKyBBZGpla3RpdkRlY2xlbnNpb25Qb3N0Rml4W3R5cGVdW2thc3VzXVtnZW5kZXJdO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIEFkamVrdGl2RGVjbGVuc2lvblR5cGUuQmVzdGltbXRlcjpcclxuICAgICAgICByZXR1cm4gZGVmaW5pdGVBcnRpY2xlKGdlbmRlciwga2FzdXMpICsgXCIgXCIgKyBkZWNsaW5lZDtcclxuICAgICAgY2FzZSBBZGpla3RpdkRlY2xlbnNpb25UeXBlLlVuYmVzdGltbXRlcjpcclxuICAgICAgICBpZiAoZ2VuZGVyID09IEdlbmRlcnMuUGx1cmFsKVxyXG4gICAgICAgICAgcmV0dXJuIGRlY2xpbmVkO1xyXG4gICAgICAgIHJldHVybiBpbmRlZmluaXRlQXJ0aWNsZShnZW5kZXIsIGthc3VzKSArIFwiIFwiICsgZGVjbGluZWQ7XHJcbiAgICAgIGNhc2UgQWRqZWt0aXZEZWNsZW5zaW9uVHlwZS5PaG5lOlxyXG4gICAgICAgIHJldHVybiBkZWNsaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlY2xlbnNpb25zKCkge1xyXG4gICAgdmFyIGRlY2xlbnNpb25zID0ge307XHJcbiAgICBmb3IgKGNvbnN0IHR5cGUgb2YgT2JqZWN0LnZhbHVlcyhBZGpla3RpdkRlY2xlbnNpb25UeXBlKSkge1xyXG4gICAgICBkZWNsZW5zaW9uc1t0eXBlXSA9IHt9O1xyXG5cclxuICAgICAgZm9yIChjb25zdCBrYXN1cyBvZiBPYmplY3QudmFsdWVzKENhc2VzKSkge1xyXG4gICAgICAgIGRlY2xlbnNpb25zW3R5cGVdW2thc3VzXSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgZ2VuZGVyIG9mIE9iamVjdC52YWx1ZXMoR2VuZGVycykpIHtcclxuICAgICAgICAgIGRlY2xlbnNpb25zW3R5cGVdW2thc3VzXVtnZW5kZXJdID0gdGhpcy5kZWNsaW5lKHR5cGUsIGdlbmRlciwga2FzdXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlY2xlbnNpb25zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOb3VuLCBHZW5kZXJzLCBDYXNlcywgQWRqZWt0aXYgfSBmcm9tICcuL2RlZmluaXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBEaWN0aW9uYXJ5ID0gW1xyXG4gIG5ldyBOb3VuKFwiQnVzXCIsIFwiQnVzc2VcIiwgW0dlbmRlcnMuTWFza3VsaW5dLCAxKSxcclxuICBuZXcgTm91bihcIlppbW1lclwiLCBcIlppbW1lclwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gIG5ldyBOb3VuKFwiVMO8clwiLCBcIlTDvHJlblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiSGVsZFwiLCBcIkhlbGRlblwiLCBHZW5kZXJzLk1hc2t1bGluLCAzKSxcclxuICBuZXcgTm91bihcIktpbmRcIiwgXCJLaW5kZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIkhhbmRcIiwgXCJIw6RuZGVcIiwgR2VuZGVycy5GZW1pbmluLCA1KSxcclxuICBuZXcgTm91bihcIk9wYVwiLCBcIk9wYXNcIiwgR2VuZGVycy5NYXNrdWxpbiwgNiksXHJcbiAgbmV3IE5vdW4oXCJNYW1hXCIsIFwiTWFtYXNcIiwgR2VuZGVycy5GZW1pbmluLCA2KSxcclxuICBuZXcgTm91bihcIktvbW1hXCIsIFwiS29tbWFzXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcblxyXG4gIG5ldyBOb3VuKFwiQmFoblwiLCBcIkJhaG5lblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiQW10XCIsIFwiw4RtdGVyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNCksXHJcbiAgbmV3IE5vdW4oXCJXb3J0XCIsIFwiV8O2cnRlclwiLCBHZW5kZXJzLk5ldXRydW0sIDQpLFxyXG4gIG5ldyBOb3VuKFwiTWVzc2VcIiwgXCJNZXNzZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIlNwaWVsXCIsIFwiU3BpZWxlXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSksXHJcbiAgICBcclxuICBuZXcgTm91bihcIkFubGFnZVwiLCBcIkFubGFnZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIldlbGxlXCIsIFwiV2VsbGVuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJNZXNzZXJcIiwgXCJNZXNzZXJcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIk1hbnRlbFwiLCBcIk3DpG50ZWxcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJTY2h1aFwiLCBcIlNjaHVoZVwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIkFtcGVsXCIsIFwiQW1wZWxuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJXdXJzdFwiLCBcIlfDvHJzdGVcIiwgR2VuZGVycy5GZW1pbmluLCA1KSxcclxuICBuZXcgTm91bihcIkhhc2VcIiwgXCJIYXNlblwiLCBHZW5kZXJzLk1hc2t1bGluLCAzKSxcclxuICBuZXcgTm91bihcIkxpZWRcIiwgXCJMaWVkZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIldhbGRcIiwgXCJXw6RsZGVyXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLCAvLyBjb25maXJtIHR5cGVcclxuICBuZXcgTm91bihcIkLDvHJvXCIsIFwiQsO8cm9zXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgbmV3IE5vdW4oXCJLb2xpYnJpXCIsIFwiS29saWJyaXNcIiwgR2VuZGVycy5NYXNrdWxpbiwgNiksXHJcbiAgbmV3IE5vdW4oXCJEYXR1bVwiLCBcIkRhdGVuXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSwgW3sga2FzdXM6IENhc2VzLkRhdGl2LCBmb3JtOiBcIkRhdGVuXCJ9XSksIC8vIGNvbmZpcm0gdHlwZVxyXG4gIG5ldyBOb3VuKFwiVmF0ZXJcIiwgXCJWw6R0ZXJcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJNdXR0ZXJcIiwgXCJNw7x0dGVyXCIsIEdlbmRlcnMuRmVtaW5pbiwgMiksXHJcbiAgbmV3IE5vdW4oXCJQZmVyZFwiLCBcIlBmZXJkZVwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gIG5ldyBOb3VuKFwiVGlzY2hcIiwgXCJUaXNjaGVcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJGZWRlclwiLCBcIkZlZGVyblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG5cclxuICBuZXcgTm91bihcIktvY2hcIiwgXCJLw7ZjaGVcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJIdW5kXCIsIFwiSHVuZGVcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJHYW5zXCIsIFwiR8OkbnNlXCIsIEdlbmRlcnMuRmVtaW5pbiwgNSksXHJcbiAgbmV3IE5vdW4oXCJIYXVzXCIsIFwiSMOkdXNlclwiLCBHZW5kZXJzLk5ldXRydW0sIDQpLFxyXG4gIG5ldyBOb3VuKFwiTXVuZFwiLCBcIk3DvG5kZXJcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJOYW1lXCIsIFwiTmFtZW5cIiwgR2VuZGVycy5NYXNrdWxpbiwgMyksXHJcbiAgbmV3IE5vdW4oXCJMZWhyZVwiLCBcIkxlaHJlblwiLCBHZW5kZXJzLkZlbWluaW4sIDIpLFxyXG4gIG5ldyBOb3VuKFwiS2lub1wiLCBcIktpbm9zXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgbmV3IE5vdW4oXCJSYWRpb1wiLCBcIlJhZGlvc1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiT25rZWxcIiwgXCJPbmtlbFwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIldhbmRcIiwgXCJXw6RuZGVcIiwgR2VuZGVycy5GZW1pbmluLCA1KSxcclxuICBuZXcgTm91bihcIlJ1bmRlXCIsIFwiUnVuZGVuXCIsIEdlbmRlcnMuRmVtaW5pbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJCZWVyZVwiLCBcIkJlZXJlblwiLCBHZW5kZXJzLkZlbWluaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiRmFyYmVcIiwgXCJGYXJiZW5cIiwgR2VuZGVycy5GZW1pbmluLCAyKSxcclxuICBuZXcgTm91bihcIkJpZXJcIiwgXCJCaWVyZVwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gIG5ldyBOb3VuKFwiU3TDvGNrXCIsIFwiU3TDvGNrZVwiLCBHZW5kZXJzLk5ldXRydW0sIDEpLFxyXG4gIG5ldyBOb3VuKFwiWmltbWVyXCIsIFwiWmltbWVyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgMSksXHJcbiAgbmV3IE5vdW4oXCJCw6RyXCIsIFwiQsOkcmVuXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiV2FsXCIsIFwiV2FsZVwiLCBHZW5kZXJzLk1hc2t1bGluLCAxKSxcclxuICBuZXcgTm91bihcIkZhZGVuXCIsIFwiRsOkZGVuXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiU2NoZXJlXCIsIFwiU2NoZXJlblwiLCBHZW5kZXJzLkZlbWluaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiU3RlaW5cIiwgXCJTdGVpbmVcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIlp1Z1wiLCBcIlrDvGdlXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiRmVobGVyXCIsIFwiRmVobGVyXCIsIEdlbmRlcnMuTWFza3VsaW4sIDEpLFxyXG4gIG5ldyBOb3VuKFwiU2NobmFiZWxcIiwgXCJTY2huw6RiZWxcIiwgR2VuZGVycy5NYXNrdWxpbiwgMSksXHJcbiAgbmV3IE5vdW4oXCJMS1dcIiwgXCJMS1dTXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgbmV3IE5vdW4oXCJIb3RlbFwiLCBcIkhvdGVsc1wiLCBHZW5kZXJzLk5ldXRydW0sIDYpLFxyXG4gIG5ldyBOb3VuKFwiUmluZFwiLCBcIlJpbmRlclwiLCBHZW5kZXJzLk5ldXRydW0sIDQpLFxyXG4gIG5ldyBOb3VuKFwiT21hXCIsIFwiT21hc1wiLCBHZW5kZXJzLkZlbWluaW4sIDYpLFxyXG4gIG5ldyBOb3VuKFwiTGFuZFwiLCBcIkzDpG5kZXJcIiwgR2VuZGVycy5OZXV0cnVtLCA0KSxcclxuICBuZXcgTm91bihcIkhhdXNcIiwgXCJIw6R1c2VyXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNCksXHJcbiAgbmV3IE5vdW4oXCJCZXR0XCIsIFwiQmV0dGVuXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgbmV3IE5vdW4oXCJJbnN0cnVtZW50XCIsIFwiSW5zdHJ1bWVudGVcIiwgR2VuZGVycy5OZXV0cnVtLCAxKSxcclxuICBuZXcgTm91bihcIkJsYXVcIiwgXCJCbGF1XCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgbmV3IE5vdW4oXCJTcGFuaXNjaFwiLCBcIlNwYW5pc2NoXCIsIEdlbmRlcnMuTmV1dHJ1bSwgNiksXHJcbiAgXHJcblxyXG5dO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRqZWN0aXZlcygpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShhcmd1bWVudHMpLm1hcCggcm9vdEZvcm0gPT4gbmV3IEFkamVrdGl2KHJvb3RGb3JtKSApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRqZWN0aXZlcyA9IGNyZWF0ZUFkamVjdGl2ZXMoXCJncm/Dn1wiLCBcInNjaMO2blwiLCBcImhlacOfXCIsIFwibmV1XCIsIFwiZ3V0XCIsIFwic2NobGVjaHRcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQWRqZWN0aXZlKCkge1xyXG4gIHJldHVybiBBZGplY3RpdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFkamVjdGl2ZXMubGVuZ3RoKV07XHJcbn0iLCJpbXBvcnQgeyBHZW5kZXJzLCBDYXNlcywgUGx1cmFsaXR5IH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICcuL2RpY3Rpb25hcnknO1xyXG5cclxuY29uc3QgQ2FzZVByZWZpeCA9IHtcclxuICBbQ2FzZXMuTm9taW5hdGl2XTogXCJub21cIixcclxuICBbQ2FzZXMuQWtrdXNhdGl2XTogXCJha2tcIixcclxuICBbQ2FzZXMuRGF0aXZdOiBcImRhdFwiLFxyXG4gIFtDYXNlcy5HZW5pdGl2XTogXCJnZW5cIlxyXG59O1xyXG5jb25zdCBOdW1iZXJQb3N0Zml4ID0ge1xyXG4gIFtQbHVyYWxpdHkuU2luZ3VsYXJdOiBcInNpbmd1bGFyXCIsXHJcbiAgW1BsdXJhbGl0eS5QbHVyYWxdOiBcInBsdXJhbFwiXHJcbn07XHJcblxyXG5WdWUuY29tcG9uZW50KCdjaGVja2VkLWlucHV0Jywge1xyXG4gIHByb3BzOiBbJ2V4cGVjdGVkJywgJ3Nob3cnLCAnYnVzJ10sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbnB1dDogXCJcIixcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5pbnB1dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5idXMuJG9uKCdjbGVhcicsIHRoaXMuY2xlYXIpO1xyXG4gIH0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImlucHV0XCIgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwic2hvd1wiIHYtYmluZDpjbGFzcz1cInsgaW5jb3JyZWN0OiAoaW5wdXQgIT0gZXhwZWN0ZWQpIH1cIj57e2V4cGVjdGVkfX08L3NwYW4+XHJcbiAgICAgICAgICAgICA8L2Rpdj5gXHJcblxyXG59KTtcclxuXHJcblZ1ZS5jb21wb25lbnQoJ2NoZWNrZWQtY2FzZScsIHtcclxuICBwcm9wczogWydrYXN1cycsICdjb25qdWdhdGlvbnMnLCAnc2hvdycsICdidXMnXSxcclxuICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZW1wbGF0ZTpgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3doZWFkXCI+e3sga2FzdXMgfX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRjZWxsXCI+PGNoZWNrZWQtaW5wdXQgdi1iaW5kOmJ1cz1cImJ1c1wiIHYtYmluZDpleHBlY3RlZD1cImNvbmp1Z2F0aW9uc1snU2luZ3VsYXInXVtrYXN1c11cIiB2LWJpbmQ6c2hvdz1cInNob3dcIj48L2NoZWNrZWQtaW5wdXQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0Y2VsbFwiPjxjaGVja2VkLWlucHV0IHYtYmluZDpidXM9XCJidXNcIiB2LWJpbmQ6ZXhwZWN0ZWQ9XCJjb25qdWdhdGlvbnNbJ1BsdXJhbCddW2thc3VzXVwiIHYtYmluZDpzaG93PVwic2hvd1wiPjwvY2hlY2tlZC1pbnB1dD48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uY2VsbFwiPjxidXR0b24gdi1vbjpjbGljaz1cInNob3cgPSAhc2hvd1wiPnt7IChzaG93ID8gXCJIaWRlXCIgOiBcIkNoZWNrXCIpIH19PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxufSk7XHJcblxyXG52YXIgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgZWw6IFwiI2FwcFwiLFxyXG4gIGRhdGE6IHtcclxuICAgIHdvcmQ6IFwiXCIsXHJcbiAgICBjb25qdWdhdGlvbnM6IG51bGwsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyX2d1ZXNzOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIlwiLFxyXG4gICAgc2hvd19hbnN3ZXJzOiBmYWxzZSxcclxuICAgIHJldmVhbF90eXBlOiBmYWxzZSxcclxuICAgIHJldmVhbF9nZW5kZXI6IGZhbHNlLFxyXG4gICAgcmV2ZWFsX2dlbmRlcl9idXR0b25zOiB0cnVlLFxyXG4gICAgYnVzOiBuZXcgVnVlKClcclxuICB9LFxyXG5cclxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMubmV3V29yZCgpO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdlbmRlck5hbWU6IGZ1bmN0aW9uKGdlbmRlcikge1xyXG4gICAgICByZXR1cm4gKGdlbmRlciA9PSBHZW5kZXJzLkZlbWluaW4pID8gXCJGZW1pbmluXCIgOlxyXG4gICAgICAgICAgICAgIChnZW5kZXIgPT0gR2VuZGVycy5NYXNrdWxpbikgPyBcIk1hc2t1bGluXCI6XHJcbiAgICAgICAgICAgICAgXCJOZXV0cnVtXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrR2VuZGVyOiBmdW5jdGlvbihnZW5kZXIpIHtcclxuICAgICAgdGhpcy5nZW5kZXJfZ3Vlc3MgPSBnZW5kZXI7XHJcbiAgICAgIHRoaXMucmV2ZWFsX2dlbmRlciA9IHRydWU7XHJcbiAgICAgIHRoaXMucmV2ZWFsX2dlbmRlcl9idXR0b25zID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrOiBmdW5jdGlvbihrYXN1c0xpc3QgPSBudWxsKSB7XHJcbiAgICAgIGlmIChrYXN1c0xpc3QgPT0gbnVsbClcclxuICAgICAgICBrYXN1c0xpc3QgPSBPYmplY3QudmFsdWVzKENhc2VzKTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2tHZW5kZXIodGhpcy53b3JkLmdlbmRlcik7XHJcbiAgICAgIHRoaXMucmV2ZWFsX3R5cGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dfYW5zd2VycyA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBuZXdXb3JkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy53b3JkID0gRGljdGlvbmFyeVsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRGljdGlvbmFyeS5sZW5ndGgpIF07XHJcbiAgICAgIHRoaXMuY29uanVnYXRpb25zID0gdGhpcy53b3JkLmNvbmp1Z2F0aW9ucygpO1xyXG4gICAgICB0aGlzLnNob3dfYW5zd2VycyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJldmVhbF90eXBlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmV2ZWFsX2dlbmRlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJldmVhbF9nZW5kZXJfYnV0dG9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnVzLiRlbWl0KCdjbGVhcicpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9