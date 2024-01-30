

const baseUrl = 'http://localhost:3001';


export const getServerList = async () => {
    const res = await fetch(`${baseUrl}/servers`);
    const serversList = await res.json();
    return serversList;
}