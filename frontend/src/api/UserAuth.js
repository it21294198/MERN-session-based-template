import axios from 'axios'

const signin = async (user) => {
    const result = await axios.post('/api/auth/signin',user);
    return result;
}

const signup = async (user) => {
    const result = await axios.post('/api/auth/signup',user);
    return result;
}

const hasauth = async ()

export { signin, signup }