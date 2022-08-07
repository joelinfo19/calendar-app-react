import axios from "axios";


const baseUrl= process.env.REACT_APP_API_URL

const axiosWithoutToken=(endpoint,data,method='GET')=>{
    const url=`${baseUrl}/${endpoint}`
    if(method==='GET'){
        return axios.get(url)
    }
    else{
        return axios({
            method,
            url,
            data:data
        })
    }
}
const axiosWithToken=(endpoint,data,method='GET')=>{
    const url=`${baseUrl}/${endpoint}`
    const token=localStorage.getItem('token')||''
    if(method==='GET'){
        return axios({
            url,
            method,
            headers:{
                'x-token':token
            }
        })
    }
    else{
        return axios({
            method,
            headers:{
                'x-token':token
            },
            url,
            data:data
        })
    }
}

export {
    axiosWithoutToken,
    axiosWithToken
}
