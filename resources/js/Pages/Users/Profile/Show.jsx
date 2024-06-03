import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ShowUserInfo from "./Partials/ShowUserInfo";

export default function Edit({ user }) {
    // Initialize isOpen state

    console.log(user);

    // Return JSX for the dialog
    return (
        <div className="p-4">
            <div>
                <ShowUserInfo user={user} />
            </div>
        </div>
    );
}
