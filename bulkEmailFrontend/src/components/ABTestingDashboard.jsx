import { useState, useEffect } from 'react';
import axios from 'axios';

const ABTestingDashboard = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get('/ab-tests')
      .then(response => setTests(response.data))
      .catch(error => console.error('Error fetching tests', error));
  }, []);

  return (
    <div>
      {tests.map(test => (
        <div key={test._id}>
          <h3>Campaign: {test.campaignId}</h3>
          {test.variations.map(variation => (
            <p key={variation._id}>Subject: {variation.subject} - Opens: {test.results.find(r => r.variationId === variation._id).opens}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ABTestingDashboard;
