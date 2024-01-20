// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import FunFacts from './components/funFacts/FunFacts';
import WeeklyQuiz from './components/weeklyQuiz/WeeklyQuiz';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Nav from './components/common/Nav';

const App = () => {
  return (
    <Router>
      <div> 
        <Nav />
        <div><h1 className="text-3xl font-bold underline">
      Hello world! </h1></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/funFacts" element={<FunFacts />} />
          <Route path="/weeklyQuiz" element={<WeeklyQuiz />} />
          <Route path="/didYouKnowTV" element={<DidYouKnowTV />} />
          <Route path="/righteousReading" element={<RighteousReading />} />
        </Routes>
      </div> 
      
     
    </Router>
  );
}


export default App;
