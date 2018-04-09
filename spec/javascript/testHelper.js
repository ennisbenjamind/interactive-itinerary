import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import 'whatwg-fetch'
import 'jasmine-ajax';

Object.assign(global, {
  jasmineEnzyme,
  mount,
  React,
  shallow,
});

beforeEach(() => {
  jasmineEnzyme();
});

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

const google = {
  maps: {
    places: {
      AutocompleteService: () => {},
      PlacesServiceStatus: {
        OK: 'OK',
      },
    },
  },
};
global.google = google;
global.window.google = google;

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../../app/javascript', true, /^((?!application).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
