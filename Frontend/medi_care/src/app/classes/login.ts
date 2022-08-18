export class Login {
    loginId:number;
    loginName:string;
    loginPassword:string;
    loginStatus:string;
    constructor(loginId:number,loginName:string,loginPassword:string,loginStatus:string){
        this.loginId=loginId;
        this.loginName=loginName;
        this.loginPassword=loginPassword;
        this.loginStatus=loginStatus;
    }
}
