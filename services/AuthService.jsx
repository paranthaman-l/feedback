import axios from "axios";

const { authApi } = require("@/apis/axios");

class AuthService {
    login(login) {
        return authApi.post("/login",login);
    }
    sendOTPtoEmail(signup) {
        return authApi.post("/sendOTP/email", { email: signup.email });
    }
    signUp(signUp) {
        return authApi.post("/signup",signUp);
    }

    checkPasswordStrength(password){
        return axios.post("http://localhost:1612/predict",{user_password:password});
    }
}

export default new AuthService();