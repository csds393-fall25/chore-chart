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
                    difficulty: user.difficulty,
                    name: user.name,
                    email: user.email,
                    password_hash: user.password_hash,
                    totalPoints: 0,
                    role: user.role,
                    householdId: user.householdId,
                    maxChoreTime: user.maxChoreTime
                    


            })});
            if(!response.ok) {
                 return response.status          
            } 
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
    
    // Signin
    static async login(user) {
    
        
        try {
            const response = await fetch(baseURL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email,
                    password_hash: user.password_hash
                })
            });

            
            if(!response.ok) {
          
                throw new Error(`Response status: ${response.status}`);
            }
       
            const result = await response.json();
              
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // update user
    static async updateUser(userId, userData) {

        try {
            var stringified;
            if(Object.hasOwn(userData, 'password_hash')) {
                stringified = JSON.stringify({
                    name: userData.name,
                    email: userData.email,
                    password_hash: userData.password_hash,
                    difficulty: userData.difficulty,
                    maxChoreTime: userData.maxChoreTime
                })
            } else {
                stringified = JSON.stringify({
                    name: userData.name,
                    email: userData.email,
                    difficulty: userData.difficulty,
                    maxChoreTime: userData.maxChoreTime
                })
            }

            const response = await fetch(`${baseURL}/user/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: stringified
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

       // Delete user
    static async deleteUser(userId) {
        try {
            const response = await fetch(`${baseURL}/user/${userId}`, {
                method: "DELETE"
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Delete user
    static async deleteUser(userId) {
        try {
            const response = await fetch(`${baseURL}/user/${userId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Create household
    static async createHousehold(household) {
        try {
            const response = await fetch(baseURL + "/household", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: household.name
                })
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Get household 
    static async fetchHousehold(householdId) {

        try {
            const response = await fetch(`${baseURL}/household/${householdId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

        // Get household by join code
    static async fetchHouseholdByJoin(joinCode) {
        try {
            const response = await fetch(`${baseURL}/household/joinCode/${joinCode}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    // Edit household
    static async editHousehold(household) {
        try {
            const response = await fetch(`${baseURL}/household/${household.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: household.name
                })
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Delete household
    static async deleteHousehold(householdId) {
        try {
            const response = await fetch(`${baseURL}/household/${householdId}`, {
                method: "DELETE"
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Get all chores in household
    static async fetchChores(householdId) {
        try {
            const response = await fetch(`${baseURL}/chores?householdId=${householdId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Get all chores by assignee ID
    static async fetchChoresByAssignee(assigneeId) {
        try {
            const response = await fetch(`${baseURL}/chores/assignee/${assigneeId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Get one chore by its ID
    static async fetchChore(choreId) {
        try {
            const response = await fetch(`${baseURL}/chores/${choreId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Create chore
    static async createChore(chore) {
        try {
            const response = await fetch(`${baseURL}/chores`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: chore.name,
                    description: chore.description,
                    difficulty: chore.difficulty,
                    location: chore.location,
                    estimatedTime: chore.estimatedTime,
                    dueDate: chore.dueDate,
                    repeat: chore.repeat,
                    householdId: chore.householdId,
                    assigneeId: chore.assigneeId
                })
            });

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Edit Chore
    static async editChore(choreId, chore) {
        try {
            const response = await fetch(`${baseURL}/chores/${choreId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: chore.name,
                    description: chore.description,
                    difficulty: chore.difficulty,
                    location: chore.location,
                    estimatedTime: chore.estimatedTime,
                    dueDate: chore.dueDate,
                    repeat: chore.repeat,
                    householdId: chore.householdId,
                    assigneeId: chore.assigneeId
                })
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Delete Chore
    static async deleteChore(choreId) {
        try {
            const response = await fetch(`${baseURL}/chore/${choreId}`, {
                method: "DELETE"
            });

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    static async updateUserPoints(userId, points) {
        try {
            const response = await fetch(`${baseURL}/user/${userId}/points`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({points: points})
            })
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default FetchService