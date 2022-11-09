class UserInterfaceData{
    constructor(){
        if(this.constructor === UserInterfaceData)
            throw new ("Object invalid, Person is a abstract class")
    }

    select = () => {
        throw new Error(" Added abstract Method has no implementation");
    }

    selectById = (id) => {
        throw new Error(" Added abstract Method has no implementation");
    }

    login = (name, password) => {
        throw new Error(" Added abstract Method has no implementation");
    }

    insert = (values) => {
        throw new Error(" Added abstract Method has no implementation");
    }
    updateRefreshTokenId = (value, id) => {
        throw new Error(" Added abstract Method has no implementation");
    }
    selectRefreshTokenId = (value) => {
        throw new Error(" Added abstract Method has no implementation");
    }

    selectRefreshTokenId = (value) => {
        throw new Error(" Added abstract Method has no implementation");
    }

}

export default UserInterfaceData;