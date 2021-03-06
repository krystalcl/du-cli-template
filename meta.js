const path = require('path')
const fs = require('fs')

// const {
//   sortDependencies,
//   installDependencies,
//   runLintFix,
//   printMessage,
// } = require('./utils')
// const pkg = require('./package.json')

// const templateVersion = pkg.version

// const { addTestAnswers } = require('./scenarios')

module.exports = {
//   metalsmith: {
//     // When running tests for the template, this adds answers for the selected scenario
//     before: addTestAnswers
//   },
//   helpers: {
//     if_or(v1, v2, options) {

//       if (v1 || v2) {
//         return options.fn(this)
//       }

//       return options.inverse(this)
//     },
//     template_version() {
//       return templateVersion
//     },
//   },
  
  prompts: {
    name: {
        "type": "string",
        "required": true,
        "message": "Project name",
        name: 'name',
      },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
      name: 'description',
    },
    author: {
      type: 'string',
      message: 'Author',
      name: 'author',
    },
    build: {
      type: 'list',
      message: 'Vue build',
      name: 'build',
      choices: [
        {
          name: 'Runtime + Compiler: recommended for most users',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      name: 'router',
      message: 'Install vue-router?',
    },
    lint: {
      type: 'confirm',
      name: 'lint',
      message: 'Use ESLint to lint your code?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      name: 'lintConfig',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    unit: {
      type: 'confirm',
      name: 'unit',
      message: 'Set up unit tests',
    },
    runner: {
      when: 'unit',
      type: 'list',
      name: 'runner',
      message: 'Pick a test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (configure it yourself)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
  },
//   complete: function(data, { chalk }) {
//     const green = chalk.green

//     sortDependencies(data, green)

//     const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

//     if (data.autoInstall) {
//       installDependencies(cwd, data.autoInstall, green)
//         .then(() => {
//           return runLintFix(cwd, data, green)
//         })
//         .then(() => {
//           printMessage(data, green)
//         })
//         .catch(e => {
//           console.log(chalk.red('Error:'), e)
//         })
//     } else {
//       printMessage(data, chalk)
//     }
//   },
}