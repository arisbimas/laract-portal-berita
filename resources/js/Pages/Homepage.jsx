import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center">
                {props.news.data.length > 0 ? (
                    <Paginator meta={props.news.meta} />
                ) : (
                    <div className="badge badge-accent badge-outline">
                        <h1>TIDAK ADA BERITA GES!</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
