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
        
            <div className=" w-screen h-screen flex justify-center items-center">
                <div className=" bg-slate-200 h-max w-max p-3 rounded-md">
                    <form onSubmit={submit}>
                        <h1 className=" text-center font-bold text-2xl mb-2">Login</h1>
                        <div className=" flex flex-col gap-2">
{/*                             
                            <input 
                                type="text" 
                                placeholder="username" 
                                name="username"
                            /> */}
                            <input 
                                type="email" 
                                placeholder="email" 
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <input 
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
                            <label className="">Remember me
                                <input 
                                    className=" ml-2" 
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                            </label>
                            <button type='submit' className=" bg-slate-300 p-2 ">
                                Login
                            </button>
                        </div>
                        
                        
                    </form>
                </div>
                
            </div>
        
        </>

    )

}