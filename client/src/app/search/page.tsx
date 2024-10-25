"use client"

import { useSearchQuery } from '@/state/api'
import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import Header from '@/components/Header'
import TaskCard from '@/components/TaskCard'
import ProjectCard from '@/components/ProjectCard'
import UserCard from '@/components/UserCard'

const Search = () => {
     const [searchTerm, setSearchTerm] = useState("")
     const { data: searchResults, isLoading, isError } = useSearchQuery(searchTerm, {
          skip: searchTerm.length < 3
     })
     const handleSearch = debounce(
          (event: React.ChangeEvent<HTMLInputElement>) => {
               setSearchTerm(event.target.value)
          }, 500,
     )
     useEffect(() => {
          return handleSearch.cancel
     }, [handleSearch.cancel])
     return (
          <div className='p-8'>
               <Header name='Search' />
               <div>
                    <input
                         type="text"
                         placeholder='Search...'
                         className='w-1/2 rounded border p-3 shadow'
                         onChange={handleSearch}
                    />
               </div>
               <div className='p-5'>
                    {isLoading && (
                         <p>Loading...</p>
                    )}
                    {isError && (
                         <p>Error occur while fetching search results.</p>
                    )}
                    {!isLoading && !isError && searchResults && (
                         <div>
                              {searchResults.tasks && searchResults.tasks?.length > 0 && (
                                   <div>
                                        <h2 className='text-xl font-bold'>Tasks</h2>
                                        <ul>
                                             {searchResults.tasks.map((task) => (
                                                  <TaskCard key={task.id} task={task} />
                                             ))}
                                        </ul>
                                   </div>
                              )}

                              {searchResults.projects && searchResults.projects?.length > 0 && (
                                   <div>
                                        <h2 className='text-xl font-bold'>Projects</h2>
                                        <ul>
                                             {searchResults.projects.map((project) => (
                                                  <ProjectCard key={project.id} project={project} />
                                             ))}
                                        </ul>
                                   </div>
                              )}

                              {searchResults.users && searchResults.users?.length > 0 && (
                                   <div>
                                        <h2 className='text-xl font-bold'>Users</h2>
                                        <ul>
                                             {searchResults.users.map((user) => (
                                                  <UserCard key={user.userId} user={user} />
                                             ))}
                                        </ul>
                                   </div>
                              )}
                         </div>
                    )}
               </div>
          </div>
     )
}

export default Search