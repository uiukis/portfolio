import Particles from "./components/particles";
import MainTitle from "./components/main-title";
import NavBar from "./components/nav-bar";
import Divider from "./components/divider";
import BottomBar from "./components/bottom-bar";
import { MotionDiv } from "./use-client";

export default function Home() {
  return (
    <main className="flex flex-col items-left justify-center w-screen h-screen overflow-hidden min-h-screen p-16">
      <NavBar />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <MainTitle>
        <h1>{"HI, I'M WILKER QUIRINO"}</h1>
        <h1>{"FULL STACK WEB"}</h1>
        <h1>{"& MOBILE DEVELOPER"}</h1>
      </MainTitle>
      <BottomBar>
        <Divider />
        <div className="flex flex-row w-full m-20 items-center justify-between gap-8">
          <p className="w-60 text-2xl">
            Based in Brazil and Working Worldwide.
          </p>
          <p className="w-2/5 text-2xl text-right">
            Passionate Developer Crafting Visually Captivating Websites with
            completes Solutions
          </p>
        </div>
      </BottomBar>
    </main>
  );
}
