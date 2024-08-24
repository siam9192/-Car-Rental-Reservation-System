import { useEffect } from 'react';
import MainLayout from './compoments/layout/MainLayout';
import { modes } from './utils/constant';

function App() {
  useEffect(() => {
    console.log(888);
    let mode = localStorage.getItem('mode');
    if (!mode) {
      localStorage.setItem('mode', 'light');
    }
    mode = localStorage.getItem('mode');
    if (!modes.includes(mode!)) {
      localStorage.setItem('mode', 'light');
    }

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
