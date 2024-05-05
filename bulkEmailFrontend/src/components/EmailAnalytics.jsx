import { useEffect, useState } from 'react';
import axios from 'axios';

function EmailAnalytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios.get('/api/analytics')
      .then(response => {
        setAnalytics(response.data);
      })
      .catch(error => {
        console.error('Error fetching analytics', error);
      });
  }, []);

  return (
    <div>
      {analytics.map(analytic => (
        <div key={analytic._id}>
          <h3>{analytic.subject}</h3>
          <p>Opens: {analytic.opens}</p>
          <p>Clicks: {analytic.clicks}</p>
          <p>Bounces: {analytic.bounces}</p>
        </div>
      ))}
    </div>
  );
}

export default EmailAnalytics;
