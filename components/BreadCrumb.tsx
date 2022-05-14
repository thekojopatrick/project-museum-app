import Link from "next/link";

interface BreadCrumbProps {
    title?: string;
    id?: string;
}

const BreadCrumb = ({ title, id }: BreadCrumbProps) => {
    return (
        <section className="section-breadcrumb">
            <div className="section-center">
                <h3>
                    <Link href="/">Home</Link>
                    {title === "Museum" && (
                        <Link href="/museum">/Collections</Link>
                    )}
                    {id && <><Link href="/museum"> /Collections</Link> /{id}</>}
                </h3>
            </div>
        </section>
    );
};

export default BreadCrumb;
