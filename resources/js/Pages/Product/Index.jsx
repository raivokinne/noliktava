import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ products, auth }) {
    console.log(products);
    return (
        <>
            <Authenticated>
                <section className="grid mt-32 place-items-center">
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
                                                className="object-cover w-full rounded-md"
                                            />
                                        </a>
                                        <div className="w-full border-t-2 border-black">
                                            <h1 className="mt-4 text-xl font-semibold">
                                                {product.name}
                                            </h1>
                                            <p className="font-bold text-green-500">
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
                                    className="w-12 h-12 p-2 px-4 text-2xl text-white bg-black rounded-full"
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
