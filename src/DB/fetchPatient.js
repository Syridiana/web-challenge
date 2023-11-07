const fetchPatient = async({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users?id=${id}`);

    if (!apiRes.ok){
        throw new Error(`patient number ${id} fetch not ok`);
    }

    return apiRes.json();
}

export default fetchPatient;