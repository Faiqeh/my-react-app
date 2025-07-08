import react from "react";

// IMPORT COMPONENTS
import GreetingCard from "./components/Level1-ProfileCard";
import InteractiveGreetingCard from "./components/Level2-InteractiveCard";
import PersonalizableGreetingCard from "./components/Level3-PersonalizableCard";

function App() {
  const person = {
    name: "Faiqi Nabil",
    title: "Backend Developer",
    hobby: "Cycling 🚴‍♂️",
  };

  const messages = [
    "Welcome to React!",
    "You're doing great!",
    "Keep learning!",
    "React is awesome!",
    "You're a star! ⭐"
  ];

  return (
    <>
      {/* LEVEL 1 */}
      <GreetingCard 
        person={person} 
        messages={messages}
      />

      {/* LEVEL 2 */}
      <InteractiveGreetingCard 
        person={person} 
        messages={messages}
      />

      {/* LEVEL 3 */}
      <PersonalizableGreetingCard
        messages={messages}
      />
      
    </>
  );
}

export default App;
