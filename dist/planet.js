"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.Planet = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Water"] = 0] = "Water";
    ResourceType[ResourceType["Oxygen"] = 1] = "Oxygen";
    ResourceType[ResourceType["Minerals"] = 2] = "Minerals";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
class Planet {
    constructor(resourceType, hazards) {
        this.resourceType = resourceType;
        this.hazards = hazards;
    }
}
exports.Planet = Planet;
