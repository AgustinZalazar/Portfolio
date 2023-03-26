import illustration1 from '../../assets/illustration1.png'
import { GradientBall } from '../gradientBall'
import Navbar from '../navbar'

const Header = () => {
    return <div className="group h-screen w-full snap-start">
        <Navbar />
        <div className="relative  flex flex-wrap h-screen w-full items-center justify-around">
            <GradientBall gradient='gradient-01' width="w-36 md:w-60" height="h-40 md:h-56" bottom="bottom-0" left="-left-28" />
            <div>
                <div className="overflow-hidden mb-5">
                    <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">
                        <h1 className='text-4xl md:text-7xl font-secondary_bold text-white  mb-3'>Agustin Zalazar</h1>
                    </div>
                </div>
                <div className="overflow-hidden font-clash text-7xl font-medium text-white">
                    <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">
                        <h3 className='text-3xl md:text-5xl'>Fullstack Developer</h3>
                    </div>
                </div>
            </div>
            <div className="bg-black_darkgray p-8 rounded-full">
                <img src={illustration1} width={600} />
            </div>
            <GradientBall gradient='gradient-01' width="w-20 md:w-32" height="h-24 md:h-32" top="top-0" right="-right-4 md:-right-12" />
        </div>
    </div>
}

export default Header