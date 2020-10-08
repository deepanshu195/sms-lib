class Credentials{
    private creds:object={};
    constructor() {
    }
    setCreds(credentials:object){
        this.creds=credentials;
    }

    getCreds(service:string){
        // @ts-ignore
        return this.creds[service];
    }
}
let CredInstance;
if (!CredInstance){
    CredInstance = new Credentials();
}
export default CredInstance;