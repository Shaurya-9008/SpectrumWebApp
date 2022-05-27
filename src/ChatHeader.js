import {  VideoCall, HelpRounded, MapOutlined, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader({ channelName }) {
    return (
        <div className = "chatHeader">
            <div className = "chatHeader__left">
                <h3>
                    <span className = "chatHeader__hash">
                        #
                    </span>
                        {channelName}
                </h3>
            </div>
            <div className = "chatHeader__right">
                <a href='http://maps.google.com'><MapOutlined /></a>>
                <a href='https://spectrum-video-conference.herokuapp.com/'><VideoCall /></a>>
                <PeopleAltRounded />

                <div className = "chatHeader__search">
                    <input placeholder = "search" />
                    <SearchRounded />
                </div>
                <SendRounded />
                <a href='./help.jpeg'><HelpRounded /></a>
            </div>
        </div>
    )
}

export default ChatHeader
