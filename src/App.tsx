import Header from "./components/header"
import styles from "./styles/index.js"

function App() {
  return (
    <div className="group/wrap relative">
      <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth px-5 md:px-32 bg-black_gray">
        <Header />

        <div className={` ${styles.snapStart} flex items-center justify-between`}>
          <div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">Animate</div></div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">Anything</div></div>
          </div>
        </div>

        <div className="group flex h-screen w-full snap-start items-center justify-between">
          <div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">Activate</div></div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">On Scroll</div></div>
          </div>
        </div>

        <div className="group flex h-screen w-full snap-start items-center justify-between bg-pink-500 bg-opacity-10">
          <div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">Bit Hacky</div></div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">But it works</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
