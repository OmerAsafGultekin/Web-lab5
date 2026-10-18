import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [name, setName] = useState('');
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '300px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Hello, {name}
      </p>

      <div style={{ margin: '20px 0' }}>
        <button
          onClick={() => setShowProducts((prev) => !prev)}
          style={{
            padding: '10px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#f0f0f0'
          }}
        >
          {showProducts ? 'Hide Products' : 'Show Products'}
        </button>
      </div>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;