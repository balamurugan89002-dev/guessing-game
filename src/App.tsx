import { useState } from "react";

function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const [number, setNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  function checkGuess() {
    const userGuess = Number(guess);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      setMessage("Enter a number between 1 and 100");
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts!`);
    } else if (userGuess < number) {
      setMessage("⬆️ Too low! Try a higher number.");
    } else {
      setMessage("⬇️ Too high! Try a lower number.");
    }
  }

  function newGame() {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "20px",
          background: "#1f2937",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1>🎯 Guessing Game</h1>

        <p>Guess a number between 1 and 100</p>

        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          style={{
            width: "90%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "15px",
          }}
        />

        <br />

        <button
          onClick={checkGuess}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Guess
        </button>

        <button
          onClick={newGame}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          New Game
        </button>

        <h3>{message}</h3>

        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
}

export default App;