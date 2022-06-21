import axios from "axios";

export const LoginService = async (formData) => {
    try {
        const response = await axios.post('/api/auth/login', formData)
        if (response.status === 200 || response.status === 201) {

            // adding userinfo to local storage
            localStorage.setItem('userDetails',
                JSON.stringify({
                    token: response.data.encodedToken,
                    user: response.data.foundUser
                }))

            return response.data
        }

    } catch (error) {
        console.log('error', error)

    }

}

export const SignUpService = async (formData) => {
    try {
        const response = await axios.post('/api/auth/signup', formData)
        if (response.status === 200 || response.status === 201) {
            return response.data
        }
    }
    catch (error) {
        console.log("error", error)
    }

}
