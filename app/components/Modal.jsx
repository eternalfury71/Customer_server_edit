'use client'
import React from 'react'

export const Modal = ({modalOpen, setModalOpen}) => {
    const handleChange = () => {
        console.log('abc')
    }

    return (
        <>
        <div className={`absolute top-[25px] right-[25px] bottom-[25px] flex flex-col justify-center items-center w-full max-w-[946px] ${modalOpen ? '' : 'hidden'}`}>
            <form onSubmit={(e) => e.preventDefault()} onChange={handleChange} className='w-[500px] my-12 h-full bg-white rounded-md flex flex-col justify-center items-center gap-5'>
                <h1 className='text-2xl'>Header Big</h1>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button onClick={() => setModalOpen(false)} className='btn w-full max-w-xs bg-green-400 text-white'>Save</button>
            </form>
        </div>
        </>
    )
}
