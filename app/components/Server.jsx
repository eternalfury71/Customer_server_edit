import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { use, useState } from 'react'
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";
import { deleteServer, editServer } from "@/apis";


export const Server = ({server}) => {
    const router = useRouter();
    const {server_name, server_type} = server;
    const [selectOpen, setSelectOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
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

    const handleDeleteServer = async (id) => {
        await deleteServer(id);
        setModalDeleteOpen(false);
        router.refresh();
    }

    const handleSelectEditChange = (e) => {
        setServerTypeToEdit(e.target.value)
        e.target.blur();
    }

        return(
            <tr key={server.id} className='uppercase border-none'>
                <td>{server_name}</td>
                <td>
                    {server_type}
                </td>
                <td className="flex gap-1">

                    <FaRegEdit className="cursor-pointer text-blue-500 hover:text-sky-300" onClick={() => setModalEditOpen(true)} size={20}/>
                    <Modal modalOpen={modalEditOpen} setModalOpen={setModalEditOpen}>
                        <form onSubmit={handleSubmitEditServer} className='w-[500px] my-12 h-full bg-white rounded-xl flex flex-col justify-center items-center gap-8'>
                            <h1 className='text-2xl mb-12'>Edit Server</h1>
                            <input value={serverNameToEdit}  onChange = {(e) => setServerNameToEdit(e.target.value)} maxLength={10} type="text" placeholder="Type here" className="bg-white input input-bordered w-full max-w-xs" required/>

                            <select className="bg-white select select-bordered w-full max-w-xs"  
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

                    <MdDelete onClick={() => setModalDeleteOpen(true)} className="cursor-pointer text-red-500 hover:text-red-400" size={20} />
                    <Modal modalOpen={modalDeleteOpen} setModalOpen={setModalDeleteOpen}>
                        <div className='w-[500px] my-12 h-full max-h-[400px] bg-white rounded-xl flex flex-col justify-center items-center gap-4'>
                            <h2 className="text-3xl lowercase mb-8">Are you sure to delete?</h2>
                            <button onClick={() => handleDeleteServer(server.id)} className={`btn w-full max-w-[200px] bg-green-500 text-white`}>Delete</button>
                            <button onClick={() => setModalDeleteOpen(false)} className={`btn w-full max-w-[200px] bg-red-500 text-white`}>Back</button>
                        </div>
                    </Modal>
                </td>
            </tr>
            )
        }
