import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LanguageFilter() {
  const navigate = useNavigate();
  const [languageFilter, setLanguageFilter] = useState('');

  const handleLanguageFilter = (language) => {
    setLanguageFilter(language);
    navigate.push(`../Corpus_pages/corpus?language=${language}`);
  };

  return (
    <div className="corpus-buttons">
      <button onClick={() => handleLanguageFilter('English')}>
        English
      </button>
      <button onClick={() => handleLanguageFilter('French')}>
        French
      </button>
      <button onClick={() => handleLanguageFilter('Spanish')}>
        Spanish
      </button>
      {/* Add more buttons for other languages */}
    </div>
  );
}
export default LanguageFilter;