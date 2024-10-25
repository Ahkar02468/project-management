import Header from '@/components/Header'
import React from 'react'

const Setting = () => {
     const userSetting = {
          username: "jondoe",
          email: "jondoe@email.com",
          teamname: "Dev Team",
          roleName: "Developer",
     }
     const labelStyles = "block text-sm font-medium dark:text-white"
     const textStyles = "mt-1 block w-full border boder-gray-300 rounded-md shadow-sm p-2 dark:text-white"
     return (
          <div className='p-8'>
               <Header name='Setting' />
               <div className='space-y-4'></div>
               <div>
                    <label className={labelStyles}>Username</label>
                    <div className={textStyles}>{userSetting.username}</div>
               </div>
               <div>
                    <label className={labelStyles}>Email</label>
                    <div className={textStyles}>{userSetting.email}</div>
               </div>
               <div>
                    <label className={labelStyles}>Teamname</label>
                    <div className={textStyles}>{userSetting.teamname}</div>
               </div>
               <div>
                    <label className={labelStyles}>Role</label>
                    <div className={textStyles}>{userSetting.roleName}</div>
               </div>
          </div>
     )
}

export default Setting