// import React, { useState, useRef, useEffect } from 'react';


// const RadioPlayer = () => {
// const [isPlaying, setIsPlaying] = useState(false);
// const [currentDateTime, setCurrentDateTime] = useState(new Date());
// const audioRef = useRef({
//     current: new Audio('http://redir.atmcdn.pl/sc/o2/Eurozet/live/antyradio.livx'),
//     radio1: new Audio('https://player.polskieradio.pl/anteny/jedynka'),
// }


// );


// useEffect(() => {

// audioRef.current = new Audio('http://redir.atmcdn.pl/sc/o2/Eurozet/live/antyradio.livx');
// audioRef.current.preload = 'none';



// const timer = setInterval(() => {



//     setCurrentDateTime(new Date());
// }, 1000);
// return () => clearInterval(timer);
// }, []);



// const changeChannel = (channel) => {
//        // Przełączenie na wybrany kanał
//        audioRef.current.current = audioRef.current[channel];
//        setCurrentChannel(channel);
   
//        // Jeśli było odtwarzane, odtwarza nowy kanał
//        if (isPlaying) {
//          audioRef.current.current.play();
//        }
//      };
// const togglePlayPause = () => {
// if (isPlaying) {
// audioRef.current.pause();
// } else {
// audioRef.current.play();
// }
// setIsPlaying(!isPlaying);
// };
// return (



// <div className="radio-player">
// <h2>Odtwarzacz Antyradio</h2>
// <button onClick={togglePlayPause}>
// {isPlaying ? 'Pauza' : 'Odtwórz'}
// </button>
// <div className="date-time">

// <p>Data: {currentDateTime.toLocaleDateString()}</p>
// <p>Godzina: {currentDateTime.toLocaleTimeString()}</p>
// <div className="channel-buttons">
//         <button onClick={() => changeChannel('current')}>Kanał 1</button>
//         <button onClick={() => changeChannel('radio1')}>Kanał 2</button>
//       </div>
// </div>
// </div>
// );
// };
// export default RadioPlayer;



import React, { useState, useRef, useEffect } from 'react';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentChannel, setCurrentChannel] = useState('current');
    







 const [lokalizacja, setLokalizacja] = useState(null); // Stan do przechowywania lokalizacji
  const [blad, setBlad] = useState(null); // Stan do przechowywania błędu



  const [volume, setVolume] = useState(1); // Ustawienie początkowej głośności na 100%















  const audioRef = useRef({
    current: new Audio('http://redir.atmcdn.pl/sc/o2/Eurozet/live/antyradio.livx'),
    radio1: new Audio('http://redir.atmcdn.pl/sc/o2/Eurozet/live/antyradio.livx'),

  });

  useEffect(() => {
    // Store a stable reference to the audioRef.current
    const audioInstances = audioRef.current;
  
    // Set preload for channels
    audioInstances.current.preload = 'none';
    audioInstances.radio1.preload = 'none';
  
    // Update date and time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
  
    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
      // Pause all channels
      Object.values(audioInstances).forEach((audio) => audio.pause());
    };
  }, []);

  const changeChannel = (channel) => {
    // Zatrzymanie bieżącego odtwarzania
    audioRef.current[currentChannel].pause();

    // Przełączenie na wybrany kanał
    setCurrentChannel(channel);

    // Jeśli było odtwarzanie, uruchom nowy kanał
    if (isPlaying) {
      audioRef.current[channel].play();
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current[currentChannel].pause();
    } else {
      audioRef.current[currentChannel].play();
    }
    setIsPlaying(!isPlaying);
  };



  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current[currentChannel].volume = newVolume; // Zmiana głośności
  };

  
//   const lokalizacja = (e) => {
// const wezlokalizacje = e.Geolocation.value;

// const lokalizacja = () => {
//     if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(pokazpozycje);
//     }
//     else{ 

//     "twoja lokalizacja jest niedostepna"
//     }

//    const pokazpozycje(position) {
//     const aktualnapozycja = position.coords.latitude && position.coords.longtitude

//    } 

//==========================
// const lokalizacja = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(pokazpozycje, pokazBlad);
//     } else {
//       alert("Twoja lokalizacja jest niedostępna");
//     }
//   };
  
//   const pokazpozycje = (position) => {
//     const aktualnapozycja = {
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     };
//     console.log("Szerokość geograficzna:", aktualnapozycja.latitude);
//     console.log("Długość geograficzna:", aktualnapozycja.longitude);
//   };
  
//   const pokazBlad = (error) => {
//     alert("Błąd: " + error.message);
//   };
const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pokazpozycje, pokazBlad);
    } else {
      alert("Twoja lokalizacja jest niedostępna");
    }
  };

  const pokazpozycje = (position) => {
    const aktualnapozycja = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    setLokalizacja(aktualnapozycja); // Ustawienie lokalizacji w stanie
    console.log("Szerokość geograficzna:", aktualnapozycja.latitude);
    console.log("Długość geograficzna:", aktualnapozycja.longitude);
  };

  const pokazBlad = (error) => {
    setBlad(error.message); // Ustawienie błędu
    alert("Błąd: " + error.message);
  };

  return (
    
    <div className="radio-player">
      <h2>Odtwarzacz: {currentChannel === 'current' ? 'Antyradio' : 'Jedynka'}</h2>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pauza' : 'Odtwórz'}
      </button>
      <div className="channel-buttons">
        <button onClick={() => changeChannel('current')}>Kanał 1</button>
        <button onClick={() => changeChannel('radio1')}>Kanał 2</button>
        <label htmlFor="volume">Głośność:</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="location">
        <button onClick={getLocation}>Pobierz lokalizację</button>
        {lokalizacja && (
          <div>
            <p>Szerokość geograficzna: {lokalizacja.latitude}</p>
            <p>Długość geograficzna: {lokalizacja.longitude}</p>
          </div>
        )}
        {blad && <p>Błąd: {blad}</p>}
      </div>
      <div className="date-time">
        <p>Data: {currentDateTime.toLocaleDateString()}</p>
        <p>Godzina: {currentDateTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default RadioPlayer;
