import { useRouter } from "next/router";
import BreadCrumb from "../../../components/BreadCrumb";
import Layout from "../../../components/Layout";
import ProductImages from "../../../components/Product/ProductImages";
import { images } from "../../../utils/constants";

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
                <ProductImages images={images} />
            </div>
        </Layout>
    );
};

export default ProductDetails;
