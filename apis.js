

const baseUrl = 'http://localhost:3001';


export const getServerList = async () => {
    const res = await fetch(`${baseUrl}/servers`, {cache: 'no-store'});
    const serversList = await res.json();
    return serversList;
}

export const addNewServer = async (server) => {
    const res = await fetch(`${baseUrl}/servers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(server)
    });
    const newServer = res.json();
    return newServer;
}

export const editServer = async (server) => {
    const res = await fetch(`${baseUrl}/servers/${server.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(server)
    });
    const editedServer = res.json();
    return editedServer;
}
