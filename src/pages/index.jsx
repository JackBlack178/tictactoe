import { Header } from "../components/header";
import { GameInfo } from "../components/game/gameInfo";
import { GameField } from "../components/game/gameField";
import { GameTitle } from "../components/game/gameTitle";
import React, { useState } from "react";
import { useGameState } from "../hooks/useGameState";
import { GameSymbol } from "../components/game/gameSymbol";
import UIModal from "../UI/Modal/UIModal";
import UIButton from "../UI/Button/UIButton";
import { log } from "next/dist/server/typescript/utils";

export default function HomePage() {
  const [playersCount] = useState(2);
  const {
    currentStep,
    nextStep,
    cells,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

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
            winnerExist={!!winnerSymbol}
            onTimeOver={handlePlayerTimeOver}
          ></GameInfo>
          {winnerSymbol && (
            <h3>
              Победитель <GameSymbol symbol={winnerSymbol}></GameSymbol>{" "}
            </h3>
          )}
          <GameField
            className="mt-6 w-max mx-auto"
            playersCount={playersCount}
            cells={cells}
            currentStep={currentStep}
            nextStep={nextStep}
            handleCellClick={handleCellClick}
            winnerSequence={winnerSequence}
            winnerSymbol={winnerSymbol}
          ></GameField>
        </main>
      </div>

      <UIModal isOpen={!!winnerSymbol} onClose={() => console.log("close")}>
        <UIModal.Header>Игра завершена</UIModal.Header>
        <UIModal.Body>
          <div className="text-sm">
            Победитель: <span className="text-teal-600">abracadabra</span>
          </div>
        </UIModal.Body>
        <UIModal.Footer>
          <UIButton size="md" option="outline">
            Вернуться
          </UIButton>
          <UIButton size="md" option="primary">
            Играть снова
          </UIButton>
        </UIModal.Footer>
      </UIModal>
    </>
  );
}
