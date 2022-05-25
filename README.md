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
npx cypress open --env startUrl=https://testify.team/de
```

or

```bash
./node_modules/.bin/cypress open
```

5. Run tests from cli with screenshot and video output

```bash
npx cypress run
```

or

```bash
./node_modules/.bin/cypress run
```

## CLI

### ./cypress/scripts/run.js

This file is used to call the cypress-process and (later) automatically start the test-runs.

To use this, either install the package via NPM (in this case, it will automatically done with the install-script) or link it manually with following command.

```bash
npm link
```

After that, you'll be able to start the script with:

```bash
ncatestify startUrl=https://testify.team/de
```

## German YouTube Tutorial series

https://www.youtube.com/playlist?list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs

### Team behind

https://testify.team/de
