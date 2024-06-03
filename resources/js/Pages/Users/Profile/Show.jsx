import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ShowUserInfo from "./Partials/ShowUserInfo";
import DeleteUser from "./Partials/DeleteUser";

export default function Edit({ user, auth }) {
    // Initialize isOpen state

    console.log(auth);
    

    // Return JSX for the dialog
    return (
        <div className="p-4">
            <div>
                <ShowUserInfo user={user} auth={auth} />
            </div>
            <div>
                <DeleteUser user={user} auth={auth} />
            </div>
            
        </div>
    );
}
