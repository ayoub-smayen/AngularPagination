export class Users {
    public userName: String ;
    public firstName: String ;
    public  lastName: String ;
    public password : String ; 
    public email : String ;
    constructor(userName: String , firstName: String , lastName: String , password : String , email : String ){
        this.userName=userName;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
    }
}
