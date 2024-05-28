import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Edit({ user, onClose }) {
    // Initialize isOpen state

    console.log(user);

    // Return JSX for the dialog
    return (
        <>
            <h1>asdkjasdkjadskjasdhkjasdkh</h1>
            <p>{user.role}</p>
        </>
    );
}
