import frux from 'frux';
import * as main from './src/main';

const App = {
  actions: main.actions,
  initialize: main.initialize,
  serialize: frux.serialize
};

global.app = App;