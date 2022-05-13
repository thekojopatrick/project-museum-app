import Link from "next/link";

interface BreadCrumbProps {
    title?: string;
}

const BreadCrumb = ({ title }: BreadCrumbProps) => {
    return (
        <section className="section-breadcrumb">
            <div className="section-center">
                <h3>
                    <Link href="/">Home</Link> <Link href="/arts">/ Arts</Link>/
                    {title}
                </h3>
            </div>
        </section>
    );
};

export default BreadCrumb;
