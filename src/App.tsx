import Header from "./components/sections/header"
import Projects from "./components/sections/projects"
import Technologies from "./components/technologies"
import styles from "./styles/index.js"

function App() {
  return (
    <div className="group/wrap relative">
      <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth  bg-black_gray">
        <Header />

        <div className={` ${styles.snapStart} relative flex items-center justify-between px-5 md:px-32`}>
          <Technologies />
        </div>

        <div className="group flex h-screen w-full snap-start items-center justify-between">
          <div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">Activate</div></div>
            <div className="overflow-hidden font-clash text-7xl font-medium"><div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">On Scroll</div></div>
          </div>
        </div>

        <div className={` ${styles.snapStart} relative flex items-center justify-between`}>
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
