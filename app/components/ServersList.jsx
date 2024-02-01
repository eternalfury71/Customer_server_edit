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
            <table className="table">
                <thead className='bg-slate-400 w-full'>
                    <tr className='text-white cursor-default pointer-events-none w-full'>
                        <th>Server Name</th>
                        <th>Server Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {listOfServers.map((server) => (
                    <Server server = {server} />
                  ))}
                </tbody>
            </table>
            <AddServer />
        </div>
    </div>
  )
}
