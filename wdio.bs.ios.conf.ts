exports.config = {
    user:'surajkumar_L5mEf2',
    key: 'Tpk2Lre7wthfofbkwr7B',
  
    updateJob: false,
    specs: [
      './test/specs/IOS/**/*.ts'
    ],
    exclude: [],
    capabilities: [{
      project: "First Webdriverio iOS Project",
      build: 'Webdriverio iOS',
      name: 'first_test',
      device: 'iPhone 11 Pro Max',
      os_version: "13.1",
      app: 'bs://b1072cabfb14619cacdd51e31b0e59baba8a4844',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };