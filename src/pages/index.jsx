import { Header } from "../components/header";
import { Game } from "../components/game";

export default function HomePage() {
  return (
    <>
      <HomePageLayout header={<Header />}>
        <Game></Game>
      </HomePageLayout>
    </>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className={"min-h-screen bg-slate-50"}>
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
