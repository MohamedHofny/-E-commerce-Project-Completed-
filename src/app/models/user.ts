// export class User {
   
//     constructor( private userName:string,private age:number){}
// }
// const user1=new User('Ahmed',25);
interface IUser{
    salary:string;
    address:string;
}

class User implements IUser{
        constructor(public salary:string,public  adress:string){}
    }

