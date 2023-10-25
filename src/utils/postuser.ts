import UserService from "../service/userService";


const postuser = async (user:any) => {
    const res = await UserService.postUser('http://localhost:4400/api/user', user, 'application/json');
    localStorage.clear();
    // const fetchData = res;
    const fetchToken = res?.data.token;
    const fetchRefresh = res?.data.refreshToken;
    const fetchId = res?.data.data._id;
    localStorage.setItem('token', fetchToken);
    localStorage.setItem('refreshToken', fetchRefresh);
    localStorage.setItem('id', fetchId);
}

export default postuser;