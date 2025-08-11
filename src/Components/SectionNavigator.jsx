import React from 'react'
import './SectionNavigator.css'

const SectionNavigator = ({fn, act}) => {

  return (
    <>
        <div className="container-md container-fluid mt-3 p-3 bg-white-50 rounded" id='secNav'  >
            <div className='d-flex flex-column flex-lg-row justify-content-lg-evenly gap-1'>
                <button style={ act === 'achieve' ? {color:"white", backgroundColor:"#1c3556"} : {color:"inherit", backgroundColor:"inherit"} } onClick={()=> fn('achieve')}>Achievements</button>
                <button style={ act === 'highlights' ? {color:"white", backgroundColor:"#1c3556"} : {color:"inherit", backgroundColor:"inherit"} } onClick={()=> fn('highlights')}>Highlights</button>
                <button style={ act === 'vip' ? {color:"white", backgroundColor:"#1c3556"} : {color:"inherit", backgroundColor:"inherit"} } onClick={()=> fn('vip')}>VIP Message</button>
                <button style={ act === 'news' ? {color:"white", backgroundColor:"#1c3556"} : {color:"inherit", backgroundColor:"inherit"} } onClick={()=> fn('news')}>News And Events</button>
                <button style={ act === 'sona' ? {color:"white", backgroundColor:"#1c3556"} : {color:"inherit", backgroundColor:"inherit"} } onClick={()=> fn('sona')}>Benefits</button>
            </div>
        </div>
    </>
  )
}

export default React.memo(SectionNavigator)