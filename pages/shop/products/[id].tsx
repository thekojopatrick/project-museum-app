import { useRouter } from "next/router";
import BreadCrumb from "../../../components/BreadCrumb";
import Layout from "../../../components/Layout";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout className="main-container">
            <BreadCrumb title="Products" id={`${id}`} />
            <div className="page-center">
                <button className="shop-btn shop-btn__primary">
                    Back to Products
                </button>
            </div>
        </Layout>
    );
};

export default ProductDetails;
