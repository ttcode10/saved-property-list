import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import StyleGuide from './pages/StyleGuide/StyleGuide';
import { Header } from './components';

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/styleguide" exact component={StyleGuide} />
            <Route path="/*" component={Home} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
