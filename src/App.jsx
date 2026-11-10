import React, { useState } from 'react';
import PropTypes from 'prop-types';
import restaurantImage from './restaurant.jpg'; 

// інформація про ресторан
const RestaurantInfo = ({ name, address, rating, cuisine, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '100%', maxWidth: '400px' }}>
      <img 
        src={imageUrl} 
        alt={`Будівля ресторану ${name}`} 
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      <h2>{name}</h2>
      <p><strong>Адреса:</strong> {address}</p>
      <p><strong>Рейтинг:</strong> {rating} / 5</p>
      <p><strong>Тип кухні:</strong> {cuisine}</p>
    </div>
  );
};

RestaurantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

// введення логіну та паролю
const LoginForm = ({ onLoginSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit({ login, password });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '100%', maxWidth: '400px' }}>
      <h3>Вхід у систему</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="login">Логін:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '4px', boxSizing: 'border-box' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '10px 16px', cursor: 'pointer', width: '100%' }}>
          Увійти
        </button>
      </form>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
        <h4>Поточні введені дані:</h4>
        <p style={{ margin: '5px 0' }}><strong>Логін:</strong> {login || 'Не введено'}</p>
        <p style={{ margin: '5px 0' }}><strong>Пароль:</strong> {password || 'Не введено'}</p>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

// головний компонент додатку
const App = () => {
  const handleLogin = (credentials) => {
    alert(`Спроба авторизації!\nЛогін: ${credentials.login}\nПароль: ${credentials.password}`);
  };

  return (
    <div style={{ 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '30px',
      fontFamily: 'sans-serif'
    }}>
      <h1>Завдання: Функціональні компоненти</h1>
      
      {/* Виклик компонента ресторану з передачею props */}
      <RestaurantInfo 
        name="Paparoni" 
        address="вул. Зодчих, 4, Вінниця" 
        rating={4.7} 
        cuisine="Італійська, Піца" 
        imageUrl={restaurantImage} 
      />
      
      {/* Виклик компонента логіну з передачею функції-обробника */}
      <LoginForm onLoginSubmit={handleLogin} />
      
    </div>
  );
};

export default App;