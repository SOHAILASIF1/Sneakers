const backendDomain="http://localhost:4000"
const allApi={
    signup:{
        url:`${backendDomain}/api/user/signup`,
        method:"post"
    },
    login:{
        url:`${backendDomain}/api/user/login`,
        method:"post"
    },
    userDetail:{
        url:`${backendDomain}/api/user/details`,
        method:"get"
    },
    logout:{
        url:`${backendDomain}/api/user/logout`,
        method:"get"
    }
}
export default allApi
