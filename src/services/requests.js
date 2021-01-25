import axios from './axios';

export async function getResult(searchTerm, onResponse, onCatch) {
  return await axios.get(`/search?q=${searchTerm}`)
    .then(onResponse)
    .catch(onCatch);
}
