class FetchService {
    // Sign up
    static async signup(user) {
        try {
            console.log(user.name)
            console.log(user.email)
            console.log(user.password_hash)
            console.log(JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password_hash: user.password_hash
            })
            
            )
            const response = await fetch("/api/signup", {
                method: "POST",
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