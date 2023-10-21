exports.config = {
  user:'username',
  key: 'password',
  server: "hub-cloud.browserstack.com",
  updateJob: false,
  specs: [
    './test/specs/IOS/**/*.ts'
  ],
  exclude: [],
  commonCapabilities: {
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS Parallel',
    name: 'parallel_test',
    app: 'bs://8c5999731a9106c6a67bf2d35fce51505b073bfb',
    'browserstack.debug': true
  },
  capabilities: [
    {
      "device": "iPhone 15 Pro Max",
      "os_version": "17"
    },
    {
      "device": "iPhone 15 Pro",
      "os_version": "17"
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