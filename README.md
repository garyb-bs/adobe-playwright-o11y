<p float="left">
  <img src="https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780" width="500" height="110" title="BrowserStack">
  <img src="https://i.imgur.com/I3vu3uh.png" width="100" height="100" title="Slash">
  <img src="https://surreyschoolsone.ca/cms-data/gallery/blog/resources/adobe-express/adobeexpress.jpg" width="200" height="150" title="AdobeExpress">
</p>

# BrowserStack / Adobe Express - Automate + CircleCI + Test Observability + Test Management
This repo contains a sample project for running [Playwright](https://playwright.dev/docs/intro) tests on BrowserStack using the browserstack-node-sdk. It is connected to a CircleCI pipeline, and links to Test Observability and Test Management.

## Setup

* Clone the repo `git clone https://github.com/garyb-bs/adobe-playwright-o11y` and run `cd adobe-playwright-o11y`.
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as environment variables with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) or update the same in `browserstack.yml` file.
* Run `npm i` to install the dependencies.

## Running your tests

- To run the sample tests in parallel across the platforms specified in the `browserstack.yml`, run:

```sh
npm run sample-test
```

- To run the sample local tests in parallel across the platforms specified in the `browserstack.yml`, run:

```sh
npm run sample-local-test
```

## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* You can view a more detailed breakdown of the tests using [Test Observability](https://observability.browserstack.com)
* You can keep track of your tests and the history of the runs using [Test Management](https://test-management.browserstack.com)
