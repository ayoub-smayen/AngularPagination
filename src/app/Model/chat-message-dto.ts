import { User } from "./user";

export class ChatMessageDTO {
    user_name: string;
    user_lastname:string;
    img:any;
    date:Date = new Date();
    message: string;

    constructor(user_name: string,user_lastname:string,img:any,date:Date, message: string){
        this.user_name = user_name;
        this.user_lastname = user_lastname;
        this.img = img;
        this.date = date;
        this.message = message;
    }
}
