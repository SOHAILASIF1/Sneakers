const backendDomain="http://localhost:4000"
const allApi={
    signup:{
        url:`${backendDomain}/api/user/signup`,
        method:"post"
    },
    login:{
        url:`${backendDomain}/api/user/login`,
        method:"post"
    }
}
export default allApi
