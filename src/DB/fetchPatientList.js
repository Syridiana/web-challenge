const fetchPatientList = async() => {

    const apiRes = await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`);
    const data = await apiRes.json();
    localStorage.setItem('patients', JSON.stringify(data));

    if (!apiRes.ok){
        throw new Error(`Fetch not ok`);
    }

}

export default fetchPatientList;