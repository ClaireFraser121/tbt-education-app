import { useState } from 'react' // might need to change to just react
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import DidYouKnow from './components/didYouKnow/DidYouKnow';
import WeeklyQuiz from './components/weeklyQuiz/WeeklyQuiz';
import YouTube from './components/youTube/YouTube';
import AmazonBook from './components/amazonBook/AmazonBook';
import Nav from './components/common/Nav';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/didYouKnow" component={DidYouKnow} />
          <Route path="/weeklyQuiz" component={WeeklyQuiz} />
          <Route path="/youTube" component={YouTube} />
          <Route path="/amazonBook" component={AmazonBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
