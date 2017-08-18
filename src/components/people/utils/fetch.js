import fetch_url from './urls';

const getPersonById = (id) => {
    const request = new Request(`${fetch_url.get_person}/${id}`, { credenrials: 'include' });

    return fetch(request);
};

const getPersonByIdNumber = (id) => {
    const request = new Request(`${fetch_url.get_person}/${id}`, { credenrials: 'include' });

    return fetch(request);
};

const getPeople = (page, count) => {
    const request = new Request(`${fetch_url.get_persons}/${page}/${count}`, { credenrials: 'include' });

    return fetch(request);
}

const createPerson = (name, sex, idNumber, address) => {

    const form = new FormData();
    form.append('name', name);
    form.append('sex', sex);
    form.append('id_number', idNumber);
    form.append('address', address);

    const request = new Request(fetch_url.create_person, {
        method: 'POST',
        body: form,
        // credentials: 'include'
    });

    return fetch(request);
}

export default {
    getPersonById,
    getPersonByIdNumber,
    getPeople,
    createPerson
}
