import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './components/Counter'
import reducers from './reducers';

class App extends React.Component{
  render() {

    const store= createStore(reducers);

    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
