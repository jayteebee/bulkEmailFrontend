import { useState } from 'react';
import axios from 'axios';

const ABTestCreator = () => {
  const [campaignId, setCampaignId] = useState('');
  const [variations, setVariations] = useState([{ content: '' }, { content: '' }]);

  const handleSubmit = () => {
    axios.post('/ab-tests', { campaignId, variations })
      .then(response => alert('A/B Test created!'))
      .catch(error => alert('Error creating A/B Test'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={campaignId} onChange={e => setCampaignId(e.target.value)} />
      {variations.map((variation, index) => (
        <textarea key={index} value={variation.content} onChange={e => {
          const newVariations = [...variations];
          newVariations[index].content = e.target.value;
          setVariations(newVariations);
        }} />
      ))}
      <button type="submit">Create A/B Test</button>
    </form>
  );
};

export default ABTestCreator;