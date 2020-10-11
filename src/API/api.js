import axios from 'axios';


const instance = axios.create({
	baseURL: `https://jsonplaceholder.typicode.com/users/`,
})


export const usersApi = {
	getUsersData() {
		return instance.get()

	},

	deleteUser(userId) {
		return instance.delete(`${userId}`)
	},




}
