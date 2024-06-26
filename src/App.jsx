import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalLayout from './components/common/GlobalLayout';
import Home from './components/home/Home';
import About from './components/About/About';
import FunFacts from './components/funFacts/FunFacts';
import DidYouKnowTV from './components/didYouKnowTV/DidYouKnowTV';
import RighteousReading from './components/righteousReading/RighteousReading';
import Nav from './components/common/Nav';
import './index.css';
import './styles/tailwind.css';
import './styles/Nav.css';
import Footer from './components/common/Footer';
import GetQuiz from './components/weeklyQuiz/GetQuiz';

const App = () => {
  return (
    <Router >
      <GlobalLayout>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Nav />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/funFacts" element={<FunFacts />} />
              <Route path="/getQuiz" element={<GetQuiz />} />
              <Route path="/didYouKnowTV" element={<DidYouKnowTV />} />
              <Route path="/righteousReading" element={<RighteousReading />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </GlobalLayout>
    </Router>
  );
}

export default App;
