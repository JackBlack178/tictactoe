import { Header } from "../components/header";
import { GameInfo } from "../components/game/gameInfo";
import { GameField } from "../components/game/gameField";
import { GameTitle } from "../components/game/gameTitle";

export default function HomePage() {
  return (
    <>
      <div className={"min-h-screen bg-slate-50"}>
        <Header></Header>
        <main className="pt-6 mx-auto max-w-[616px]">
          <GameTitle></GameTitle>
          <GameInfo className="mt-6"></GameInfo>
        </main>
        <GameField className="mt-6"></GameField>
      </div>
    </>
  );
}
