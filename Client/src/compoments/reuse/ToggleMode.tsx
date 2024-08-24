import React, { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
type TMode = 'light' | 'dark';
const ToggleMode = () => {
  const [mode, setMode] = useState<TMode>('light');
  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (!mode) {
      setMode('light');
      localStorage.setItem('mode', 'light');
    } else {
      setMode(storedMode as TMode);
    }
  }, []);

  const changeMode = () => {
    const mode = localStorage.getItem('mode');
    document.body.style.transition = 'colors';
    document.body.style.transitionDuration = '300';
    if (mode === 'light' || !mode) {
      localStorage.setItem('mode', 'dark');
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'black';
      setMode('dark');
    } else {
      localStorage.setItem('mode', 'light');
      document.body.style.backgroundColor = 'white';
      document.documentElement.classList.remove('dark');
      setMode('light');
    }
  };

  return (
    <button
      onClick={changeMode}
      className="text-2xl p-2 bg-gray-secondary rounded-full text-black"
    >
      {mode === 'light' ? (
        // <span>
        //   <MdDarkMode className="transition-transform rotate-180 duration-500" />
        // </span>
        <span className="transition-transform rotate-180 duration-500 text-primary-color">
          <CiLight />{' '}
        </span>
      ) : (
        <span className="transition-transform rotate-180 duration-500 ">
          <CiLight />{' '}
        </span>
      )}
    </button>
  );
};

export default ToggleMode;
