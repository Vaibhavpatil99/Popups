import { useState } from 'react';
import PopupOne from './Components/PopupOne';
import PopupTwo from './Components/PopupTwo';
import PopupThree from './Components/PopupThree';
import laptopImg from "./imgs/laptopImg.png";
import newspaperImg from "./imgs/newspaper.png";
import emma from "./imgs/emma.jpg"
function App() {
  const [openPopupOne, setOpenPopupOne] = useState(false);
  const [openPopupTwo, setOpenPopupTwo] = useState(false);
  const [openPopupThree, setOpenPopupThree] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center h-[500px] w-full'>
      <h2 className='text-3xl font-bold'>React Popups</h2>
      <div className='md:flex items-center justify-around my-8'>
        <div>
          <button className='mx-4 px-8 py-1 rounded font-semibold border-2 bg-indigo-500 text-white' onClick={()=> setOpenPopupOne(true)}>Promocode Popup</button>
          <PopupOne img={laptopImg} popupData={{title: "Looking for a new laptop ?", cuponCode: "LAPTOP2022"}} trigger={openPopupOne} setTrigger={setOpenPopupOne} />
        </div>
        <div>
          <button className='mx-4 px-8 py-1 rounded font-semibold border-2 bg-red-300 text-white' onClick={()=> setOpenPopupTwo(true)}>Newsletter Popup</button>
          <PopupTwo img={newspaperImg} popupData={"Don't Miss New Updates From Us"}  trigger={openPopupTwo} setTrigger={setOpenPopupTwo} />
        </div>
        <div>
          <button className='mx-4 px-8 py-1 rounded font-semibold  border-black bg-emerald-500 text-white' onClick={()=> setOpenPopupThree(true)}>Whatsapp Call Popup</button>
          <PopupThree img={emma} popupData={{name:"Emma stone", title: "Call now and get free Support", cuponCode: "LAPTOP2022"}} trigger={openPopupThree} setTrigger={setOpenPopupThree} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
