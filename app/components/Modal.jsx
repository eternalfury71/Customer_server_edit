'use client'
import React from 'react'

export const Modal = ({modalOpen, setModalOpen, children}) => {


    return (
        <div className={`${modalOpen ? 'overlay__modal' : ''}`}>
            <div className={`absolute top-[25px] right-[25px] bottom-[25px] flex flex-col justify-center items-center w-full max-w-[946px] ${modalOpen ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}
