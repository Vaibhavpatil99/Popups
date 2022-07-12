import React from 'react'
const PopupOne = (props) => {
    return (props.trigger) ? (
            <div className='absolute top-32 left-[600px] shadow bg-white rounded-xl'>
                <div className='relative'>
                    <button className='absolute bg-gray-300 top-2.5 right-2.5 rounded-full text-white px-3 py-1 text-xl' onClick={() => props.setTrigger(false)}>X</button>
                </div>
                <div className=' flex flex-col justify-around items-center my-12'>
                    <h2 className='text-xl font-semibold my-2'>{props.popupData.title}</h2>
                    <img className='w-96' src={props.img} alt="" />
                    <h2 className=' font-semibold my-2'>Your Coupon Code: {props.popupData.cuponCode}</h2>
                    <div className='flex my-4'>
                        <button className='mx-4 px-8 py-1 rounded font-semibold border-2 border-black'>NO THANKS</button>
                        <button className='mx-4 px-8 py-1 rounded font-semibold border-2 border-black bg-blue-500 text-white'>SHOP NOW</button>
                    </div>
                </div>
            </div>


    ) : "";
}

export default PopupOne