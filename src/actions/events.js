import {types} from "../types/types";
import {axiosWithToken} from "../helpers/axios";
import {prepareEvents} from "../helpers/prepareEvents";
import Swal from "sweetalert2";


export const startEventAddNew=(event)=>{
    return async (dispatch,getState)=>{
        const {uid,name}=getState().auth
        try{
            const resp=await axiosWithToken('events',event,'POST')
            const {data}=resp
            if(data.ok){
                event.id=data.eventDB._id
                event.user={
                    _id:uid,
                    name:name
                }
                dispatch(eventAddNew(event))
            }
            // console.log(resp)

        }catch (e) {
            console.log(e)

        }


    }
}

const eventAddNew=(event)=>({
    type:types.eventAddNew,
    payload:event
})

export const eventSetActive=(event)=>({
    type:types.eventSetActive,
    payload:event
})
export const eventClearActiveEvent=()=>({
    type:types.eventClearActiveEvent,
})
export const startEventUpdated=(event)=>{
    console.log(event)

    return async (dispatch,getState)=>{
        try{
            const resp=await axiosWithToken(`events/${event._id}`,event,'PUT')
            const {data}=resp
            if(data.ok){
                dispatch(eventUpdated(event))
            }
            // else{
            //     console.log(data)
            // }
        }
        catch(e) {
            console.log(e)
            await Swal.fire('Error',e.response.data.msg,'error')
        }
    }
}
const eventUpdated=(event)=>( {
    type:types.eventUpdated,
    payload:event,
})

export const eventDeleted=()=>({
    type:types.eventDeleted,
})
export const eventStartLoading=()=>{
    return async (dispatch)=>{
        try {
            const resp=await axiosWithToken('events')
            const {data}=resp
            const events=prepareEvents(data.events)
            if(data.ok){
                // console.log(data.events)
                dispatch(eventLoaded(events))
            }

        }catch (e) {
            console.log(e)
        }
    }
}

const eventLoaded=(events)=>({
        type:types.eventLoaded,
        payload:events
    }

)

