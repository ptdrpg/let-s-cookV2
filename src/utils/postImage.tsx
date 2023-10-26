import axios from "axios";
import UserService from "../service/userService";

type putingType = {
    [name: string]: string,
}

const postImage = async (url:string, body:any, contentType:string) => {
    const res = await UserService.putUser(url, body, contentType)
}

export default postImage;