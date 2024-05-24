export default function Index({ reports }) {
    return (
        <div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h1>Reports</h1>
                        <ul>
                            {reports.map((report) => (
                                <a
                                    key={report.id}
                                    href={`/reports/${report.name}`}
                                >
                                    {report.name}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
