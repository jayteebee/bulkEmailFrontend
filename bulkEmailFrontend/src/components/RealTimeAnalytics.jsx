// RealTimeAnalytics.jsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const RealTimeAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const socket = io.connect('/analytics');

    socket.on('update', (newData) => {
      setAnalytics(prevAnalytics => [...prevAnalytics, newData]);
    });

    return () => {
      socket.disconnect();
    };
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
