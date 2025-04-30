import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import  AppliedJobTable  from './AppliedJobTable'


const skill = ["Html", "Css", "Javascript", "React", "Nodejs"]
const Profile = () => {
    const isResume = true;
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto bg--white border border-gray-300 rounded-2xl p-8 my-5 '>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='w-24 h-24'>
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt='profile' />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>AAAA</p>
                        </div>
                    </div>
                    <Button className='text-right' variant='outline'><Pen /></Button>
                </div>
                <div>
                    <div className='flex items-center gap-2 my-4'>
                        <Mail />
                        <span>example@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2 my-4'>
                        <Contact />
                        <span>0987654321</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skill.length !== 0 ? skill.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href='' className='text-blue-500 w-full hover:underline cursor-pointer'>AAA</a>: <span>NA</span>
                    }
                </div>
                <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable/>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
