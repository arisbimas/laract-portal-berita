import { Head } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
    };

    useEffect(() => {
        if (props.myNews) {
            setTitle(props.myNews.title);
            setDescription(props.myNews.description);
            setCategory(props.myNews.category);
            console.log("title");
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />

            <div className="card w-full lg:w-96 bg-base-100 shadow-xl rounded-none">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="m-2 input input-bordered w-full"
                        defaultValue={props.myNews.title}
                        onChange={(title) => setTitle(title.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="m-2 input input-bordered w-full"
                        defaultValue={props.myNews.description}
                        onChange={(desc) => setDescription(desc.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="m-2 input input-bordered w-full"
                        defaultValue={props.myNews.category}
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
        </div>
    );
}
