import React from 'react'
import ReelCard from '../components/ReelCard'
import { reels } from '../data/reel'


function ReelPage() {
  return (
    <div className=' px-40 py-10' >
        <p className='text-2xl my-4 text-slate-500'>REELS</p>


        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

            {/* reel card */}
            {
                reels.map(e=>{
                    return <ReelCard 
                    key={e.id}
                    id={e.id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
            />
                })
            }

            
            
           
            

        </div>
        

    </div>
  )
}

export default ReelPage