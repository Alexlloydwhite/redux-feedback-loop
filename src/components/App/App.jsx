import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Home from '../Home/Home';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
      </Router>
    </div>
  );
}

export default App;
