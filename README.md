# TESTIFY Cypress.IO website testing

## Installation

1. Clone repo

2. Install node on host system

3. Install npm packages

```bash
npm install
```

4. Run tests in Cypress tool and set full startpage URL

```bash
npm run test --url=<URL>
```

## NPM Package (in progress)

### Project goal

Later on, this repository will be provided as a NPM-package to use it without the need to clone the repository. To use it, run the install script.

**NPM Package is not available yet!**

```bash
npm install -g ncatestify-cypressio
```

After that, you'll be able to use this package directly from your terminal-session.

```bash
ncatestify startUrl=<URL>
```

### ./cypress/scripts/run.js

This file is used to call the cypress-process and (later) automatically start the test-runs.

### Manually bind the run.js to your local environment

To use this, either install the package via NPM (in this case, it will automatically done with the install-script) or link it manually with following command.

```bash
npm run install
```

This will run "npm link" and create a symlink for "ncatestify".

After that, you'll be able to start the script with:

```bash
ncatestify startUrl=https://testify.team/de
```

## German YouTube Tutorial series

https://www.youtube.com/playlist?list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs

### Team behind

https://testify.team/de
