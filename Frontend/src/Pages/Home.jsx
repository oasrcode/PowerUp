import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContent } from "../components/HomeContent";

export function Home() {
  return (
    <div className="flex flex-col max-w-full h-screen bg-home-bg bg-no-repeat bg-cover bg-center bg-fixed  justify-between ">
      <Header />

      <HomeContent />

      <Footer />
    </div>
  );
}
