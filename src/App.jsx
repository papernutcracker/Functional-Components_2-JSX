import React, { useState } from 'react';
import PropTypes from 'prop-types';
import restaurantImage from './restaurant.jpg'; 

// інформація про ресторан
const RestaurantInfo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [restaurantData, setRestaurantData] = useState({
    name: props.name,
    address: props.address,
    rating: props.rating,
    cuisine: props.cuisine,
    imageUrl: props.imageUrl,
  });

  // оновлення стану при введенні тексту
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // збереження
  const handleSave = () => {
    setIsEditing(false);
  };

  // режим редагування
  if (isEditing) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '100%', maxWidth: '400px', backgroundColor: '#fdfdfd' }}>
        <h3>Редагування інформації</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Назва:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} style={{ width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }} />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Адреса:</label>
          <input type="text" name="address" value={restaurantData.address} onChange={handleChange} style={{ width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }} />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Рейтинг:</label>
          <input type="number" step="0.1" name="rating" value={restaurantData.rating} onChange={handleChange} style={{ width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }} />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Тип кухні:</label>
          <input type="text" name="cuisine" value={restaurantData.cuisine} onChange={handleChange} style={{ width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }} />
        </div>

        <button onClick={handleSave} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', width: '100%', marginTop: '10px' }}>
          Зберегти
        </button>
      </div>
    );
  }

  // режим перегляду
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '100%', maxWidth: '400px' }}>
      <img 
        src={restaurantData.imageUrl} 
        alt={`Будівля ресторану ${restaurantData.name}`} 
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h2>{restaurantData.name}</h2>
      <p><strong>Адреса:</strong> {restaurantData.address}</p>
      <p><strong>Рейтинг:</strong> {restaurantData.rating} / 5</p>
      <p><strong>Тип кухні:</strong> {restaurantData.cuisine}</p>
      
      <button 
        onClick={() => setIsEditing(true)} 
        style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer', width: '100%' }}
      >
        Редагувати
      </button>
    </div>
  );
};

RestaurantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
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