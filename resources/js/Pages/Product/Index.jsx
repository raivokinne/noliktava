import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ products, auth }) {
    console.log(products);
    return (
        <>
            <Authenticated>
                <section className="grid place-items-center mt-32">
                    <div className="grid grid-cols-4 place-items-center gap-10 w-[1400px]">
                        {products.length > 0 ? (
                            <>
                                {products.map((product) => (
                                    <article
                                        key={product.id}
                                        className="p-8 w-[300px] h-[400px] bg-white rounded-md border border-black"
                                    >
                                        <a
                                            href={`/products/${product.id}/show`}
                                        >
                                            <img
                                                src={`/storage/products/${product.image}`}
                                                alt={product.name}
                                                className="w-full object-cover rounded-md"
                                            />
                                        </a>
                                        <div className="border-t-2 border-black w-full">
                                            <h1 className="text-xl font-semibold mt-4">
                                                {product.name}
                                            </h1>
                                            <p className="text-green-500 font-bold">
                                                ${product.price}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </>
                        ) : (
                            <>
                                <p>No products found</p>
                            </>
                        )}

                        {auth.user.role === "admin" ||
                            (auth.user.role === "worker" && (
                                <a
                                    href={`/products/create`}
                                    className="p-2 px-4 text-2xl text-white bg-black rounded-full w-12 h-12"
                                >
                                    +
                                </a>
                            ))}
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
