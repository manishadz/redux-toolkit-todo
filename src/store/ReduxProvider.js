import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../reducer';

const store =createStore(reducer)
const ReduxProvider = ({children}) => {

  return <Provider store={store}>{children}
    
</Provider>;
};

export default ReduxProvider