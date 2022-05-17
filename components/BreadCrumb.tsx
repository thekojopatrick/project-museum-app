import Link from "next/link";

interface BreadCrumbProps {
    title?: string;
    id?: string | Number;
    name?: string;
}

const BreadCrumb = ({ title, id, name }: BreadCrumbProps) => {
    return (
        <section className="section-breadcrumb">
            <div className="section-center">
                <h3>
                    <Link href="/">Home</Link>
                    {title === "Products" && (
                        <Link href="/shop"> / Products</Link>
                    )}
                    {title === "Museum" && (
                        <Link href="/museum"> /Collections</Link>
                    )}
                    {title === "collection" && (
                        <Link href="/museum"> /Collections</Link>
                    )}
                    {id && <> / {id}</>}
                    {name && <> / {name}</>}
                </h3>
            </div>
        </section>
    );
};

export default BreadCrumb;
