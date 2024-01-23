// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalLayout from './components/common/GlobalLayout';
import SectionContainer from './components/common/SectionContainer';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import FunFacts from './components/funFacts/FunFacts';
import WeeklyQuiz from './components/weeklyQuiz/WeeklyQuiz';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Nav from './components/common/Nav';
import './index.css';
import './styles/tailwind.css';
import './styles/SectionContainer.css';
import './styles/Nav.css';

const App = () => {
  return (
    <Router>
      <GlobalLayout>
        <SectionContainer>
          <div>
            <Nav />
            <Routes>
              <Route path="/container" element={<SectionContainer />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/funFacts" element={<FunFacts />} />
              <Route path="/weeklyQuiz" element={<WeeklyQuiz />} />
              <Route path="/didYouKnowTV" element={<DidYouKnowTV />} />
              <Route path="/righteousReading" element={<RighteousReading />} />
            </Routes>
          </div>
        </SectionContainer>
      </GlobalLayout>
    </Router>
  );
}

export default App;
