
import React from 'react'


export const Server = ({server}) => {
    const {server_name, server_type} = server;
        return(
            <tr key={server.id} className='uppercase'>
                <td>{server_name}</td>
                <td>
                    {server_type}
                </td>
            </tr>
            )
        }
