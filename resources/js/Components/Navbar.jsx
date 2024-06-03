import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

    const Navbar = () => {
        const { data, setData, delete: destroy, processing } = useForm({});

        const submit = (e) => {
            e.preventDefault();
            destroy(route("logout"));
        };
        return (
            <>
                <nav className="bg-white h-[80px] flex items-center justify-center w-full dark:text-white z-30 dark:bg-gray-900 fixed top-0">
                    <div className="container flex items-center justify-between w-full mx-[150px]">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className="w-[60px] h-[60px] rounded-full" src="/assets/logo.jpg" alt="logo" />
                            </Link> 
                        </div>

                    <ul className="flex items-center">
                        <li className="mr-6">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>

                        <li className="mr-6">
                            <Link href="/reports">Reports</Link>
                        </li>

                        <li className="mr-6">
                            <Link href="/users">Users</Link>
                        </li>

                        <li className="mr-6">
                            <Link href="/shelves">Shelves</Link>
                        </li>

                        <li className="mr-6">
                            <Link href="/products">Products</Link>
                        </li>

                           
                        </ul>
                        <ul className="flex items-center" >
                        <li className="mr-6">
                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        className="p-2 px-4 text-white bg-black rounded hover:bg-sky-700"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    };

    export default Navbar;
