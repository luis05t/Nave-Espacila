import { Planet, ResourceType } from './planet';

function collectResources<T>(planet: Planet, resourceType: ResourceType): T {
  console.log(`Recolectando recursos del planeta...`);
  let resources: T;

  switch (resourceType) {
    case ResourceType.Water:
      resources = 'Agua' as unknown as T; 
      break;
    case ResourceType.Oxygen:
      resources = 100 as unknown as T; 
      break;
    case ResourceType.Minerals:
      resources = true as unknown as T; 
      break;
    default:
      throw new Error('Tipo de recurso no válido');
  }

  return resources;
}

export default collectResources;
