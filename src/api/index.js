import axios from 'axios'

const URL = 'https://fakestoreapi.com/products';

export const FetchProduct = () => {
    return axios.get(URL)
        .then(response => {
            return response.data
        })
        .catch(error => console.log(error))

}