import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import store from '../../redux/store'
import { Loader2 } from 'lucide-react'


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(res.data.success);
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            const errorMessage = error?.response?.data?.message || "Something went wrong!";
            toast.error(errorMessage);
        } finally {
            dispatch(setLoading(false));
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
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>

                        </RadioGroup>

                    </div>
                    {
                        loading?<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</Button>
                               : <Button type="submit" className={'w-full my-4'}>Login</Button>
                    }
                    <span className='text-sm'>Already have an account?
                        <Link to="/signup" className="text-blue-500 ">
                            Sign up
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login
