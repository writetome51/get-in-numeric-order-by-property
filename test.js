"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getInNumericOrderByProperty_1 = require("./getInNumericOrderByProperty");
// @ts-ignore
var arrayPluck = require('array-pluck');
var players = [
    { team: 'mets', homeRuns: 15 },
    { team: 'yankees', homeRuns: 25 },
    { team: 'athletics', homeRuns: 5 },
    { team: 'braves', homeRuns: 11 },
    { team: 'padres', homeRuns: 1 },
    { team: 'giants', homeRuns: 55 },
    { team: 'angels', homeRuns: 20 },
    { team: 'rockies', homeRuns: 31 },
    { team: 'royals', homeRuns: 2 },
    { team: 'rangers', homeRuns: 10 },
    { team: 'marlins', homeRuns: 5 },
    { team: 'mariners', homeRuns: 14 },
    { team: 'red sox', homeRuns: 70 },
    { team: 'white sox', homeRuns: 15 }
];
var sortedPlayers = getInNumericOrderByProperty_1.getInNumericOrderByProperty('homeRuns', players);
console.log(sortedPlayers);
