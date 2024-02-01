'use client'
import React, { useState } from 'react'
import { Modal } from './Modal';
import { Server } from './Server';
import { AddServer } from './AddServer';

export const ServerList = ({listOfServers}) => {

  return (
    <div className='w-full'>
      <h1 className='text-2xl'>Customer Server List</h1>
      <div className='mt-8'>
            <table className="table ">
                <thead>
                    <tr className=' bg-slate-400 text-white cursor-default pointer-events-none'>
                        <th>Server Name</th>
                        <th>Server Type</th>
                    </tr>
                </thead>
                <tbody>
                  {listOfServers.map((server) => (
                    <Server key={server.id} server = {server} />
                  ))}
                </tbody>
            </table>
            <AddServer />
        </div>
        {/* <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}/> */}
    </div>
  )
}
