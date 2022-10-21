import { getPuuid, getArrayOfMatch, exempleMatch } from '../service/api.js';
import { useState, useEffect } from 'react';
import '../styles/App.css';
import { UserData } from '../components/User.jsx';
import { UserContent } from '../components/UserContent.jsx';

function App() {

  return (
    <div className="App">
      <h2>Hugo vs Kyanou </h2>
      <div className='content'>
        <UserContent />
        <UserContent />
      </div>

    </div>
  );
}

export default App;
