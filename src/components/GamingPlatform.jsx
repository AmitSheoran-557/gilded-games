import React from 'react'

const GamingPlatform = () => {
    return (
        <div className='bg-platform-bg bg-cover bg-black bg-no-repeat overflow-hidden   xl:py-[228px] lg:py-48 md:py-36 sm:py-28 py-20 flex justify-center items-center -mt-1'>
            <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
                <h3 className='max-w-[920px] text-white text-center mx-auto !leading-[156%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>
                    <span className='relative'><img className='xl:max-w-[85px] lg:max-w-[70px] md:max-w-16 max-w-12 w-full absolute pointer-events-none xl:-left-24 xl:-top-12 -left-20 max-lg:hidden lg:block lg:-top-10 -top-8' src="src/assets/images/png/semi-colon-img.png" alt="semi-colon-img" /> Gilded</span> Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the
                    <span className='relative'><img className='xl:max-w-[85px] lg:max-w-[70px] md:max-w-16 max-w-12 w-full absolute pointer-events-none xl:-right-24 xl:-bottom-12 -right-20 max-lg:hidden lg:block lg:-bottom-10 -bottom-8 rotate-180' src="src/assets/images/png/semi-colon-img.png" alt="semi-colon-img" /> game!</span> </h3>
            </div>
        </div>
    )
}

export default GamingPlatform