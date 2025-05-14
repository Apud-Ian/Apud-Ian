import ButtonMenu from "./components/ButtonMenu";
import HeroSection from "./components/HeroSection"
import LineMap from "./components/LineMap";

function App() {
  return (
    <>
    <div className='overflow-x-hidden h-[1800px] bg-stone-50 dark:bg-black'>
      <LineMap>
          <HeroSection />
      </LineMap>
      <ButtonMenu />
      </div>
    </>
  );
}

export default App;
