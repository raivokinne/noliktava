export default function Show({ report }) {
    return (
        <div>
            <h1>{report.name}</h1>
            <p>{report.description}</p>
            <p>{report.date}</p>
        </div>
    );
}
