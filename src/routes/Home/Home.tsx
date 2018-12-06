import React from 'react';

import Header from '../../components/Header';

const handleProfileClick = () => {
  console.info('PROFILE CLICKED');
}

const handleSearch = (value: string) => {
  console.info('SEARCH', value);
}

const handleSearchSubmit = (value: string) => {
  console.info('SEARCH SUBMIT', value);
}

const Home = () => (
  <div data-testid="home-page">
    <Header
      onSearch={handleSearch}
      onSearchSubmit={handleSearchSubmit}
      onProfileClick={handleProfileClick}
    />
    {'Home page'}
  </div>
);

export default Home;
