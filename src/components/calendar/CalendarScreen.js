import React, {useState} from "react";
import {Navbar} from "../ui/Navbar";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {messages} from "../../helpers/calendar-messages-es";
import moment from 'moment'
import 'moment/locale/es'

import "react-big-calendar/lib/css/react-big-calendar.css"
import {CalendarEvent} from "./CalendarEvent";

const localizer = momentLocalizer(moment) // or globalizeLocalizer
moment.locale('es')

const events=[{
    title:"cumpleanios",
    start: moment().toDate(),
    end: moment().add(2,"hours").toDate(),
    bgcolor:'#fafafa',
    user:{
        _id:'2222',
        name:'Fernando'
    }
}]


export const CalendarScreen=()=>{
    //localStorage for keep screen
    const [lastView,setLastView]=useState( localStorage.getItem('lastView')||'month')
    const onDoubleClick=(e)=>{
        // console.log(e)
    }
    const onSelectEvent=(e)=>{
        // console.log(e)

    }
    const onViewChange=(e)=>{
        setLastView(e)
        localStorage.setItem('lastView',e)

    }
    const eventStyleGetter=(event,start,end,isSelected)=>{
        const style={
            backgroundColor:'#367CF7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }
        return {style}
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
                components={{
                    event:CalendarEvent
                }}
            />
        </div>
    )
}
