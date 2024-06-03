import Authenticated from "@/Layouts/AuthedLayout";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Show({ product }) {
    const { data, setData, delete: destroy, processing, errors, reset } = useForm(
        {},
    );

    const submit = (e) => {
        e.preventDefault();

        destroy(route("product.destroy", shelf.id));
    };

    return (
        <>
            <Authenticated>
                <section className="flex items-center justify-center w-screen h-screen">
                    <article className="w-full p-8 place-items-center grid grid-cols-2">
                        <div className="grid gap-4">
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="text-lg text-green-500">${product.price}</p>
                            <p className="text-lg">{product.description}</p>
                            <div className="flex gap-4 items-center">
                                <Link
                                    className="bg-black text-white w-[100px] flex items-center p-2 rounded-md px-4"
                                    href={`/products/${product.id}/edit`}
                                >
                                    Edit
                                </Link>
                                <form onSubmit={submit}>
                                    <button
                                        className="bg-black text-white w-full p-2 rounded-md px-4"
                                        type="submit"
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                        <img
                            src={`/storage/products/${product.image}`}
                            alt={product.name}
                            className="w-[300px] object-cover rounded-md"
                        />
                    </article>
                </section>
            </Authenticated>
        </>
    );
}

