import React from "react";
import UIModal from "../../../UI/Modal/UIModal";
import UIButton from "../../../UI/Button/UIButton";

const GameOverModal = ({ winnerName, players, onClose }) => {
  return (
    <UIModal isOpen={winnerName} onClose={onClose}>
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
        <UIButton size="md" option="primary">
          Играть снова
        </UIButton>
      </UIModal.Footer>
    </UIModal>
  );
};

export default GameOverModal;
