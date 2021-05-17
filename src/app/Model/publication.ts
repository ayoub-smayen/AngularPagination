import { User } from "./user";

export class Publication {
    id!: number;
    title!: string;
    publication_txt!: string;
    user:User;
    likecount!: number;
    dislikecount!:number;
    commentsNumber!:number;  
    createdAt:Date;
    pic:any;
}
