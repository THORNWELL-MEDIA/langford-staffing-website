"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var careers_1 = require("./lib/data/careers");
(0, careers_1.fetchRolesFromApi)()
    .then(function (res) { return console.log('Roles length:', res.length); })
    .catch(console.error);
