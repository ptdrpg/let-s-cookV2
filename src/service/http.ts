import axios from "axios";

type putingType = {
    [name: string]: string,
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
    static async post(url:string, body:any, contentType:string, data?: FormData) {
        try {
            const postData = await axios.post(url, body, {
                headers: {
                    "Content-Type": contentType
                },

            })
            return postData
        } catch (error) {
            
        }
    }
    static async put(url:string, body:putingType, contentType:string) {
        try {
            const postData = await axios.put(url, body, {
                headers: {
                    "Content-Type": contentType
                }
            })
            return postData
        } catch (error) {
             
        }
    }
    static delete() {
        
    }
}