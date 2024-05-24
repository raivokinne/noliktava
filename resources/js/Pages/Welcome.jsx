import Authenticated from "@/Layouts/AuthedLayout";


export default function Welcome() {
    return (
        <>
            <Authenticated>

                <div>
                    This is the Welcome page
                </div>

            </Authenticated>
        </>
    );
}
