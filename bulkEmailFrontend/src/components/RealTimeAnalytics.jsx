import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function RealTimeAnalytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const socket = io('/analytics');
    socket.on('update', (data) => {
      setAnalytics(data);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {analytics.map((analytic, index) => (
        <div key={index}>
          <h3>{analytic.subject}</h3>
          <p>Opens: {analytic.opens}</p>
          <p>Clicks: {analytic.clicks}</p>
          <p>Bounces: {analytic.bounces}</p>
        </div>
      ))}
    </div>
  );
}

export default RealTimeAnalytics;