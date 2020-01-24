import React, { useState } from 'react';


import RestroomList from './components/RestroomList';
import { fetchRestrooms } from './actions';

import './App.css';
import { connect } from 'react-redux';

import { Header, Input, Button, Section, Footer } from './components/Styles';

const App = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <Header className="App-header">
        <h1>Where To Pee Near Me</h1>
        <Input
          className='search-input'
          type='text'
          name='searchTerm'
          placeholder='🔎 City and or State'
          value={searchTerm}
          onChange={handleChange}
        />
        <Button onClick={() => props.fetchRestrooms(searchTerm)}>Search!</Button>
      </Header>
      <Section>
        <RestroomList />
      </Section>
      <Footer>
        <p>Data from <a href='https://www.refugerestrooms.org/about'>REFUGE Restrooms</a></p>
      </Footer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { fetchRestrooms })(App);