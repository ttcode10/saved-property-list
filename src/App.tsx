import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import StyleGuide from './pages/StyleGuide/StyleGuide';

const App: React.FC<unknown> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/styleguide" exact component={StyleGuide} />
        <Route path="/*" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
