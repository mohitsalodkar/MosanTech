import { useState, useEffect } from 'react';

/**
 * Detects whether the user has enabled Data Saver mode or is on a 2G/slow connection.
 * Used to avoid expensive video autoplay and heavy asset preloading.
 */
export function useDataSaver() {
  const [isDataSaver, setIsDataSaver] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!connection) return;

    const checkSaveData = () => {
      const saveData = Boolean(connection.saveData);
      const slowEffectiveType =
        connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g';
      setIsDataSaver(saveData || slowEffectiveType);
    };

    checkSaveData();

    if (connection.addEventListener) {
      connection.addEventListener('change', checkSaveData);
      return () => connection.removeEventListener('change', checkSaveData);
    }
  }, []);

  return isDataSaver;
}

export default useDataSaver;

