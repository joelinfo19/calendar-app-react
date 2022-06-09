import React from 'react'

export const CalendarEvent=({event})=>{
    const {title,user}=event
    // console.log(event)
    return(
        <div>
            <span>
                {title}
            </span>
            <span>
                {user.name}
            </span>

        </div>
    )
}
