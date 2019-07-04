# LWC Experiments with Salesforce Mobile SDK

## Tools required

- Visual Source Code with Salesforce Extension Pack. More [info](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components/set-up-visual-studio-code)

- XCode and/or Android Studio

- [forcehybrid](https://www.npmjs.com/package/forcehybrid)

## Setup

- Create hybrid remote application with forcehybrid and use /apex/xxx as the start page (where xxx is one of the ./force-app/main/default/pages/xxx.page)

- Open current directory in Visual Source Code and run SFDX commands to authorize and org and deploy source to it. More [info](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component)

## Notes

- Using LWC in a Visual Force page (more [info](https://www.paul-force.com/2019/04/24/use-lightning-web-components-in-visualforce-pages/)) to work around CSP limitation that prevents Cordova initialization.

- Getting bridge related objects in Visual Force page and passing them  LWC component. First tried importing 3rd party libraries directly into LWC component like [this](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.create_third_party_library) but the different libraries do not see each other so they would have to first be merged into a single .js file.

- Worked around the [Lightning Locker's Proxy](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_proxy.htm) object when getting data from bridge by doing JSON.parse(JSON.stringify(x)).



