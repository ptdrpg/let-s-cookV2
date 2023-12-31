import UserService from "../service/userService";


const postuser = async (url: string,user: any, navigate: any, setConnected:React.Dispatch<React.SetStateAction<boolean>>) => {
    const res = await UserService.postUser(url, user, 'application/json');
    localStorage.clear();
    // const fetchData = res;
    const fetchToken = res?.data.token;
    const fetchRefresh = res?.data.refreshToken;
    const fetchId = res?.data.data._id;
    localStorage.setItem('token', fetchToken);
    localStorage.setItem('refreshToken', fetchRefresh);
    localStorage.setItem('id', fetchId);
    const getToken = localStorage.getItem('token');
    if (getToken) {
        navigate('/');
        setConnected(false);
    }
}

export default postuser;