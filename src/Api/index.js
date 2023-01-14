import axios from 'axios';

const url = 'http://34.82.81.113:3000';

class api {
    constructor(url) {
        this.baseUrl = url;
        this.customApi = this.createApi();
    }

    getStudents() {
        return Api.customApi('/students', {
            method: 'GET',
            params: {}
        });
    }

    addStudent(data) {
        return Api.customApi('/students', {
            method: 'POST',
            data: data,
            params: {}
        });
    }

    deleteStudent(id) {
        return Api.customApi(`/students/${id}`, {
            method: 'DELETE'
        });
    }


    updateStudent(student) {
        const {_id, name, isDonePr, group } = student
        return Api.customApi(`/students/${_id}`, {
            method: 'PUT',
            data: {name, isDonePr, group},
            params: {}
        });
    }

    createApi() {
        const api = axios.create({
            baseURL: this.baseUrl
        });

        return api;
    }
}

const Api = new api(url);

export {Api};

