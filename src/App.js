import React from 'react'; 
import RadioPlayer from './RadioPlayer';
import './App.css';

// const CookieNotification = () => {
//   const [isVisible, setIsVisible] = React.useState(true);

//   React.useEffect(() => {
//     const cookie = document.cookie.split(';').find(c => c.trim().startsWith('simplecookienotification_v01=1'));
//     if (cookie) {
//       setIsVisible(false);
//     }
//   }, []);

//   const createCookie = (name, value, days) => {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = `; expires=${date.toGMTString()}`;
//     document.cookie = `${name}=${value}${expires}; path=/`;
//     setIsVisible(false);
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       id="simplecookienotification_v01"
//       style={{
//         display: 'block',
//         zIndex: 99999,
//         minHeight: '35px',
//         width: '300px',
//         position: 'fixed',
//         background: 'rgb(232, 245, 233)',
//         border: '1px solid rgb(76, 175, 80)',
//         textAlign: 'center',
//         right: '10px',
//         color: 'rgb(119, 119, 119)',
//         top: '10px',
//         boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 4px 1px',
//       }}
//     >
//       <div style={{ padding: '10px', marginLeft: '15px', marginRight: '15px', fontSize: '14px', fontWeight: 'normal' }}>
//         <span>Ta strona używa plików cookies.</span>
//         <br />
//         <a
//           href="http://jakwylaczyccookie.pl/polityka-cookie/"
//           style={{ color: 'rgb(76, 175, 80)' }}
//         >
//           Polityka Prywatności
//         </a>
//         <span>&nbsp;&nbsp;</span>
//         <a
//           href="http://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/"
//           style={{ color: 'rgb(76, 175, 80)' }}
//         >
//           Jak wyłączyć cookies?
//         </a>
//         <span>&nbsp;&nbsp;</span>
//         <a
//           href="https://nety.pl/cyberbezpieczenstwo"
//           style={{ color: 'rgb(76, 175, 80)' }}
//         >
//           Cyberbezpieczeństwo
//         </a>
//         <div style={{ height: '10px', display: 'block' }}></div>
//         <a href="javascript:void(0);" onClick={() => createCookie('simplecookienotification_v01', 1, 7)}
//           style={{
//             position: 'relative',
//             background: 'rgb(76, 175, 80)',
//             color: 'rgb(255, 255, 255)',
//             padding: '5px 15px',
//             textDecoration: 'none',
//             fontSize: '12px',
//             fontWeight: 'normal',
//             border: '0px solid rgb(232, 245, 233)',
//             borderRadius: '0px',
//           }}
//         >
//           AKCEPTUJĘ
//         </a>
//         <div style={{ height: '10px', display: 'block' }}></div>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="app">
      {/* Cookie Notification
      <CookieNotification /> */}
      
      <header className="header">
        <h1>Radio Internetowe</h1>
      </header>
      
      <main className="main-content">
        <RadioPlayer />
        <div className="scroll-container">
          {/* <div className="channel" onclick="changeChannel('radio1')">Kanał 1</div> */}
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 Radio Internetowe. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default App;
