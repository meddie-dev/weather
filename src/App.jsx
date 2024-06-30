import Navigation from './components/navigation.jsx'
import Hero from './components/hero.jsx'
import Info from './components/info.jsx'
import Days from './components/days.jsx'
function App() {

  return (
    <>
      <div className="w-[80%] h-full mx-auto my-[15rem] bg-[var(--boxColor)] rounded-[2rem] border-[3px] border-[var(--borderColor)] shadow-2xl ">
        <Navigation />
        <div id='hideBody' className='hidden'>
          <Hero />
 
        <div className='flex w-[90%] mx-auto gap-10 max-lg:flex-col max-lg:w-full max-sm:gap-7 max-md:gap-7'>
          <Info />

          <Days  />
        </div>
        </div>
        
        
      </div>
    </>
  )
  
}

export default App

