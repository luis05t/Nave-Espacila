import Event from './event';
function handleEvent(event: Event) {
  console.log(`Evento: ${event.name}, Impacto: ${event.impact}`);
}

export default handleEvent;
