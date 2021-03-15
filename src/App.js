import React, { useState, useEffect } from 'react';
import Hello from './Hello';
import useForm from './useForm';
import useFetch from './useFetch';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const [showHello, setShowHello] = useState(true);

  // http://numbersapi.com/43/trivia
  useFetch('http://numbersapi.com/43/trivia');

  useEffect(() => {
    console.log('mount1');
  }, []);
  useEffect(() => {
    console.log('mount2');
  }, []);

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
      <input name='email' value={values.email} onChange={handleChange} />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
