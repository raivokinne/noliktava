import { Head, Link, useForm } from '@inertiajs/react';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route('register.store'));
    };

    return (

        <>
        
            <div className=" w-screen h-screen flex justify-center items-center bg-slate-200">

                <div className="  h-max w-[400px]">
                    <h1 className=" text-center font-black text-3xl mb-2">Register your account</h1>
                    <div className=' p-3 bg-slate-50 rounded-md shadow-2xl shadow-slate-300'>
                        <form onSubmit={submit}>

                        <div className=" flex flex-col gap-2">
                            
                            <input 
                                className=' rounded placeholder-gray-500 shadow'
                                type="text" 
                                placeholder="name" 
                                name="name"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <input 
                                className=' rounded placeholder-gray-500 shadow'
                                type="email" 
                                placeholder="email" 
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <input 
                                className=' rounded placeholder-gray-500 shadow'
                                type="password" 
                                placeholder="password"
                                name="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <input 
                                className=' rounded placeholder-gray-500 shadow'
                                type="password" 
                                placeholder="confirm password" 
                                name="password_confirmation"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <select 
                                className=' rounded text-gray-500 shadow'
                                name="role"
                                onChange={(e) => setData('role', e.target.value)}
                            >
                                <option value="admin">Admin</option>
                                <option value="sorter">Sorter</option>
                                <option value="worker">Worker</option>
                            </select>

                            <div className=''>
                                <button 
                                    type='submit' 
                                    className=" text-white font-bold bg-sky-600 focus:bg-sky-500 hover:bg-sky-500 p-2 w-1/3 rounded "
                                >
                                    Login
                                </button>
                                <Link 
                                    href='/login'
                                    className=' underline text-sky-500 ml-10 mt-5'
                                >
                                    already have an account
                                </Link>
                            </div>
                            
                        </div>


                        </form>
                    </div>
                    
                </div>
                
            </div>
        
        </>

    )

    

}