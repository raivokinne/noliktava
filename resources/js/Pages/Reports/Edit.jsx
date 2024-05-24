import { Head, Link, useForm } from '@inertiajs/react';



export default function Edit({report}){
    const { data, setData, put } = useForm({
        name: report.name,
        description: report.description,
        date: report.date
        
});

const handleSubmit = (e) => {
    e.preventDefault();
    put(`/reports/${report.id}`, data);
};
return (
    <div>
        <Head>
            <title>Edit Report</title>
        </Head>
        <h1>Edit Report</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                
                <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
          </div>      
                
                {errors.description && <div>{errors.description}</div>}
            </div>
            <button type="submit">Save</button>
            <Link href="/reports">Back to Reports</Link>
        </form>
    </div>
);
}





