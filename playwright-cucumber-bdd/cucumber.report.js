const reporter = require('cucumber-html-reporter');

const options = {
  jsonFile: '/cucumber-html-reporter.json',
  launchReport: true,
  noInlineScreenshots: false,
  output: 'playwright/reports/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'playwright/reports/screenshots/',
  storeScreenshots: true,
  theme: 'bootstrap',
};

reporter.generate(options);

