import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { use, useState } from 'react'
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";
import { editServer } from "@/apis";


export const Server = ({server}) => {
    const router = useRouter();
    const {server_name, server_type} = server;
    const [selectOpen, setSelectOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [serverNameToEdit, setServerNameToEdit] = useState(server_name);
    const [serverTypeToEdit, setServerTypeToEdit] = useState(server_type)

    const handleSubmitEditServer = async (e) => {
        e.preventDefault();
        await editServer({
            id: server.id,
            server_name: serverNameToEdit,
            server_type: serverTypeToEdit,
        });

        setServerNameToEdit('');
        setServerTypeToEdit('');
        setModalEditOpen(false);
        router.refresh();
    }

    const handleSelectEditChange = (e) => {
        setServerTypeToEdit(e.target.value)
    }

        return(
            <tr key={server.id} className='uppercase'>
                <td>{server_name}</td>
                <td>
                    {server_type}
                </td>
                <td className="flex gap-3">

                    <FaRegEdit onClick={() => setModalEditOpen(true)} style={{color:'blue', cursor: 'pointer'}} size={20}/>
                    <MdDelete style={{color:'red', cursor: 'pointer'}} size={20} />

                    <Modal modalOpen={modalEditOpen} setModalOpen={setModalEditOpen}>
                        <form onSubmit={handleSubmitEditServer} className='w-[500px] my-12 h-full bg-white rounded-xl flex flex-col justify-center items-center gap-8'>
                            <h1 className='text-2xl mb-12'>Edit Server</h1>
                            <input value={serverNameToEdit}  onChange = {(e) => setServerNameToEdit(e.target.value)} maxLength={10} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>

                            <select className="select select-bordered w-full max-w-xs"  
                                    value={serverTypeToEdit}
                                    onFocus={() => setSelectOpen(true)}
                                    onBlur={() => setSelectOpen(false)}
                                    onChange={handleSelectEditChange}
                            >
                                <option disabled selected>Server Type</option>
                                <option value="Vds">Vds</option>
                                <option value="Dedicated">Dedicated</option>
                                <option value="Hosting">Hosting</option>
                            </select>
                            <button type='submit' className={`btn w-full max-w-xs bg-green-500 text-white ${selectOpen ? 'translate-y-8' : ''}`}>Save</button>
                            <button onClick={() => setModalEditOpen(false)} className={`btn w-full max-w-xs bg-red-500 text-white ${selectOpen ? 'translate-y-8' : ''}`}>Cancel</button>
                        </form>
                    </Modal>
                </td>
            </tr>
            )
        }
