exports.config = {
  user:'username',
  key: 'password',
  server: "hub-cloud.browserstack.com",
  updateJob: false,
  specs: [
    './test/specs/android/**/*.ts'
],
  exclude: [],
  commonCapabilities: {
    project: "Parallel Webdriverio Android Project",
    build: 'Webdriverio Android Parallel',
    name: 'parallel_test',
    app: 'bs://8fca653da42aeecc6bea3d0ea71db2765231035c',
    'browserstack.debug': true
  },
  capabilities: [
    {
      "device": "Google Pixel 3",
      "os_version": "9.0",
    },
    {
      "device": "Samsung Galaxy S10e",
      "os_version": "9.0"
    }
  ],
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

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps: any){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});