import axios from "axios";

type postingType = {
    url: string,
    body: any,
    contentType: string
}

export default class Http {
    static async get(url: string) {
        try {
            const fetchData = await axios.get(url);
            return fetchData;
        } catch (error) {
            alert(`erreur ${error}`);
        }
    }
    static async post(url:string, body:any, contentType:string) {
        try {
            const postData = await axios.post(url, body, {
                headers: {
                    "Content-Type": contentType
                }
            })
            return postData
        } catch (error) {
            
        }
    }
    static put() {
        
    }
    static delete() {
        
    }
}