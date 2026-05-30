import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample product data
const initialProducts = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "🎧", category: "Electronics" },
  { id: 2, name: "Smart Watch", price: 199.99, image: "⌚", category: "Electronics" },
  { id: 3, name: "Running Shoes", price: 89.99, image: "👟", category: "Footwear" },
  { id: 4, name: "Coffee Mug", price: 12.99, image: "☕", category: "Kitchen" },
  { id: 5, name: "Backpack", price: 49.99, image: "🎒", category: "Accessories" },
  { id: 6, name: "Desk Lamp", price: 34.99, image: "💡", category: "Home" }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate cart total
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Prepare data for bar chart (product prices)
  const chartData = initialProducts.map(p => ({
    name: p.name.length > 12 ? p.name.substring(0, 10) + '...' : p.name,
    price: p.price,
    fullName: p.name
  }));

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>
        <h1 style={{ color: '#2c3e50', margin: 0 }}>🛍️ SimpleShop</h1>
        <button 
          onClick={() => setShowCart(!showCart)} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: '#3498db', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </header>

      {/* Main content - either cart or products */}
      {showCart ? (
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
          <h2>Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty. Start shopping!</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '30px' }}>{item.image}</span>
                    <div>
                      <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                      <p style={{ margin: 0, color: '#666' }}>${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
                      <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
                    </div>
                    <p style={{ fontWeight: 'bold', margin: 0, minWidth: '80px' }}>${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} style={{ padding: '5px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'right', marginTop: '20px', paddingTop: '15px', borderTop: '2px solid #ddd' }}>
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <button style={{ padding: '10px 25px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>
                  Checkout
                </button>
              </div>
            </>
          )}
          <button onClick={() => setShowCart(false)} style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            ← Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' }}>
            {initialProducts.map(product => (
              <div key={product.id} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', padding: '20px', textAlign: 'center', transition: 'transform 0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '60px', marginBottom: '15px' }}>{product.image}</div>
                <h3 style={{ margin: '10px 0', color: '#2c3e50' }}>{product.name}</h3>
                <p style={{ color: '#7f8c8d', margin: '5px 0' }}>{product.category}</p>
                <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#e67e22', margin: '15px 0' }}>${product.price.toFixed(2)}</p>
                <button 
                  onClick={() => addToCart(product)}
                  style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#3498db', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '16px'
                  }}
                >
                  Add to Cart 🛒
                </button>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>📊 Product Price Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`$${value}`, 'Price']} labelFormatter={(label) => `Product: ${label}`} />
                <Legend />
                <Bar dataKey="price" fill="#e67e22" name="Price (USD)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '15px', fontSize: '14px' }}>
              *Bar chart showing prices of all products in our store
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;