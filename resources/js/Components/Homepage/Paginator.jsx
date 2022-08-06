import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="btn-group">
            {prev && (
                <Link className="btn" href={prev}>
                    «
                </Link>
            )}

            <Link className="btn">{current}</Link>
            {next && (
                <Link className="btn" href={next}>
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
