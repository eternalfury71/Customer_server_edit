import React from 'react'

export const ServerList = ({listOfServers}) => {

  return (
    <div>
      <h1 className='text-xl'>Customer Server List</h1>
      <div className='mt-8'>
            <table className="table">
                <thead>
                    <tr className='cursor-default pointer-events-none'>
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
        </div>
    </div>
  )
}
