exports.config = {
    user:'username',
    key: 'password',
    
      updateJob: false,
      specs: [
          './test/specs/android/multiple/**/*.ts'
      ],
      exclude: [],
      capabilities: [{
        project: "Parallel Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test',
        device: 'Google Pixel 3',
        os_version: "9.0",
        app: 'bs://8fca653da42aeecc6bea3d0ea71db2765231035c',
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