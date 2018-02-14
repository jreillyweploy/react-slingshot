import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>This is a home page</h1>

      <ol>
        <li>Go to <Link to="/about">About page</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
