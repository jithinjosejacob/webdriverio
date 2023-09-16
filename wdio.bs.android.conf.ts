exports.config = {
    user:'surajkumar_L5mEf2',
    key: 'Tpk2Lre7wthfofbkwr7B',
  
    updateJob: false,
    specs: [
        './test/specs/android/**/*.ts'
    ],
    exclude: [],
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: 'bs://fcc382926f897eefa0a2fe192f098e62d9aeb687',
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