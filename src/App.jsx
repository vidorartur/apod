import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nasaImage, setNasaImage] = useState(undefined);

  const fetchNASA = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=6vxLNvZVGzUTnl4qhSFuAjaHeT7S66gkr0fzZfbb';
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    setNasaImage(response);
  };

  useEffect(() => { fetchNASA(); }, []);

  return (
    <div className="App">
      <header>
        {typeof nasaImage !== 'undefined'
          ? (
            <div className="container">
              <h1 className="title">{nasaImage.title}</h1>
              <h2 className="copyright">{nasaImage.copyright}</h2>
              <h3 className="date">{nasaImage.date}</h3>
              <p className="text">{nasaImage.explanation}</p>
              <img src={nasaImage.hdurl} alt="of the day" />
            </div>
          )
          : <div className="loading">Loading...</div>}
      </header>
    </div>
  );
}

export default App;
