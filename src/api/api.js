import * as axios from "axios";

export const getAll = {
    getMessage() {
        return axios.get('https://api.chucknorris.io/jokes/random');
    }
}