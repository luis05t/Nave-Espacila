"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planet_1 = require("./planet");
function collectResources(planet, resourceType) {
    console.log(`Recolectando recursos del planeta...`);
    let resources;
    switch (resourceType) {
        case planet_1.ResourceType.Water:
            resources = 'Agua';
            break;
        case planet_1.ResourceType.Oxygen:
            resources = 100;
            break;
        case planet_1.ResourceType.Minerals:
            resources = true;
            break;
        default:
            throw new Error('Tipo de recurso no válido');
    }
    return resources;
}
exports.default = collectResources;
