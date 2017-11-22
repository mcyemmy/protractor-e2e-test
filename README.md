# protractor-e2e-test

## Running end-to-end test through Protractor
- Protractor is a scenario testing framework for performing end-to-end tests that simulates user interaction with the web app in the browser. It runs on Selenium webdriver.
- The Webdriver-manager will be installed as part of protractor installation.
- Verify that you have Java JDK installed on your machine by typing `java -version` in terminal. If negative, then make sure to install Java JDK from oracle website. Selenium web driver requires Java to run.
- Note that the setup process will differ if you follow a different direction to install protractor globally instead of doing it locally through package.json as listed in the steps below.

## Setup and run a sample Test
- If you haven't, open terminal and cd to your project root. You will run all commands in your project root but may need to open multiple terminal instances.
- Run `npm i` to install the project dependencies. This will also install protractor if you have updated your project's package.json to the version that contains protractor as devDependency.
- Run `npm start` to start your web server. Before you can run your tests, your app will need to be running on a web server. Otherwise, Protractor will have no way to execute the tests against your app.
- Run `npm run testserver` to update and start webdriver-manager. This is a 2-in-1 command. Updating webdriver-manager is always required before sarting it.
- Run `npm run e2etest` to perform another 2-in-1 command. This will transpile ts to js into this directory src/.tmp/js, followed by protractor end-to-end test. 
- This should fire up Chrome browser and give some successful test output in the terminal. This confirms you have successfully performed a demo e2e test on the Fruit app seed project and now ready to begin testing your own apps.
- Protractor test is currently configured to run in both Chrome but that can be updated in your [project-root]/protractor.conf.ts

## Configuring your test environment
- For each of your test, verify that the settings in [project-root]/protractor.conf.ts is pointing to the path for your test files. protractor.conf.ts is in the project's root directory.
- Learn how to write protractor locator tests and page object tests. Some of these you can see in the test files for the seed project(ex. fruit-list.spec.ts). And documentations online.
- Begin running your own test by following the steps above.
