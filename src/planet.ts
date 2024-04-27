enum ResourceType {
    Water,
    Oxygen,
    Minerals,
  }
  
  
  class Planet {
    constructor(public resourceType: ResourceType, public hazards: string[]) {}
  }
  
  export { Planet, ResourceType };