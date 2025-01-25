import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const Utility = () => {
    return (
        <div className='bg-utility-bg bg-cover bg-black bg-no-repeat pt-[123px] pb-[194px] flex justify-center items-center -mt-1'>
            <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
                <div className="flex justify-center flex-wrap items-center">
                    <div className="lg:w-6/12 w-full flex max-lg:justify-center">
                        <div className="">
                            <Heading title="NFT Utility" className="lg:mb-4 mb-3 text-start" />
                            <Description className="max-w-[649px]" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.' />
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full flex justify-center items-center lg:mt-0 md:mt-7 mt-5">
                        <img className='xl:max-w-[450px] md:max-w-sm max-w-xs' src="src/assets/images/png/girl-img.png" alt="girl-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility