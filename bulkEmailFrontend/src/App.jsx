// App.js - Main application component setup with routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactManagement from './components/ContactManagement';
import EmailCampaign from './components/EmailCampaign';
import SendLogs from './components/SendLogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contacts" component={ContactManagement} />
          <Route path="/compose" component={EmailCampaign} />
          <Route path="/logs" component={SendLogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
