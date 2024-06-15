export async function registerHooks() {
  Hooks.once("ready", () => {
    Hooks.on('preCreateActor', (actor, data, options, user) => {
      if (actor.type === 'character') actor.updateSource({'system.experience_max': 9})
    });

    return true;
  })
}