import React from "react";
import UIModal from "../../UI/UIModal";
import UIButton from "../../UI/UIButton";
import { GAME_STATE_ACTIONS } from "../model/gameStateReducer";

const GameOverModal = ({ winnerName, players, resetGame }) => {
  return (
    <UIModal isOpen={winnerName}>
      <UIModal.Header>Игра завершена</UIModal.Header>
      <UIModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>

        <div className={"grid grid-cols-2 mt-3"}>{players}</div>
      </UIModal.Body>
      <UIModal.Footer>
        <UIButton size="md" option="outline">
          Вернуться
        </UIButton>
        <UIButton size="md" option="primary" onClick={resetGame}>
          Играть снова
        </UIButton>
      </UIModal.Footer>
    </UIModal>
  );
};

export default GameOverModal;
