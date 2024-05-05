// App.js - Main application component setup with routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EmailAnalytics from './components/EmailAnalytics';
import ABTestingDashboard from './components/ABTestingDashboard';
import RealTimeAnalytics from './components/RealTimeAnalytics';
import ABTestCreator from './components/ABTestCreator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/EmailAnalytics" component={EmailAnalytics} />
        <Route path="/RealTimeAalytocs" component={RealTimeAnalytics} />
        <Route path="/ABTestingDashboard" component={ABTestingDashboard} />
        <Route path="/ABTestCreator" component={ABTestCreator} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
