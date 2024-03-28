import React from 'react'

function Conversation() {
  return (

    <>
        <div className='flex gap-2 items-centerrounded py-4 px-3 cursor-pointer hover:bg-blueShadeHover'>
          <div className='avatar online'>
            <div className='w-12 rounded-full'>
              <img
                    src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                    alt='user avatar'
                  />
                      </div>
                  </div>
      
                  <div className='flex flex-col flex-1'>
                      <div className='flex gap-3 justify-between'>
                          <p className='font-bold text-white'>John Doe</p>
                          <span className='text-xl'>🎃</span>
                      </div>
                  </div>
          </div>
    
        {/* <div className='divider my-0 py-0 h-1' /> */}
        <div className='border-b mx-4'></div>
    </>
  )
}

export default Conversation
