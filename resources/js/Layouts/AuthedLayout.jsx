import Navbar from "../Components/Navbar.jsx";

export default function Authenticated({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
