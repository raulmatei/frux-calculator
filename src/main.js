import frux from 'frux';
import React from 'react';
import operations from './modules/operations';
import Calculator from './components/calculator';

export const { actions, getters } = frux.initialize({
  options: { debug: true },
  operations
});

export function initialize(options) { 
  frux.mount(<Calculator/>);
};
