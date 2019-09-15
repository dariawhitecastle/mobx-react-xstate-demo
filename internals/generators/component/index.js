/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    // Generate export file
    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      // Generate ComponentName.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: './component/Component.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.doc.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.doc.js',
        templateFile: './component/Component.doc.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.test.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.test.js',
        templateFile: './component/Component.test.js.hbs',
        abortOnFail: true,
      },
      // Generate Component.stories.js
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/stories/{{properCase name}}.stories.js',
        templateFile: './component/Component.stories.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants i18n messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.messages.js',
        templateFile: './component/Component.messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.loadable.js',
        templateFile: './component/Component.loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'format',
      path: '/components/',
    });

    return actions;
  },
};
