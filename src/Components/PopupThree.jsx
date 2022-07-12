import React from 'react'

const PopupThree = (props) => {
    return (props.trigger) ? (
            <div className='absolute bottom-12 right-12 shadow bg-white rounded-xl'>
                <div className='relative'>
                    <button className='absolute bg-gray-300 top-2.5 right-2.5 rounded-full text-white px-2  ' onClick={() => props.setTrigger(false)}>X</button>
                </div>
                <div className=' flex flex-col justify-around items-center text-center w-64 my-8'>
                    <img className='w-12 h-12 rounded-full' src={props.img} alt="" />
                    <h2 className='text-xl font-semibold'>{props.popupData.name}</h2>
                    <p className='text-gray-400'>Designer at PopupSmart</p>
                    <h2 className='text-xl font-semibold my-2'>{props.popupData.title}</h2>
                    
                </div>
            </div>


    ) : "";
}

export default PopupThree