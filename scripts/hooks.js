export async function registerHooks() {
  Hooks.once("ready", () => {
    Hooks.on('preCreateActor', (actor, data, options, user) => {
      if (actor.type === 'character') actor.updateSource({'system.experience_max': 9})
    });

    Hooks.on('preCreateActor', (actor, data, options, user) => {
      if (actor.type === 'character') {
        actor.updateSource({
            'system.attributes.resolve.skills.assense': {
               "label": "BITD.SkillsAssense",
               "value": 0,
               "max": 4
           }
         });
      }
    });

    Hooks.on('renderActor', (app, [html], data) => {
      const actor                  = app.document;
      var   awakened               = actor.system.awakened
      const magicAttributeLocation = html.querySelector(`character-${actor.id}-attributes-magic`);

      if (!awakened) {
        if (magicAttributeLocation) {
          magicAttributeLocation.style.display = "none";
        }
      }
    });

  })

  return true;
}