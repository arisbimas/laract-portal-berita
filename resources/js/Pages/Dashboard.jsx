import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setisnotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data, {
            preserveScroll: true,
            onSuccess: () => {
                setisnotif(true);
                setTitle("");
                setDescription("");
                setCategory("");
            },
        });
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        if (props.flash.message) {
            setisnotif(true);
        }
        return;
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                {isNotif && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                        <div className="alert alert-success shadow-lg rounded">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full"
                            value={title}
                            onChange={(title) => setTitle(title.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full"
                            value={description}
                            onChange={(desc) =>
                                setDescription(desc.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="m-2 input input-bordered w-full"
                            value={category}
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="lg:p-4">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((data, i) => {
                            return (
                                <div
                                    className="card bg-base-100 shadow-xl flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 p-6 lg:m-12 my-4 mx-auto rounded-none"
                                    key={i}
                                >
                                    <figure>
                                        <img
                                            src="https://placeimg.com/400/225/arch"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {data.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p> {data.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                {data.category}
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: data.id }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{ id: data.id }}
                                                    as="button"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h3>Anda belum mempunyai berita</h3>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
