import { useState } from "react";

function Game() {
  const [gameOn, setgameOn] = useState(0);
  const [showRes, setshowRes] = useState(0);
  const [userChoice, setuserChoice] = useState("");
  const [compChoice, setcompChoice] = useState("");
  function startGame() {
    setgameOn(1);
    setshowRes(0);
  } 
  function updateChoice(e) {
    setuserChoice(e.target.textContent);
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) setcompChoice("Rock");
    else if (choice === 1) setcompChoice("Paper");
    else if (choice === 2) setcompChoice("Scissors");
    setshowRes(1);
    console.log(userChoice + " " + compChoice);
  }
  return (
    <div>
      <button onClick={startGame}>
        Start the game
      </button>
      <div className={`${gameOn === 0 ? "hidden" : "block"}`}>
        <p onClick={(e) => updateChoice(e)} className="cursor-pointer">
          Rock
        </p>
        <p onClick={(e) => updateChoice(e)} className="cursor-pointer">
          Paper
        </p>
        <p onClick={(e) => updateChoice(e)} className="cursor-pointer">
          Scissors
        </p>
      </div>
      <div className={`${showRes === 0 ? "hidden" : "block"}`}>
        <p>
          So, you chose {userChoice} and computer chose {compChoice}
        </p>
        {userChoice === compChoice && <>Match drawn</>}
        {((userChoice === "Rock" && compChoice === "Scissors") ||
          (userChoice === "Paper" && compChoice === "Rock") ||
          (userChoice === "Scissors" && compChoice === "Paper")) && (
          <>User won</>
        )}
        {((compChoice === "Rock" && userChoice === "Scissors") ||
          (compChoice === "Paper" && userChoice === "Rock") ||
          (compChoice === "Scissors" && userChoice === "Paper")) && (
          <>Computer won</>
        )}
      </div>
    </div>
  );
}

export default Game;
