# togglify-js
Javascript feature toggler

## Instal
```shell
npm install togglify-js
```

## Usage
```javascript
import Togglify from 'togglify-js';

const featureName = 'poo feature';
const featuresRepository = [
  {
    name: 'poo feature',
    isEnabled: true
  }
];
const toggler = new Togglify(featuresRepository);

const isFeatureEnabled = toggler.isOn(featureName); // Tell if the feature 'poo feature' is enabled or not
```

## Tests
```shell
npm run test
```
