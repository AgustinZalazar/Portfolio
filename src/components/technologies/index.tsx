import Csharp_svg from '../../assets/svg/csharp_svg.js'
import Nextjs_svg from '../../assets/svg/nextjs_svg.js'
import Nodejs_svg from '../../assets/svg/nodejs_svg.js'
import React_svg from '../../assets/svg/react_svg.js'

function Technologies() {
    return (
        <div className='w-full text-center'>
            <h1 className='font-secondary_bold mb-36 text-white font-bold text-4xl md:text-8xl'>TECHNOLOGIES</h1>
            <div className='w-full h-full flex flex-wrap justify-around items-center'>
                <div className='flex justify-center items-center p-5 rounded-full bg-black_darkgray'>
                    <React_svg />
                </div>
                <div className='flex justify-center items-center p-5 rounded-full bg-black_darkgray'>
                    <Nextjs_svg />
                </div>
                <div className='flex justify-center items-center p-5 rounded-full bg-black_darkgray'>
                    <Nodejs_svg />
                </div>
                <div className='flex justify-center items-center p-5 rounded-full bg-black_darkgray'>
                    <Csharp_svg />
                </div>

            </div>
        </div>
    )
}

export default Technologies