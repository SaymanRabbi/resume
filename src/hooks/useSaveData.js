const useSaveData = async (data) => {
    const response = await fetch('http://localhost:5000/api/v1/ResumeSave', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const json = await response.json();
    return json;
}

export default useSaveData;