import ProjectsSlider from '../../projectSlider/projectSlider'

const Projects = () => {
    return (
        // <section className={`bg-[url('/images/galeno.png')] w-full h-full`}>
        //     <div className="w-full h-full backdrop-blur-[3px] bg-black/80 flex justify-center items-center">
        //         <div className="w-2/3 flex justify-center items-center">
        //             <div className='flex-1'>
        //                 <h1 className="text-white font-secondary_bold text-6xl">Galeno</h1>
        //                 <p className=" text-white font-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eveniet ducimus distinctio quos culpa natus facilis nobis commodi, veniam illum soluta ex architecto, recusandae neque doloribus. Commodi libero corrupti aliquam.</p>
        //             </div>
        //             <div className='relative'>
        //                 <img src={GalenoWeb} width={800} />
        //                 <img className='absolute bottom-0 right-0' src={GalenoMobile} width={600} />
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className='w-full h-full flex flex-col lg:flex-col items-center text-center pl-10 pt-10'>
            <h1 className='self-start text-4xl md:text-6xl lg:text-8xl text-white font-secondary_bold'>PROJECTS</h1>
            <div className='w-full h-4/5 flex gap-3 justify-center items-cente overflow-hidden'>
                <ProjectsSlider />
            </div>
        </section>
    )
}

export default Projects