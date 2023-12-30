import axios from 'axios'

const signin = async (user) => {
    const result = await axios.post('/api/auth/signin',user);
    return result;
}

const signup = async (user) => {
    const result = await axios.post('/api/auth/signup',user);
    return result;
}

const signout = async () => {
    try {
      const result = await axios.get('/api/auth/signout');
      return result;
    } catch (error) {
      console.error("Error during signout:", error);
      throw error; // Re-throw the error to propagate it to the caller if needed
    }
};

const hassignned = async () => {
    const result = await axios.get('/api/auth/hasauth')
    return result
}

export { signin, signup, signout ,hassignned }