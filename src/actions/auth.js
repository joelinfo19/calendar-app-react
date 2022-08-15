
//return a callback because is asynchronous and thunk handling this
import {axiosWithoutToken, axiosWithToken} from "../helpers/axios";
import {types} from "../types/types";
import Swal from "sweetalert2";
import {eventCleanedLogout} from "./events";

export const startLogin=(email, password)=>{
    // const dispatch=useDispatch()
    return async (dispatch)=>{

        try{
            const resp=await axiosWithoutToken('auth',{email,password},'POST')
            // const body= await ()
            const {data}=resp
            if(data.ok){
                localStorage.setItem('token',data.token)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login({
                    uid:data.user._id,
                    name:data.user.name
                }))
            }

        }
        catch (e){

            await Swal.fire('error',e.response.data.msg,'error')

        }
    }
}
export const startRegister=(name,email,password)=>{
    return async (dispatch)=>{
        try {
            const resp=await axiosWithoutToken('auth/new',{
                name,
                email,
                password
            },'POST')
            const {data}=resp
            if(data.ok){
                localStorage.setItem('token',data.token)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login({
                    uid:data.user._id,
                    name:data.user.name
                }))
            }

        }
        catch (e){
            console.log(e)
            await Swal.fire('error',e.response.data.msg,'error')

        }

    }

}
export const startChecking=()=>{
    return async (dispatch)=>{
        try {
            const resp=await axiosWithToken('auth/renew')
            const {data}=resp
            console.log(data)
            if(data.ok){
                localStorage.setItem('token',data.newToken)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login({
                    uid:data.uid,
                    name:data.name
                }))
            }

        }
        catch (err){
            const mute=err
            // console.log(err.request)
            // await Swal.fire('error',e.response.data.msg,'error')
            dispatch(checkingFinish())
        }



    }

}
const checkingFinish=()=>({
    type:types.authCheckingFinish
})

const login=(user)=>({
    type:types.authLogin,
    payload:user
})

export const startLogout=()=>{
    return (dispatch)=>{
        localStorage.clear()
        dispatch(eventCleanedLogout())

        dispatch(logout())
    }
}


const logout=()=>({type:types.authLogout})
