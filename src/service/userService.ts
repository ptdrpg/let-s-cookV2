import Http from "./http";

type postingType = {
    url: string,
    body: any,
    contentType: string
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
    static async postUser(url: string, body:any, contentType:string) {
        try {
            const res = await this.post(url, body, contentType);
            // console.log(res);
            
            return res;
        } catch (error) {
            alert('mamorona compte amizay e');
        }
    }
}