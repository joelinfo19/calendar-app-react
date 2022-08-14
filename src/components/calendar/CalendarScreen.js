import React, {useEffect, useState} from "react";
import {Navbar} from "../ui/Navbar";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {messages} from "../../helpers/calendar-messages-es";
import moment from 'moment'
import 'moment/locale/es'

import "react-big-calendar/lib/css/react-big-calendar.css"
import {CalendarEvent} from "./CalendarEvent";
import {CalendarModal} from "./CalendarModal";
import {useDispatch, useSelector} from "react-redux";
import {uiOpenModal} from "../../actions/ui";
import {eventClearActiveEvent, eventSetActive, eventStartLoading} from "../../actions/events";
import {AddNewFab} from "../ui/AddNewFab";
import {DeleteEventFab} from "../ui/DeleteEventFab";

const localizer = momentLocalizer(moment) // or globalizeLocalizer
moment.locale('es')

// const events=[{
//     title:"cumpleaniosMNOOO",
//     start: moment().toDate(),
//     end: moment().add(2,"hours").toDate(),
//     bgcolor:'#fafafa',
//     user:{
//         _id:'2222',
//         name:'Fernando'
//     }
// }]


export const CalendarScreen=()=>{
    //localStorage for keep screen
    const dispatch=useDispatch()
    const {events,activeEvent}=useSelector(state => state.calendar)
    const {uid}=useSelector(state => state.auth)
    const [lastView,setLastView]=useState( localStorage.getItem('lastView')||'month')

    useEffect(()=>{
        dispatch(eventStartLoading())
    },[dispatch])

    const onDoubleClick=(e)=>{
        // console.log(e)
        dispatch(uiOpenModal())

    }
    const onSelectEvent=(e)=>{
        dispatch(eventSetActive(e))
        // dispatch(uiOpenModal())
        // console.log(e)

    }
    const onViewChange=(e)=>{
        setLastView(e)
        localStorage.setItem('lastView',e)

    }
    const eventStyleGetter=(event,start,end,isSelected)=>{


        const style={
            backgroundColor:(uid===event.user._id)?'#367CF7':'red',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }
        return {style}
    }
    const onSelectSlot=(e)=>{
        console.log(e)
        dispatch(eventClearActiveEvent())
    }
    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                onSelectSlot={onSelectSlot}
                selectable={true}
                components={{
                    event:CalendarEvent
                }}
            />
            <AddNewFab/>
            {
                (activeEvent)&&<DeleteEventFab/>
            }
            <CalendarModal/>


        </div>
    )
}
