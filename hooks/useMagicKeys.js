"use client";
import { useEffect } from 'react';

function useMagicKeys(callback) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.shiftKey && event.key === 'D') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default useShiftDKeyPress;
