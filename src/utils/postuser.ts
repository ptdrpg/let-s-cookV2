import UserService from "../service/userService";

const postuser = async (user:any) => {
    const res = UserService.postUser('http://localhost:4400/api/user', user, 'application/json');
    localStorage.clear();
    const fetchData = res;
    const fetchToken = await fetchData.data.token;
    const refreshToken = await fetchData.data.refreshToken;
}

export default postuser;