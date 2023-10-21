exports.config = {
  user:'username',
  key: 'password',
  
    updateJob: false,
    specs: [
      './test/specs/IOS/**/*.ts'
    ],
    exclude: [],
    capabilities: [{
      project: "First Webdriverio iOS Project",
      build: 'Webdriverio iOS',
      name: 'second_test',
      device: 'iPhone 15 Pro Max',
      os_version: "17",
      app: 'bs://8c5999731a9106c6a67bf2d35fce51505b073bfb',
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