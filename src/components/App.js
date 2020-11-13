import React from 'react';
import MathClassList from './MathClassList';
import MathClassDetail from './MathClassDetail';
import './styles.scss';

const App = () => {
  return (
    <div>
      <h1>Math Class List </h1>
      <section className="classes">
        <MathClassList />
        <MathClassDetail />
      </section>
      <p>#react #react-redux #redux #sass</p>
    </div>
  );
};

export default App;
