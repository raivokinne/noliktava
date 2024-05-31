import { useForm } from "@inertiajs/react";

const Navbar = () => {
    const { data, setData, delete: destroy, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        destroy(route("logout"));
    };
    return (
        <>
            <nav className="bg-white h-[80px] flex items-center z-50 justify-center w-full dark:text-white dark:bg-gray-900 fixed top-0">
                <div className="container flex items-center justify-between w-full mx-[150px]">
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                className="w-[60px] h-[60px] rounded-full"
                                src="/assets/logo.jpg"
                                alt="logo"
                            />
                        </a>
                    </div>

                    <ul className="flex items-center">
                        <li className="mr-6">
                            <a href="/dashboard">Home</a>
                        </li>

                        <li className="mr-6">
                            <a href="/reports">Reports</a>
                        </li>

                        <li className="mr-6">
                            <a href="/users">Users</a>
                        </li>

                        <li className="mr-6">
                            <a href="/shelves">Shelves</a>
                        </li>

                        <li className="mr-6">
                            <a href="/products">Products</a>
                        </li>
                    </ul>
                    <ul className="flex items-center">
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
