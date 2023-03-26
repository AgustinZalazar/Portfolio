import { useState } from 'react'
import Bootstrap_svg from '../../assets/svg/bootstrap_svg.js'
import Csharp_svg from '../../assets/svg/csharp_svg.js'
import Mongodb_svg from '../../assets/svg/mongodb_svg.js'
import Nextjs_svg from '../../assets/svg/nextjs_svg.js'
import Nodejs_svg from '../../assets/svg/nodejs_svg.js'
import React_svg from '../../assets/svg/react_svg.js'
import Sql_svg from '../../assets/svg/sql_svg.js'
import Tailwind_svg from '../../assets/svg/tailwind_svg.js'
import { GradientBall } from '../gradientBall/index.js'
import Tooltip from '../tooltip/index.js'

function Technologies() {
    const [technology, setTechnology] = useState<Boolean>(true)
    return (
        <div className='w-full text-center'>
            <h1 className='font-secondary_bold mb-10 md:mb-12 text-white font-bold text-4xl md:text-6xl lg:text-8xl'>TECHNOLOGIES</h1>
            <button className='font-secondary text-xl bg-dark_orange rounded-2xl py-1 px-3 shadow-lg shadow-light_orange/50 text-white hover:bg-orange mr-4'
                onClick={() => setTechnology(true)}
            >Frontend</button>
            <button className='font-secondary text-xl bg-dark_orange rounded-2xl py-1 px-3 shadow-lg shadow-light_orange/50 text-white hover:bg-orange mb-12 md:mb-8'
                onClick={() => setTechnology(false)}
            >Backend</button>
            {technology ?
                <div className='w-full h- grid grid-cols-2 md:grid-cols-4 gap-10 place-content-center place-items-center'>
                    <Tooltip message="ReactJS & React Native" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <React_svg />
                    </Tooltip>
                    <Tooltip message="NextJS" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Nextjs_svg />
                    </Tooltip>
                    <Tooltip message="Tailwind" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Tailwind_svg />
                    </Tooltip>
                    <Tooltip message="Bootstrap" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Bootstrap_svg />
                    </Tooltip>
                </div>
                :
                <div className='w-full h- grid grid-cols-2 md:grid-cols-4 gap-10 place-content-center place-items-center'>
                    <Tooltip message="NodeJS" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Nodejs_svg />
                    </Tooltip>
                    <Tooltip message="C# .NET" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Csharp_svg />
                    </Tooltip>
                    <Tooltip message="MongoDB" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Mongodb_svg />
                    </Tooltip>
                    <Tooltip message="SQL" container_style="w-min p-5 rounded-full bg-black_darkgray cursor-pointer shadow-sm shadow-current" >
                        <Sql_svg />
                    </Tooltip>
                </div>
            }
            <GradientBall gradient='gradient-02' width="w-32 md:w-96" height="h-24 md:h-36" bottom="bottom-0" right='-right-5 md:-right-12' />
            <GradientBall gradient='gradient-03' width="w-24 md:w-64" height="h-20 md:h-24" bottom="bottom-0" right='right-32 md:right-80' />
        </div>
    )
}

export default Technologies