import { Publication } from "./publication";
import { User } from "./user";

export class Comments {
    id:number;
    comment_field:string;
    like_count:number;
    dislike_count:number;
    user:User;
    pub_id:Publication;
    createdAt:Date;
}
