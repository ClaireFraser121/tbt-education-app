import { useState } from 'react' // might need to change to just react
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import FunFacts from './components/funFacts/FunFacts';
import WeeklyQuiz from './components/weekQuiz/WeeklyQuiz';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
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
          <Route path="/funFacts" component={FunFacts} />
          <Route path="/weeklyQuiz" component={WeeklyQuiz} />
          <Route path="/didYouKnowTV" component={DidYouKnowTV} />
          <Route path="/righteousReading" component={RighteousReading} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
