"use strict";
// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planet_1 = require("./planet");
const event_1 = __importDefault(require("./event"));
const exploration_1 = __importDefault(require("./exploration"));
const resourceCollection_1 = __importDefault(require("./resourceCollection"));
const eventHandling_1 = __importDefault(require("./eventHandling"));
const userInterface_1 = require("./userInterface");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const spaceship = { health: 100, cargoCapacity: 200, speed: 80 };
        const currentPlanet = new planet_1.Planet(planet_1.ResourceType.Water, ['Storms', 'Floods']);
        const randomEvent = new event_1.default('Meteor Shower', 'Damage to hull');
        (0, exploration_1.default)('east');
        const collectedResources = (0, resourceCollection_1.default)(currentPlanet, planet_1.ResourceType.Water);
        (0, userInterface_1.displayMessage)(`Recursos recolectados: ${collectedResources}`);
        (0, eventHandling_1.default)(randomEvent);
        const userInput = yield (0, userInterface_1.getUserInput)();
        (0, userInterface_1.displayMessage)(`Usuario ingresó: ${userInput}`);
    });
}
main();
