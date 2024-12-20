import React from 'react'
import green from '../assets/green.jpg'
import masonry from '../assets/masonry-3.jpg'
import masonr from '../assets/masonry-4.jpg'
import woman from '../assets/first.jpg'


const Grind = () => {
  return (
    <>
    <div className="flex min-h-screen items-center justfy-center bg-neutral-800">
<div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
   <div className="group relative items-center justfy-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/40 transition-shadow ">
       <div className="h-full w-full">
           <img className="h-full w-full object-cover group-hover:rotate-4 group-hover:scale-125 transition-transform duration-500s" src={green} alt="image on screen" />
       </div>

       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/78 group-hover:vai-black/60 group-hover:to-black/70 ">
           <div className="absolute inset-0 flex flex-col items-center justfy-center px-8 text-center translate-y[60%] group-hover:translate-y-0 transition-all ">
               <h1 className="text-4xl font-bold text-white">beauty</h1>
               <p className="text-lg italic text-white mb-4  opacity-100 transition-opacity duration-400s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero debitis sapiente et iure id,  fuga pariatu eos maxime omnis nobis possimus placeat ipsam?</p>
                    <button className="rounded-full">see more</button>

           </div>

       </div>
   </div>

   <div className="group relative items-center justfy-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/40 transition-shadow ">
       <div className="h-full w-full">
           <img className="h-full w-full  object-center  group-hover:rotate-4 group-hover:scale-125 transition-transform duration-500s" src={masonry} alt="image on screen" />
       </div>

       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/78 group-hover:vai-black/60 group-hover:to-black/70 ">
           <div className="absolute inset-0 flex flex-col items-center justfy-center px-8 text-center translate-y[60%] group-hover:translate-y-0 transition-all ">
               <h1 className="text-4xl font-bold text-white">beauty</h1>
               <p className="text-lg italic text-white mb-4  opacity-100 transition-opacity duration-400s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero debitis sapiente et iure id,  fuga pariatu eos maxime omnis nobis possimus placeat ipsam?</p>
                    <button className="rounded-full">see more</button>

           </div>

       </div>
   </div>

   <div className="group relative items-center justfy-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/40 transition-shadow ">
       <div className="h-full w-full">
           <img className="h-full w-full object-center group-hover:rotate-4 group-hover:scale-125 transition-transform duration-500s" src={masonr} alt="image on screen" />
       </div>

       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/78 group-hover:vai-black/60 group-hover:to-black/70 ">
           <div className="absolute inset-0 flex flex-col items-center justfy-center px-8 text-center translate-y[60%] group-hover:translate-y-0 transition-all ">
               <h1 className="text-4xl font-bold text-white">beauty</h1>
               <p className="text-lg italic text-white mb-4  opacity-100 transition-opacity duration-400s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero debitis sapiente et iure id,  fuga pariatu eos maxime omnis nobis possimus placeat ipsam?</p>
                    <button className="rounded-full">see more</button>

           </div>

       </div>
   </div>

   <div className="group relative items-center justfy-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/40 transition-shadow ">
       <div className="h-full w-full">
           <img className="h-full w-full  object-center group-hover:rotate-4 group-hover:scale-125 transition-transform duration-500s" src={woman} alt="image on screen" />
       </div>

       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/78 group-hover:vai-black/60 group-hover:to-black/70 ">
           <div className="absolute inset-0 flex flex-col items-center justfy-center px-8 text-center translate-y[60%] group-hover:translate-y-0 transition-all ">
               <h1 className="text-4xl font-bold text-white">beauty</h1>
               <p className="text-lg italic text-white mb-4  opacity-100 transition-opacity duration-400s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero debitis sapiente et iure id,  fuga pariatu eos maxime omnis nobis possimus placeat ipsam?</p>
                    <button className="rounded-full">see more</button>

           </div>

       </div>
   </div>

  
</div>

</div>

<button className='bg-red-500 hover:bgred-700 rounded-full'>Click this for more</button>

    </>
  )
};

export default Grind


