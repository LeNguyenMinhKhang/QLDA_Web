import React, { use } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const[input, setInput] = useState({
        email: "",
        password: "",
        role: "",

    })

    const changeEventHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const changeFileHandler = (e) => {
        setInput({
            ...input,
            file: e.target.files?.[0]
        })
    }
const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${USER_API_ENDPOINT}/register`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if(res.data.success){
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-300 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-2xl mb-5'></h1>

                    <div className='my-2'>

                        <Label>Email </Label>
                        <Input
                            type="text"
                            value={input.email}
                            onChange={changeEventHandler}
                            name="email"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            name="password"
                            placeholder="example@gmail.com "
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input 
                                type="radio"
                                name = "role"
                                value="student"
                                checked = {input.role === "student"}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input 
                                type="radio"
                                name = "role"
                                value="Recruiter"
                                checked = {input.role === "Recruiter"}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>

                        </RadioGroup>

                    </div>
                    <Button type = "submit" className={'w-full my-4'}>Logn In</Button>
                    <span className='text-sm'>Already have an account? 
                        <Link to="/Signup" className="text-blue-500 ">
                            Sign up
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login
