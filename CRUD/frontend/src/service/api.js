import axios from 'axios'

const URL = '';
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/adduser`, data)
    } catch (error) {
        console.log(error);
    }
}