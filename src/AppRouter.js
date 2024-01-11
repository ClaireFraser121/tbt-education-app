import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DidYouKnow from './pages/DidYouKnow';
import Quiz from './pages/WeeklyQuiz';
import Youtube from './pages/Youtube';
import AmazonBooks from './pages/AmazonBooks';

function AppRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/DidYouKnow" component={DidYouKnow} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Youtube" component={Youtube} />
          <Route path="/AmazonBooks" component={AmazonBooks} />
        </Switch>
      </BrowserRouter>
    );
  }
  