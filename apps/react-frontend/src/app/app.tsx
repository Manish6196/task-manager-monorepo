import { useEffect } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api');
        const data = await res.json();
        console.log(data);
      } catch (e: any) {
        console.error(e.message);
      }
    })();
  }, []);

  return (
    <div>
      <NxWelcome title="react-frontend" />
    </div>
  );
}

export default App;
