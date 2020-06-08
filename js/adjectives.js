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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/adjectives.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/adjectives.js":
/*!******************************!*\
  !*** ./src/js/adjectives.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


var adjective;
var declensions;
var type;

const CasePrefix = {
  [Cases.Nominativ]: "nom",
  [Cases.Akkusativ]: "akk",
  [Cases.Dativ]: "dat",
  [Cases.Genitiv]: "gen"
};
const GenderPostfix = {
  [Genders.Maskulin]: "mas",
  [Genders.Feminin]: "fem",
  [Genders.Neutrum]: "neu",
  [Genders.Plural]: "plu"
};

function checkAnswer(type, kasus, gender) {
  const inputId = CasePrefix[kasus] + "_" + GenderPostfix[gender];
  const userInput = document.getElementById(inputId).value;
  const answer = declensions[type][kasus][gender];
  const answerField = document.getElementById(inputId + "_answer");

  answerField.innerText = answer;
  if (answer != userInput)
    answerField.classList.add("incorrect");
  else
    answerField.classList.remove("incorrect");
}

function clearConjugation(kasus, gender) {
  const inputId = CasePrefix[kasus] + "_" + GenderPostfix[gender];
  const answerField = document.getElementById(inputId + "_answer");
  document.getElementById(inputId).value = "";
  answerField.innerText = "";
  answerField.classList.remove("incorrect");
}

function check(kasusList) {
  for (const kasus of kasusList) {
    for (const gender of Object.values(Genders)) {
      checkAnswer(AdjektivDeclensionType[type], kasus, gender);
    }
  }
}

function randomAdjectiveDeclentionType() {
  const types = Object.keys(AdjektivDeclensionType);
  return types[Math.floor(Math.random() * types.length)];
}

function newWord() {
  adjective = randomAdjective();
  declensions = adjective.declensions();
  type = randomAdjectiveDeclentionType();
 
  document.getElementById("adjective").innerText = adjective.rootForm;
  document.getElementById("type").innerText = type;

  for (const kasus of Object.values(Cases)) {
    for (const gender of Object.values(Genders)) {
      clearConjugation(kasus, gender);
    }
  }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FkamVjdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFkamVjdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hZGplY3RpdmVzLmpzXCIpO1xuIiwiXHJcbnZhciBhZGplY3RpdmU7XHJcbnZhciBkZWNsZW5zaW9ucztcclxudmFyIHR5cGU7XHJcblxyXG5jb25zdCBDYXNlUHJlZml4ID0ge1xyXG4gIFtDYXNlcy5Ob21pbmF0aXZdOiBcIm5vbVwiLFxyXG4gIFtDYXNlcy5Ba2t1c2F0aXZdOiBcImFra1wiLFxyXG4gIFtDYXNlcy5EYXRpdl06IFwiZGF0XCIsXHJcbiAgW0Nhc2VzLkdlbml0aXZdOiBcImdlblwiXHJcbn07XHJcbmNvbnN0IEdlbmRlclBvc3RmaXggPSB7XHJcbiAgW0dlbmRlcnMuTWFza3VsaW5dOiBcIm1hc1wiLFxyXG4gIFtHZW5kZXJzLkZlbWluaW5dOiBcImZlbVwiLFxyXG4gIFtHZW5kZXJzLk5ldXRydW1dOiBcIm5ldVwiLFxyXG4gIFtHZW5kZXJzLlBsdXJhbF06IFwicGx1XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQW5zd2VyKHR5cGUsIGthc3VzLCBnZW5kZXIpIHtcclxuICBjb25zdCBpbnB1dElkID0gQ2FzZVByZWZpeFtrYXN1c10gKyBcIl9cIiArIEdlbmRlclBvc3RmaXhbZ2VuZGVyXTtcclxuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKS52YWx1ZTtcclxuICBjb25zdCBhbnN3ZXIgPSBkZWNsZW5zaW9uc1t0eXBlXVtrYXN1c11bZ2VuZGVyXTtcclxuICBjb25zdCBhbnN3ZXJGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQgKyBcIl9hbnN3ZXJcIik7XHJcblxyXG4gIGFuc3dlckZpZWxkLmlubmVyVGV4dCA9IGFuc3dlcjtcclxuICBpZiAoYW5zd2VyICE9IHVzZXJJbnB1dClcclxuICAgIGFuc3dlckZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbmNvcnJlY3RcIik7XHJcbiAgZWxzZVxyXG4gICAgYW5zd2VyRmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb25qdWdhdGlvbihrYXN1cywgZ2VuZGVyKSB7XHJcbiAgY29uc3QgaW5wdXRJZCA9IENhc2VQcmVmaXhba2FzdXNdICsgXCJfXCIgKyBHZW5kZXJQb3N0Zml4W2dlbmRlcl07XHJcbiAgY29uc3QgYW5zd2VyRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkICsgXCJfYW5zd2VyXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpLnZhbHVlID0gXCJcIjtcclxuICBhbnN3ZXJGaWVsZC5pbm5lclRleHQgPSBcIlwiO1xyXG4gIGFuc3dlckZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmNvcnJlY3RcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrKGthc3VzTGlzdCkge1xyXG4gIGZvciAoY29uc3Qga2FzdXMgb2Yga2FzdXNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGdlbmRlciBvZiBPYmplY3QudmFsdWVzKEdlbmRlcnMpKSB7XHJcbiAgICAgIGNoZWNrQW5zd2VyKEFkamVrdGl2RGVjbGVuc2lvblR5cGVbdHlwZV0sIGthc3VzLCBnZW5kZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQWRqZWN0aXZlRGVjbGVudGlvblR5cGUoKSB7XHJcbiAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhBZGpla3RpdkRlY2xlbnNpb25UeXBlKTtcclxuICByZXR1cm4gdHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHlwZXMubGVuZ3RoKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1dvcmQoKSB7XHJcbiAgYWRqZWN0aXZlID0gcmFuZG9tQWRqZWN0aXZlKCk7XHJcbiAgZGVjbGVuc2lvbnMgPSBhZGplY3RpdmUuZGVjbGVuc2lvbnMoKTtcclxuICB0eXBlID0gcmFuZG9tQWRqZWN0aXZlRGVjbGVudGlvblR5cGUoKTtcclxuIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRqZWN0aXZlXCIpLmlubmVyVGV4dCA9IGFkamVjdGl2ZS5yb290Rm9ybTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVcIikuaW5uZXJUZXh0ID0gdHlwZTtcclxuXHJcbiAgZm9yIChjb25zdCBrYXN1cyBvZiBPYmplY3QudmFsdWVzKENhc2VzKSkge1xyXG4gICAgZm9yIChjb25zdCBnZW5kZXIgb2YgT2JqZWN0LnZhbHVlcyhHZW5kZXJzKSkge1xyXG4gICAgICBjbGVhckNvbmp1Z2F0aW9uKGthc3VzLCBnZW5kZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==