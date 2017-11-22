import {Config} from 'protractor';
import {SpecReporter} from 'jasmine-spec-reporter';
export let config: Config = {

  framework: 'jasmine',
  baseUrl: 'http://localhost:8080/',

  //   multiCapabilities: [{
  //     'browserName': 'firefox'
  //   }, {
  //     'browserName': 'chrome'
  //   }],

  capabilities: {
    browserName: 'chrome'
  },

  // specs: [ 
  //   'src/app/components/home/home.spec.js', 
  //   'src/app/components/list/list.spec.js',
  //   'src/app/components/detail/detail.spec.js'
  // ],

  // suites intead of spec lets you run one test spec at a time if you specify the suite name
  // For example, npm run e2etest will be npm run e2etest -- --suite=home as below
  suites: {
    home: 'src/app/components/home/home.spec.js',
    list: 'src/app/components/list/list.spec.js',
    detail: 'src/app/components/detail/detail.spec.js'
  },

  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;

    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(80000);
    jasmine.getEnv().addReporter(new SpecReporter());
  },
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  //seleniumServerJar: '../../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.7.1.jar',
  //chromeDriver: '../../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.33.exe',

  // You could set no globals to true to avoid
  // collisions on the global namespace.
  noGlobals: true
};
