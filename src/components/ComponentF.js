import React from 'react'
import {UserContext,ChannelContext} from '../App'
function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                   user => {
                      
                       return (
                           <ChannelContext.Consumer>
                               {
                                   Channel => {
                                       return <div>User context value {user}, channel context value {Channel}</div>
                                   }
                               }
                           </ChannelContext.Consumer>
                       )
                   }      
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
