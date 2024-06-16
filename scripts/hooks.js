export async function registerHooks() {
  Hooks.once("ready", () => {
    Hooks.on("ready", () => {
      game?.system?.model?.Actor?.character?.attributes?.magic?.updateSource({
        "exp": 0,
        "exp_max": 0,
        "label": "BITD.SkillsMagic",
        "skills": {
           'assense': {
              "label": "BITD.SkillsAssense",
              "value": 0,
              "max": 4
           },
           'emergence': {
              "label": "BITD.SkillsEmergence",
              "value": 0,
              "max": 4
           }
        }
      })
    });

    Hooks.on('preCreateActor', (actor, data, options, user) => {
      if (actor.type === 'character') actor.updateSource({'system.experience_max': 9})
    });

    // Hooks.on('preCreateActor', (actor, data, options, user) => {
    //   if (actor.type === 'character') {
    //      actor.updateSource({
    //         'system.attributes.magic': {
    //            "exp": 0,
    //            "exp_max": 0,
    //            "label": "BITD.SkillsMagic",
    //            "skills": {
    //               'assense': {
    //                  "label": "BITD.SkillsAssense",
    //                  "value": 0,
    //                  "max": 4
    //               },
    //               'emergence': {
    //                  "label": "BITD.SkillsEmergence",
    //                  "value": 0,
    //                  "max": 4
    //               }
    //            }
    //         }
    //      });
    //   }
    // });

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