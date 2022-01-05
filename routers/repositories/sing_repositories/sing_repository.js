class SingRepository{
    constructor(){

    }

    logIn = async (user) =>{
        return new Promise((resolve, reject) => {
            console.log(user);
            resolve(true);
        });
    }

    logOut = async () =>{
        
    }
}

module.exports = SingRepository;