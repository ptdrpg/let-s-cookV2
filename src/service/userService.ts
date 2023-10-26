import Http from "./http";

type putingType = {
    [name: string]: string,
}

export default class UserService extends Http {
    static async getUser(url: string) {
        try {
            const res = await this.get(url);
            return res;
        } catch (error) {
            alert('tsisy lty ah')
        }
    }
    static async postUser(url: string, body:any, contentType:string, data?: FormData) {
        try {
            const res = await this.post(url, body, contentType, data);
            
            return res;
        } catch (error) {
            alert('mamorona compte amizay e');
        }
    }
    static async putUser(url:string, body:putingType, contentType:string){
        try {
            const res = await this.put(url, body, contentType);
            return res;
        } catch (error) {
            alert('mamorona compte amizay e');
        }
    }
}