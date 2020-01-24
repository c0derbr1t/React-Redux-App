import React, { useState } from 'react';


import RestroomList from './components/RestroomList';
import { fetchRestrooms } from './actions';

import './App.css';
import { connect } from 'react-redux';

const App = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pee Near Me</h1>
        <input
          className='search-input'
          type='text'
          name='searchTerm'
          placeholder='🔎 City and or State'
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={() => props.fetchRestrooms(searchTerm)}>Search!</button>
      </header>
      <section>
        <RestroomList />
      </section>
      <footer>
        <p>Data from <a href='https://www.refugerestrooms.org/about'>REFUGE Restrooms</a></p>
      </footer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { fetchRestrooms })(App);