import React, { FunctionComponent, ReactElement } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './store';

const Container = styled.div``;

const App: FunctionComponent = (): ReactElement => {
  return (
    <Provider store={store}>
      <Container>hello world</Container>
    </Provider>
  );
};

export default App;
