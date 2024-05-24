import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Show({ user, onClose }) {
    // Initialize isOpen state
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Call onClose function passed from parent component
    };
    console.log(user);

    // Return JSX for the dialog
    return (
        <Dialog open={isOpen} onClose={handleClose} className="fixed inset-0 z-50 overflow-y-auto">
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 opacity-50" />
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-4 rounded-md shadow-lg z-50">
                    <h1>adasdlkajsdklajsdklajdklajdk</h1>
                </div>
            </div>
        </Dialog>
    );
}
