import { useForm } from "@inertiajs/react";

const Navbar = () => {
    const { data, setData, delete: destroy, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        destroy(route("logout"));
    };
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 dark:text-white dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <a className="text-2xl font-semibold" href="">
                            Logo
                        </a>
                    </div>

                    <ul className="flex items-center">
                        <li className="mr-6">
                            <a href="/dashboard">Dashboard</a>
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

                        <li className="mr-6">
                            <form onSubmit={submit}>
                                <button
                                    type="submit"
                                    className="p-2 px-4 text-white bg-black rounded"
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
