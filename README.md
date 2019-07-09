# LWC Experiments with Salesforce Mobile SDK

## Tools required

- Visual Source Code with Salesforce Extension Pack. More [info](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components/set-up-visual-studio-code).

- XCode and/or Android Studio.

- [forcehybrid](https://www.npmjs.com/package/forcehybrid).

## Setup

- Open current directory in Visual Source Code and run SFDX commands to authorize and org an deploy source to it. More [info](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component).

- Create hybrid remote application with forcehybrid and use `/apex/xxx` as the start page (where xxx is one of the `./force-app/main/default/pages/xxx.page`).

- For quick development, make sure to attach Chrome to your Android emulator (Dev tools -> more tools -> remote devices) or Safari to your iPhone simulator (Develop -> Simulator). Simply do `location.reload()` from the console everytime you have deployed changes from Visual Source Code.

## Notes

- Using LWC in a Visual Force page (more [info](https://www.paul-force.com/2019/04/24/use-lightning-web-components-in-visualforce-pages/)) to work around CSP limitation that prevents Cordova initialization.

- Getting bridge related objects in the Visual Force page and passing them to the LWC component. First tried importing 3rd party libraries directly into LWC component like [this](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.create_third_party_library) but the different libraries do not see each other so they would have to first be merged into a single `.js` file.

## Code of interest: 
- [Apex controller](https://github.com/wmathurin/lwc-experiments/blob/dev/force-app/main/default/classes/ContactListController.cls) inspects user agent to decide what cordova files should be included.
- [Lightning dependency app](https://github.com/wmathurin/lwc-experiments/tree/dev/force-app/main/default/aura/LightningDependencyApp).
- [Visual Force page](https://github.com/wmathurin/lwc-experiments/blob/dev/force-app/main/default/pages/ContactList.page) imports cordova and force.js, create mobilesdk object with pointers to all plugins and pass it to the root LWC.
- [Lightning Web Component for the list](https://github.com/wmathurin/lwc-experiments/blob/dev/force-app/main/default/lwc/contactList/contactList.js).
- [Lightning Web Component for each list item](https://github.com/wmathurin/lwc-experiments/blob/dev/force-app/main/default/lwc/contactListItem/contactListItem.js).

