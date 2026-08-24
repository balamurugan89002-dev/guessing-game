import { useState } from "react";

function App() {
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");
  const [number, setNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function startGame() {
    const a = Number(lower);
    const b = Number(upper);

    if (!a || !b || a >= b) {
      setMessage("Enter a valid lower and upper bound.");
      return;
    }

    const randomNumber =
      Math.floor(Math.random() * (b - a + 1)) + a;

    const chances = Math.round(Math.log2(b - a + 1));

    setNumber(randomNumber);
    setMaxAttempts(chances);
    setAttempts(0);
    setGuess("");
    setMessage(`🎯 You have ${chances} chances to guess!`);
    setGameStarted(true);
    setGameOver(false);
  }

  function checkGuess() {
    if (gameOver) return;

    const userGuess = Number(guess);

    if (!guess || Number.isNaN(userGuess)) {
      setMessage("Enter a valid number.");
      return;
    }

    const currentAttempt = attempts + 1;
    setAttempts(currentAttempt);

    if (userGuess === number) {
      setMessage(
        `🎉 Congrats! You found it in ${currentAttempt} ${
          currentAttempt === 1 ? "try" : "tries"
        }! The number is ${number}.`
      );
      setGameOver(true);
    } else if (userGuess > number) {
      setMessage("⬆️ The guess is too high!");
    } else {
      setMessage("⬇️ The guess is too low!");
    }

    if (userGuess !== number && currentAttempt >= maxAttempts) {
      setMessage(
        `😢 Chances finished! The number was ${number}.`
      );
      setGameOver(true);
    }

    setGuess("");
  }

  function tryAgain() {
    startGame();
  }

  function changeRange() {
    setGameStarted(false);
    setGameOver(false);
    setNumber(null);
    setGuess("");
    setMessage("");
    setAttempts(0);
    setMaxAttempts(0);
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
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "30px",
          borderRadius: "20px",
          background: "#1f2937",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            marginTop: "10px",
            marginBottom: "35px",
            lineHeight: "1.4",
          }}
        >
          🎯 Guessing
          <br />
          <span style={{ marginLeft: "55px" }}>
            Game
          </span>
        </h1>

        {!gameStarted && (
          <>
            <p>Choose your number range</p>

            <input
              type="number"
              placeholder="Lower bound"
              value={lower}
              onChange={(e) => setLower(e.target.value)}
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Upper bound"
              value={upper}
              onChange={(e) => setUpper(e.target.value)}
              style={inputStyle}
            />

            <button onClick={startGame} style={buttonStyle}>
              Start Game 🚀
            </button>

            <h3>{message}</h3>
          </>
        )}

        {gameStarted && (
          <>
            <p>
              Range: <b>{lower}</b> - <b>{upper}</b>
            </p>

            <p>
              Chances: <b>{attempts}</b> /{" "}
              <b>{maxAttempts}</b>
            </p>

            {!gameOver && (
              <>
                <input
                  type="number"
                  placeholder="Guess a number"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  style={inputStyle}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      checkGuess();
                    }
                  }}
                />

                <button
                  onClick={checkGuess}
                  style={buttonStyle}
                >
                  Guess 🎯
                </button>
              </>
            )}

            <h3>{message}</h3>

            {gameOver && (
              <>
                <button
                  onClick={tryAgain}
                  style={buttonStyle}
                >
                  🔄 Try Again
                </button>

                <button
                  onClick={changeRange}
                  style={buttonStyle}
                >
                  🔢 Change Range
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "12px",
  margin: "8px 0",
  fontSize: "16px",
  borderRadius: "10px",
  border: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "12px 25px",
  margin: "10px 5px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default App;