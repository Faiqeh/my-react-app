// Level 3: Add user input and dynamic personalization
import React, { useState } from 'react';

function PersonalizableGreetingCard() {
  // TODO: Add state for the editable name 
  const [userName, setUserName] = useState("Sarah");
  
  // TODO: Add state for the editable hobby
  const [userHobby, setUserHobby] = useState("painting");
  
  // Keep the interactive message features from Level 2
  const [messageIndex, setMessageIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  
  const messages = [
    "Welcome to React!",
    "You're doing great!",
    "Keep learning!",
    "React is awesome!",
    "You're a star! ⭐"
  ];
  
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    setMessageIndex((messageIndex + 1) % messages.length);
  };
  
  // TODO: Add handler for name input changes
  const handleNameChange = (event) => {
    // Update the userName state with event.target.value
  };
  
  // TODO: Add handler for hobby input changes  
  const handleHobbyChange = (event) => {
    // Update the userHobby state with event.target.value
  };
  
  // Get time-based emoji
  const currentHour = new Date().getHours();
  const getTimeEmoji = () => {
    if (currentHour < 12) return "🌅";
    if (currentHour < 18) return "☀️";
    return "🌙";
  };
  
  // TODO: Choose background color based on name length or hobby
  const getBackgroundColor = () => {
    // Try different colors based on userName.length or userHobby
    return '#f9f9f9'; // Default for now
  };
  
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '350px',
      textAlign: 'center',
      backgroundColor: getBackgroundColor()
    }}>
      {/* Time-based emoji */}
      <div style={{ fontSize: '48px', marginBottom: '15px' }}>
        {getTimeEmoji()}
      </div>
      
      {/* Editable name input */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
        <input 
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            textAlign: 'center'
          }}
        />
      </div>
      
      {/* Personalized greeting */}
      <h2 style={{ margin: '10px 0', color: '#333' }}>
        Hello, {userName}!
      </h2>
      
      {/* Dynamic message */}
      <p style={{ color: '#666', margin: '15px 0' }}>
        {messages[messageIndex]}
      </p>
      
      {/* Editable hobby input */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Your Hobby:</label>
        <input 
          type="text"
          value={userHobby}
          onChange={handleHobbyChange}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            textAlign: 'center'
          }}
        />
      </div>
      
      {/* Hobby display */}
      {userHobby && (
        <p style={{ color: '#0066cc', fontStyle: 'italic' }}>
          I love {userHobby}! 🎨
        </p>
      )}
      
      {/* Interactive button from Level 2 */}
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          backgroundColor: clickCount > 3 ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '15px'
        }}
      >
        {clickCount === 0 ? 'Click me!' : `Message ${messageIndex + 1}/${messages.length}`}
      </button>
      
      {/* Click counter */}
      <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>
        Clicked {clickCount} times
      </p>
      
      {/* TODO: Add a special message when user customizes their info */}
    </div>
  );
}

export default function Level3Demo() {
  return (
    <div>
      <h2>Level 3: Personalizable Greeting Card</h2>
      <PersonalizableGreetingCard />
    </div>
  );
}