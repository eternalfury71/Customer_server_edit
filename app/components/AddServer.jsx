import { v4 as uuidv4 } from 'uuid';
import React, { use } from 'react'
import { useState } from 'react';
import { Modal } from './Modal'
import { addNewServer } from '@/apis';
import { useRouter } from 'next/navigation';

export const AddServer = () => {
    const router = useRouter();
    const [selectOpen, setSelectOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [newServerNameVal, setNewServerNameVal] = useState('');
    const [newServerTypeVal, setNewServerTypeVal] = useState('');

    const handleSelectChange = (e) => {
        setNewServerTypeVal(e.target.value);
        e.target.blur();
    }

    const handleChangeAddServer = (e) => {
        setNewServerNameVal(e.target.value);
    }

    const handleSubmitAddServer =  async (e) => {
        e.preventDefault();
        if (newServerTypeVal === '' || newServerNameVal === '') {
            // Display an error message or handle the lack of server type selection
            alert('Please fill all fields!');
        } else {
            await addNewServer({
                id: uuidv4(),
                server_name: newServerNameVal,
                server_type: newServerTypeVal,
            });
    
            setNewServerTypeVal('');
            setNewServerNameVal('');
            router.refresh();
            setModalOpen(false); // Close the modal on successful form submission
        }
        }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='btn bg-green-500 text-white w-full mt-4'>Add new server</button>
            <Modal Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitAddServer} className='w-[500px] my-12 h-full bg-white rounded-xl flex flex-col justify-center items-center gap-8'>
                    <h1 className='text-2xl mb-12'>Create New Server</h1>
                    <input onChange = {handleChangeAddServer} value={newServerNameVal} maxLength={10} type="text" placeholder="Type here" className="bg-white input input-bordered w-full max-w-xs" required/>

                    <select className="bg-white select select-bordered w-full max-w-xs"
                            onFocus={() => setSelectOpen(true)}
                            onBlur={() => setSelectOpen(false)}
                            onChange={handleSelectChange}
                            required
                    >
                        <option disabled selected>Server Type</option>
                        <option>Vds</option>
                        <option>Dedicated</option>
                        <option>Hosting</option>
                    </select>
                    <button type='submit' className={`btn w-full max-w-xs bg-green-500 text-white ${selectOpen ? 'translate-y-8' : ''}`}>Save</button>
                    <button onClick={() => setModalOpen(false)} className={`btn w-full max-w-xs bg-red-500 text-white ${selectOpen ? 'translate-y-8' : ''}`}>Cancel</button>
                </form>
            </Modal>
        </div>
  )
}
