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
                })
            });
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
            let temp = {};

            if(Object.hasOwn(userData, 'name')){
                temp.name = userData.name
            } 
             if(Object.hasOwn(userData, 'email')){
                temp.email = userData.email
            } 

             if(Object.hasOwn(userData, 'password_hash')){
                
                temp.password_hash = userData.password_hash
               
            } 

              if(Object.hasOwn(userData, 'difficulty')){
                
                  temp.difficulty = userData.difficulty
                
            }
            
               if(Object.hasOwn(userData, 'maxChoreTime')){
              
                temp.maxChoreTime = userData.maxChoreTime
                
            }

                if(Object.hasOwn(userData, 'householdId')){
              
                temp.householdId=  userData.householdId
                
            }

                 if(Object.hasOwn(userData, 'role')){
              
                temp.role=  userData.role
                
            }
            
          stringified = JSON.stringify(temp)

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
        console.log("HI")
        console.log(joinCode)
        try {
            const response = await fetch(`${baseURL}/household/joinCode/${joinCode}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
            console.log("In here")
            return false;
        }
    }

    // Edit household
    static async editHousehold(household) {
        console.log(household)
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
    // Get avatar props to display in the store
    static async getAvatarProps() {
        try {
            const response = await fetch(`${baseURL}/avatar-props`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
    // Get avatar of a user
    // Returns a list of props that make up the avatar
    static async getAvatar(userId) {
        try {
            const response = await fetch(`${baseURL}/avatar/${userId}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Get ids of props owned by user
    static async getOwnedProps(userId) {
        try {
            const response = await fetch(`${baseURL}/avatar-props/${userId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const ownedPropIds = await response.json();
            return ownedPropIds;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Buy prop
    static async buyProp(userId, propId) {
        try {
            const response = await fetch(`${baseURL}/prop/buy`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    userId: userId, 
                    propId: propId,
                })
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

    // Unbuy prop
    static async unbuyProp(userId, propId) {
        try {
            const response = await fetch(`${baseURL}/prop/unbuy`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    userId: userId, 
                    propId: propId,
                })
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

    // Modify a user's avatar by equipping a prop
    // Takes the user id and a prop object with id (int) and type (string)
    // Returns the new avatar (list of props)
    static async equipProp(ownerId, prop) {
        try {
            const response = await fetch(`${baseURL}/prop/equip`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    ownerId: ownerId, 
                    prop: {
                        id: prop.id,
                        type: prop.type,
                    },
                })
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

}

export default FetchService