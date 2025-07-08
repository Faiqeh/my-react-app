import {useState} from "react";

function PersonalizableGreetingCard({ messages }) {

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
    }

    // NAME CHANGE
    const [userName, setUserName] = useState("");
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }

    // HOBBY CHANGE
    const [userHobby, setUserHobby] = useState("");
    const handleHobbyChange = (e) => {
        setUserHobby(e.target.value);
    }

    // Choose background color based on name length
    const getBackgroundColor =
        userName.length < 5 ? '#1e293b'
        : userName.length < 10? '#002b70'
        : '#000'

    return (

        <div className = "p-5" style={{ height: '100%', width: '100%', backgroundColor: getBackgroundColor }}>

            <div className="text-center p-3">
                <h6 className="text-light">LEVEL 3 - Add User Input & Dynamic Content</h6>
            </div>

            <div className="d-flex justify-content-center align-items-center">

                <div
                    className="card shadow-lg rounded-4 text-center text-light px-5 py-3"
                    style={{ backgroundColor: '#0f172a' }}
                >
                    
                    <h1>{getTimeEmoji()}</h1>

                    <div className="mt-4">
                        <label className="form-label">Your name:</label>

                        <input type="text" className="form-control" placeholder="whats your name?" onChange={handleNameChange}/>
                    </div>

                    <h2 className="mt-4">Hello, {userName || "Hi-Movers"}!</h2>

                    <p className="mt-3 text-secondary">{messages[2]}</p>
                    
                    <hr className="text-secondary" />

                    <div className="mb-3">
                        <label className="form-label">Your hobby:</label>

                        <input type="text" className="form-control" placeholder="whats your hobby?" onChange={handleHobbyChange}/>
                    </div>

                    <p>I Love {userHobby || "You"} ✨</p>

                    <button 
                        className={`btn my-3 
                            ${
                                clickCount < 5 ? "btn-primary" 
                                : clickCount < 10 ? "btn-warning" 
                                : clickCount < 15 ? "btn-success"
                                : clickCount < 20 ? "btn-info"
                                : "btn-danger"
                            }`} 
                        onClick={funcIncrement}>Click Me!
                    </button>

                    <p className="text-secondary">Clicked {clickCount} times</p>

                    <hr className="text-secondary" />
                    
                    {/* DISPLAY CUSTOM MESSAGE */}
                    {
                        !userName && !userHobby ? (
                            <p className="text-success">
                            </p>
                        ) : (
                            <p className="fs-6 text-success">
                                ✨ {userHobby} is a great hobby, {userName}! Keep it up! ✨
                            </p>
                        )
                    }

                </div>

            </div>
        </div>
    );

}

export default PersonalizableGreetingCard;
