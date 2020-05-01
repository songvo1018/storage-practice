import React from 'react';
import Layout from './layout/Layout';

function App() {
  const arr = [
      {
        id: '1',
        name: 'alex',
        category: 'creator',
        description: '...',
        price: 'all'
      },
      {
        id: '2',
        name: 'naska',
        category: 'osoba',
        description: 'prekrasnaya Anastasi',
        price: 'all'
      },
      {
        id: '3',
        name: 'tuman',
        category: 'pes',
        description: 'hochet est` ruki',
        price: 'all'
      },
      {
        id: '4',
        name: 'pisuk',
        category: 'unknown',
        description: 'who is it?',
        price: 'all'
      },
  ]
  return <Layout arr={arr} />;
}

export default App;
