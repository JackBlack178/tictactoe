import React from "react";
import UIModal from "../../UI/Modal/UIModal";
import UIButton from "../../UI/Button/UIButton";

const GameOverModal = () => {
  return (
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
  );
};

export default GameOverModal;
