const fetchPatientList = async() => {

    const apiRes = await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`);

    if (!apiRes.ok){
        throw new Error(`Fetch not ok`);
    }

    return apiRes.json();
}

export default fetchPatientList;