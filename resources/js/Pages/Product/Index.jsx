import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ products }) {
    return (
        <>
            <Authenticated>
                <section className="grid place-items-center">
                    {products.length > 0 ? (
                        <>
                            {products.map((product, index) => (
                                <>
                                    <article key={index}>
                                        <h1>{product.name}</h1>
                                    </article>
                                </>
                            ))}
                        </>
                    ) : (
                        <>
                            <p>No products found</p>
                        </>
                    )}
                    <a
                        href="/products/create"
                        className="p-2 px-4 bg-black text-2xl text-white rounded-full absolute top-28 right-60"
                    >
                        +
                    </a>
                </section>
            </Authenticated>
        </>
    );
}
