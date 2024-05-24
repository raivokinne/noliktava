import React from 'react';


export default function Show({report}) {
   

    return (
        <div>
            <h1>Product Details</h1>
            <div>
                <strong>Name:</strong> {report.name}
            </div>
            <div>
                <strong>Description:</strong> {report.description}
            </div>
           
            <div>
                <InertiaLink href="/reports">Back to reports</InertiaLink>
            </div>
        </div>
    );
}
