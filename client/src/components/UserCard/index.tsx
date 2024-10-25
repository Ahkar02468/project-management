import { User } from '@/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
     user: User
}

const UserCard = ({ user }: Props) => {
     return (
          <div className='flex items-center rounded border p-4 shadow'>
               {user.profilePictureUrl && (
                    <Image
                         alt='Profile Picture'
                         src={`https://pm-sc-images.s3.us-east-1.amazonaws.com/p1.jpeg`}
                         width={32}
                         height={32}
                         className='rounded-full'
                    />
               )}
               <div>
                    <h3>{user.username}</h3>
                    <p>{user.username}</p>
               </div>
          </div>
     )
}

export default UserCard