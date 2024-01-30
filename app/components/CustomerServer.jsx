import React from 'react'
import { datas } from './data'

export const CustomerServer = () => {
    const people = datas;
    return (
        <div>
            {people.map(person => {
                const {id, name, age} = person;
                return(
                    <div key={id}>
                        {id} <br /> {name}, {age}
                    </div>

                )
            })
            }
        </div>
    )
}
