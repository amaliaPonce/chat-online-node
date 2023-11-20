/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/index.html":
/*!***************************!*\
  !*** ./client/index.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Chat en tiempo real</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap\\\">\\n    <style>\\n      body {\\n          margin: 0;\\n          font-family: 'Montserrat', sans-serif;\\n          background-color: #f5f5f5;\\n          color: #333;\\n          height: 100vh;\\n          display: flex;\\n          flex-direction: column;\\n          align-items: center;\\n          justify-content: center;\\n      }\\n  \\n      header {\\n          background-color: #2c3e50;\\n          color: #ecf0f1;\\n          padding: 20px;\\n          text-align: center;\\n          font-size: 24px;\\n      }\\n  \\n      main {\\n          flex: 1;\\n          display: flex;\\n          justify-content: center;\\n          align-items: center;\\n          width: 100%;\\n      }\\n  \\n      #username-form,\\n      #chat {\\n          background-color: #fff;\\n          border-radius: 10px;\\n          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n          width: 100%;\\n          max-width: 800px;\\n      }\\n  \\n      #username-form {\\n          text-align: center;\\n          padding: 20px;\\n      }\\n  \\n      #chat {\\n          display: none;\\n          height: 100vh;\\n          overflow: hidden;\\n          border: 2px solid #ddd;\\n      }\\n  \\n      #messages {\\n          list-style: none;\\n          padding: 0;\\n          margin: 0;\\n          overflow-y: auto;\\n          height: 70%;\\n          padding: 20px;\\n          box-sizing: border-box;\\n      }\\n  \\n      li {\\n          background-color: #ecf0f1;\\n          border-radius: 12px;\\n          padding: 15px;\\n          margin: 15px 0;\\n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n      }\\n  \\n      #form {\\n          height: 30%;\\n          display: flex;\\n          flex-direction: column;\\n          justify-content: flex-end;\\n          padding: 20px;\\n          box-sizing: border-box;\\n      }\\n  \\n      #form-username input,\\n      #form input {\\n          padding: 8px;\\n          margin: 6px;\\n          border: 1px solid #ccc;\\n          border-radius: 5px;\\n          font-size: 16px;\\n          flex: 1;\\n      }\\n  \\n      #form-username button,\\n      #form button {\\n          background-color: #3498db;\\n          color: #fff;\\n          cursor: pointer;\\n          padding: 12px;\\n          border: none;\\n          border-radius: 5px;\\n          font-size: 16px;\\n          margin-top: 10px;\\n      }\\n  </style>\\n  \\n  \\n  \\n</head>\\n<body>\\n<section id=\\\"username-form\\\">\\n    <h1>Ingresa tu nombre de usuario</h1>\\n    <form id=\\\"form-username\\\">\\n        <input\\n                type=\\\"text\\\"\\n                name=\\\"username\\\"\\n                id=\\\"input-username\\\"\\n                placeholder=\\\"Nombre de usuario\\\"\\n                autocomplete=\\\"off\\\"\\n        />\\n        <button type=\\\"submit\\\">Entrar al chat</button>\\n    </form>\\n</section>\\n\\n<section id=\\\"chat\\\">\\n    <ul id=\\\"messages\\\"></ul>\\n    <form id=\\\"form\\\">\\n        <input\\n                type=\\\"text\\\"\\n                name=\\\"message\\\"\\n                id=\\\"input\\\"\\n                placeholder=\\\"Escribe un mensaje\\\"\\n                autocomplete=\\\"off\\\"\\n        />\\n        <button type=\\\"submit\\\">Enviar</button>\\n    </form>\\n</section>\\n    <\" + \"script type=\\\"module\\\">\\n      import { io } from \\\"https://cdn.socket.io/4.3.2/socket.io.esm.min.js\\\";\\n    \\n      const socket = io();\\n      const usernameForm = document.getElementById(\\\"username-form\\\");\\n      const chatSection = document.getElementById(\\\"chat\\\");\\n      const formUsername = document.getElementById(\\\"form-username\\\");\\n      const inputUsername = document.getElementById(\\\"input-username\\\");\\n      const form = document.getElementById(\\\"form\\\");\\n      const input = document.getElementById(\\\"input\\\");\\n      const messages = document.getElementById('messages');\\n    \\n      socket.on('chat message', (msg) => {\\n        const item = `<li>${msg.username}: ${msg.content}</li>`;\\n        messages.insertAdjacentHTML('beforeend', item);\\n      });\\n    \\n      formUsername.addEventListener(\\\"submit\\\", function (e) {\\n        e.preventDefault();\\n        const username = inputUsername.value.trim();\\n    \\n        if (username) {\\n          usernameForm.style.display = \\\"none\\\";\\n          chatSection.style.display = \\\"block\\\";\\n        }\\n      });\\n    \\n      socket.on('chat history', (chatHistory) => {\\n        // Agrega los mensajes al historial de chat en el cliente\\n        chatHistory.forEach((msg) => {\\n          const item = `<li>${msg.username}: ${msg.content}</li>`;\\n          messages.insertAdjacentHTML('beforeend', item);\\n        });\\n      });\\n    \\n      form.addEventListener(\\\"submit\\\", function (e) {\\n        e.preventDefault();\\n        const content = input.value.trim();\\n    \\n        if (content) {\\n          const msg = {\\n            username: inputUsername.value.trim(),\\n            content: content\\n          };\\n    \\n          socket.emit(\\\"chat message\\\", msg);\\n          input.value = \\\"\\\";\\n        }\\n      });\\n    <\" + \"/script>\\n    \\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://chatbot-node/./client/index.html?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/index.html"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;