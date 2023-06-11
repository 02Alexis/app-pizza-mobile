import axios from 'axios';

const API_FAKE = 'http://localhost:4000/administrators';

export const GetAdmin = async (userName, paswoord) => {
    try {
        const url = `${API_FAKE}?userName=${userName}&paswoord=${paswoord}`;
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}