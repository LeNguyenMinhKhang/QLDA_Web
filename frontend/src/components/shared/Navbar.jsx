import React from 'react';
import {Link} from 'react-router-dom';
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover';
import {Avatar,AvatarImage} from '../ui/avatar';
import {Button} from '../ui/button'
import {LogOut, User, User2} from 'lucide-react'

const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Jobs <span className='text-[#ff0000]'> Portal </span></h1>
                </div>
                <div className='flex items-canter gap-2'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button className="bg-[#2190f8]" >Sign up</Button>
                            </div>
                        ) : (
                            <Popover>
                            <PopoverTrigger asChild>
                                <Avatar  className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-88">
                                <div className=''>
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar  className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Name</h4>
                                            <p className='text-sm text-muted-foreground'> AAAAA </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2/>
                                            <Button variant="link">View profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut/>
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
    
                        </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
