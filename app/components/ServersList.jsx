'use client'
import React, { useState } from 'react'
import { Modal } from './Modal';

export const ServerList = ({listOfServers}) => {
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1 className='text-2xl'>Customer Server List</h1>
      <div className='mt-8'>
            <table className="table">
                <thead>
                    <tr className=' bg-slate-400 text-white cursor-default pointer-events-none'>
                        <th>Customer ID</th>
                        <th>Server Name</th>
                        <th>Server Type</th>
                    </tr>
                </thead>
                <tbody>
                  {listOfServers.map((server) => {
                    const {customer_id, server_name, server_type} = server;
                    return(
                      <tr key={customer_id} className='uppercase'>
                        <td>{customer_id}</td>
                        <td>{server_name}</td>
                        <td>{server_type}</td>
                      </tr>
                    )
                  })}
                </tbody>
            </table>
            <button onClick={() => setModalOpen(true)} className='btn'>Add Server</button>
            <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}/>
        </div>
    </div>
  )
}
