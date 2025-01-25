import React from 'react'
import Heading from '../common/Heading'
import { TOKEN_INFO_LIST } from '../utils/helper'

const TokenInfo = () => {
    return (
        <div className='bg-token-info bg-cover bg-black bg-no-repeat overflow-hidden xl:py-[130px] lg:py-28 md:py-24 sm:py-20 py-16 flex justify-center items-center -mt-1'>
            <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
                <Heading className='text-center xl:mb-[59px] lg:mb-12 md:mb-10 sm:mb-8 mb-6' title='$GILD Token Info' />
                <div className="flex flex-wrap justify-center gap-5 w-full">
                    {TOKEN_INFO_LIST.map((item, index) => (
                        <div key={index} className="max-w-[312px] border bg-gradient hover:border-transparent border-white/10 w-full rounded-[20px] py-[17px] xl:min-w-[181px]">
                        <img className='max-w-16 mx-auto lg:mb-2.5 mb-2' src={item.image} alt={item.alt} />
                        <h3 className='text-white text-center font-bold xl:text-3xl lg:text-2xl md:text-xl text-base'>{item.title}</h3>
                        <p className='text-white text-center xl:text-lg lg:text-base text-sm'>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TokenInfo