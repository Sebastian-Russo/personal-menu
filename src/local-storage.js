export const loadAuthToken = () => {
    const user = localStorage.getItem('user');
    console.log('getting user', user)
    return JSON.parse(user) //  returns { authToken: <whatever the token is>, userId: <whatever the userId is> }
};

export const saveAuthToken = (authToken, userId, username, groceryList) => {
    try {
        console.log('storing in local storage', authToken, userId, username, groceryList)
        localStorage.setItem('user', JSON.stringify({
          authToken,
          id: userId,
          username,
          groceryList
        }));
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        console.log('clear auth token and user data in local storage')  
        localStorage.removeItem('user');
    } catch (e) {}
};


