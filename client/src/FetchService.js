const baseURL = "http://localhost:3000/api"
class FetchService {

    // Sign up
    static async signup(user) {
        try {
            const response = await fetch(baseURL + "/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password_hash: user.password_hash
            })});
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } 
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
    
    // Signin
}

export default FetchService