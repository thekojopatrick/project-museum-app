import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const ArtDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout parentClass="search-container">
            <BreadCrumb title={`${id}`} />
        </Layout>
    );
};

export default ArtDetails;
