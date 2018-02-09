import axios from 'axios';

const TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => axios.get(TODO_ENDPOINT);
