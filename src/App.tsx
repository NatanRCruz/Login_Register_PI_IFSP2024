import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <button className="back-button">&larr;</button>
      </div>

      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" className="login-button">Log In</button>
        <div className="signup-link">
          Não tem conta? <a href="/register">Crie uma</a>
        </div>
      </form>
    </div>
  );
};

export default App;
