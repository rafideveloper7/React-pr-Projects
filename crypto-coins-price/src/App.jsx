import React from 'react';
import CurrencyList from './components/Market/CurrencyList.jsx';

function App() {
  const rows = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '14,500,000', marketCap: '280,000B', volume: '3,500B' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', price: '850,000', marketCap: '120,000B', volume: '1,200B' },
    { id: 3, name: 'BNB', symbol: 'BNB', price: '95,000', marketCap: '45,000B', volume: '400B' },
    { id: 4, name: 'Solana', symbol: 'SOL', price: '22,500', marketCap: '35,000B', volume: '350B' },
  ];

  return (
    <div style={{ padding: '20px', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#06c200ff' }}>💹 Crypto Market (PKR)</h1>
      <CurrencyList rows={rows} />
    </div>
  );
}

export default App;
