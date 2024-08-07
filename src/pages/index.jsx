import { Header } from "../components/header";
import { Game } from "../components/game";
import Footer from "../components/footer/footer";

export default function HomePage() {
  return (
    <>
      <HomePageLayout header={<Header />} footer={<Footer />}>
        <Game></Game>
      </HomePageLayout>
    </>
  );
}

function HomePageLayout({ header, children, footer }) {
  return (
    <div className={"min-h-screen bg-slate-50 flex flex-col"}>
      {header}
      <main className="pt-6 mx-auto md:w-[600px] sm:w-[450px] w-[350px]">
        {children}
      </main>
      {footer}
    </div>
  );
}
