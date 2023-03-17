import React from 'react';
import Body from './components/Body';
import DataProvider from './components/DataProvider';
import Header from './components/Header';

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Body />
      </DataProvider>
    </>
  );
}

export default App;
