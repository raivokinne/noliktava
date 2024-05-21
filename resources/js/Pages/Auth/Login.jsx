import { Head, Link, useForm } from '@inertiajs/react';


export default function Login(){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route('login'));
    };

    return (

        <>
        
            <div className=" w-screen h-screen flex justify-center items-center bg-slate-200">
                <div className=" ">
                    <h1 className=" text-center font-black text-3xl mb-2">Login</h1>
                    <div className='bg-slate-50 h-max w-[400px] p-3 rounded-md shadow-2xl shadow-slate-300'>
                        <form onSubmit={submit}>    
                            <div className=" flex flex-col gap-2">
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
                                {/* <input 
                                    type="password" 
                                    placeholder="confirm password" 
                                    name="confirm_password"
                                /> */}
                                <label className="">
                                    <input 
                                        className=" mr-2 rounded-sm shadow" 
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    Remember me
                                </label>
                                <div>
                                    <button 
                                        type='submit'
                                        className=" text-white font-bold bg-sky-600 hover:bg-sky-500 focus:bg-sky-500 p-2 w-1/3 rounded "
                                    >
                                        Login
                                    </button>
                                    <Link 
                                    href='/register'
                                    className=' underline text-sky-500 ml-28 mt-5'
                                    >
                                        make an account
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