import OrangeButton from '../buttons/orangeButton';
import { Swiper, SwiperSlide } from "swiper/react";
import galeno from '../../assets/projects/galeno.png'
import guille from '../../assets/projects/guillespers.png'
import portfolio from '../../assets/projects/portfolio.png'
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import './index.css'

// import required modules
import { EffectCoverflow } from "swiper";


const projects = [
    {
        image: galeno,
        title: 'Galeno'
    },
    {
        image: guille,
        title: 'GuillePers'
    },
    {
        image: portfolio,
        title: 'Portfolio'
    },
    {
        image: portfolio,
        title: 'Portfolio'
    },
    {
        image: portfolio,
        title: 'Portfolio'
    },
]


const ProjectsSlider = () => {
    return (
        <Swiper
            effect={'coverflow'}
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            spaceBetween={40}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 90,
                modifier: 1.5,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow]}
            className="swiper_container"
        >
            {projects.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <article className={`w-full h-full lg:w-[1000px] lg:h-[600px] bg-cover rounded-lg shadow-lg shadow-gray-600/20`} style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="w-full h-full bg-black/30 rounded-lg flex flex-col  items-start justify-end pl-3 pb-3">
                                <h3 className='text-white text-3xl font-secondary mb-2'>{item.title}</h3>
                                <OrangeButton shadow={false}>
                                    View More
                                </OrangeButton>
                            </div>
                        </article>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ProjectsSlider