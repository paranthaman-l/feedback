import axios from "axios";

const authApi = axios.create({
    baseURL:"https://feedback-woad-psi.vercel.app/api/auth"
})
const userApi = axios.create({
    baseURL:"https://feedback-woad-psi.vercel.app/api/user"
})
const feedBackApi = axios.create({
    baseURL:"https://feedback-woad-psi.vercel.app/api/feedback"
})

export {authApi,userApi,feedBackApi};