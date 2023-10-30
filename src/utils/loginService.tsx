import UserService from "../service/userService";


const loginService = async (url: string,user: any, navigate: any, setConnected:React.Dispatch<React.SetStateAction<boolean>>) => {
    const res = await UserService.postUser(url, user, 'application/json');
    localStorage.clear();
    const fetchToken = res?.data.token;
    const fetchRefresh = res?.data.refreshToken;
    const fetchId = res?.data.user._id;
    const fetchavatar = res?.data.user.avatar.nameHashed;
    
    if (fetchToken) {
        localStorage.setItem('token', fetchToken);
        localStorage.setItem('refreshToken', fetchRefresh);
        localStorage.setItem('id', fetchId);
        localStorage.setItem('avatar', fetchavatar)
        
        const getToken = localStorage.getItem('token');
        if (getToken) {
            navigate('/');
            setConnected(false);
        }
    }
}

export default loginService;