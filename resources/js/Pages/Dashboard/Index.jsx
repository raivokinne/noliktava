import Authenticated from "@/Layouts/AuthedLayout";

export default function Index() {
    return (
        <Authenticated>
            <h1>Dashboard</h1>
        </Authenticated>
    );
}
