import {useState} from "react";

function InteractiveGreetingCard({ person, messages }) {

    // EMOJI
    const currentHour = new Date().getHours();
    const getTimeEmoji = () =>
        currentHour < 12 ? "🌅"
        : currentHour < 18 ? "☀️"
        : "🌙";

    // CLICK COUNT
    const [clickCount, setCount] = useState(0);
    const funcIncrement = (e) => {
        setCount(clickCount + 1) 
    };
    
    return (
        
        <div className = "p-5" style={{ height: '100vh', width: '100vw', backgroundColor: '#1e293b' }}>

            <div className="text-center p-3">
                <h6 className="text-light">LEVEL 2 - Interactive Greeting Card</h6>
            </div>

            <div className="d-flex justify-content-center align-items-center">

                <div
                    className="card shadow-lg rounded-4 text-center text-light px-5 py-3"
                    style={{ backgroundColor: '#0f172a' }}
                >

                    <h1>{getTimeEmoji()}</h1>
                    <h2 className="mt-4">Hello, {person.name}!</h2>

                    <p className="mt-3 text-secondary">{messages[2]}</p>

                    <hr className="text-secondary" />
                    <p>I Love {person.hobby}</p>

                    <button className="btn btn-primary my-3" onClick={funcIncrement}>Click Me!</button>
                    <p className="text-secondary">Clicked {clickCount} times</p>

                </div>

            </div>
        </div>
    );

}

export default InteractiveGreetingCard;
