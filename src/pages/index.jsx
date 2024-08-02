import { Header } from "../components/header";
import { GameInfo } from "../components/game/gameInfo";
import { GameField } from "../components/game/gameField";
import { GameTitle } from "../components/game/gameTitle";
import { useState } from "react";
import { useGameState } from "../hooks/useGameState";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { currentStep, nextStep, cells, handleCellClick, winnerSequence } =
    useGameState(playersCount);

  return (
    <>
      <div className={"min-h-screen bg-slate-50"}>
        <Header></Header>
        <main className="pt-6 mx-auto w-max">
          <GameTitle playersCount={playersCount}></GameTitle>
          <GameInfo
            className="mt-6"
            playersCount={playersCount}
            currentStep={currentStep}
          ></GameInfo>
          <GameField
            className="mt-6 w-max mx-auto"
            playersCount={playersCount}
            cells={cells}
            currentStep={currentStep}
            nextStep={nextStep}
            handleCellClick={handleCellClick}
            winnerSequence={winnerSequence}
          ></GameField>
        </main>
      </div>
    </>
  );
}
