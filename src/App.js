import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return(
    <main>
      <Tours />
    </main>
  );
}

export default App