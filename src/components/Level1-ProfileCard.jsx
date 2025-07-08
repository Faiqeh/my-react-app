import react from "react";

function GreetingCard({ person, messages }) {

    // GREETING
    const currentHour = new Date().getHours();
    const greeting =
      currentHour < 12 ? "🌅 Good morning! Hope you have a great day!"
      : currentHour < 18 ? "☀️ Good afternoon! Hope you have a great day!"
      : "🌙 Good evening! Hope you have a great day!";

    return (
      <div className = "p-5" style={{ height: '100%', width: '100vw', backgroundColor: '#1e293b' }}> 
      
        <div className="text-center p-3">
          <h6 className="text-light">LEVEL 1 - Simple Greeting Card</h6>
        </div>

        <div className="d-flex justify-content-center align-items-center">

          <div
            className="card shadow-lg rounded-4 text-center text-light px-5 py-3"
            style={{ backgroundColor: '#0f172a' }}
          >

            <h1>👋</h1>
            <h2 className="mt-4">Hello, {person.name}!</h2>
            <p className="mt-3 text-secondary">{messages[0]}</p>
            <hr className="text-secondary" />
            <p>{greeting}</p>

          </div>

        </div>
      </div>
    );
}

export default GreetingCard;
