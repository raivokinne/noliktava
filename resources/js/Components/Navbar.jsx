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
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 dark:text-white dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <a className="text-2xl font-semibold" href="">
                            Logo
                        </a>
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
