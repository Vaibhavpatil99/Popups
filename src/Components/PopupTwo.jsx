import React from 'react'

const PopupTwo = (props) => {
    return (props.trigger) ? (
            <div className='absolute top-32 left-[600px] shadow bg-white rounded-xl'>
                <div className='relative'>
                    <button className='absolute bg-gray-300 top-2.5 right-2.5 rounded-full text-white px-3 py-1 rigt-0 text-xl' onClick={() => props.setTrigger(false)}>X</button>
                </div>
                <div className=' flex flex-col justify-around items-center w-64 mx-12 my-2'>
                    <img className='w-96' src={props.img} alt="" />
                    <h2 className='text-xl font-semibold my-2 text-center'>{props.popupData}</h2>
                    <div className='flex flex-col my-4'>
                        <input className='w-full px-8 py-1 rounded font-semibold  bg-emerald-100 text-white my-2' type="text" placeholder='Enter Your Email' />
                        <button className='w-full px-8 py-1 rounded font-semibold  bg-emerald-500 text-white my-2'>SUBSCRIBE</button>
                    </div>
                    <div className='text-xs'>
                        <input type="checkbox" />
                        <label htmlFor=""> I Confirm that i've read and agree to </label>
                        <a className='underline' href="">Privacy Policy</a>
                    </div>
                </div>
            </div>


    ) : "";
}

export default PopupTwo