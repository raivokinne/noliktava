import Authenticated from "@/Layouts/AuthedLayout";

export default function Index({ reports }) {
    return (
        <Authenticated>
            <div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-3xl">History Reports</h1>
                            <hr className="my-6" />
                            <ul className="list-disc list-inside grid gap-4">
                                {reports.map((report) => (
                                    <div className="flex justify-between w-full items-center">
                                        <a
                                            className="hover:underline text-blue-600 text-lg"
                                            key={report.id}
                                            href={`/reports/${report.id}/show`}
                                        >
                                            {report.name}
                                        </a>
                                        <p>{report.date}</p>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
