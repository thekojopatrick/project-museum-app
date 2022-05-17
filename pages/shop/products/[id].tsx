import { useRouter } from "next/router";
import BreadCrumb from "../../../components/BreadCrumb";
import Layout from "../../../components/Layout";
import ProductImages from "../../../components/Product/ProductImages";
import { images } from "../../../utils/constants";
import styled from "styled-components";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout className="main-container">
            <Wrapper className="page-center">
                <BreadCrumb title="Products" id={`${id}`} />
                <button className="shop-btn shop-btn__primary">
                    Back to Products
                </button>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>
                            {"Bellavista Midi Dress Careyes Floral Marigold"}
                        </h2>

                        <h5 className="price">${"48"}</h5>
                        <p className="desc">
                            {
                                "The Bellavista Midi Dress in Careyes Floral Marigold is a key style from the Islas collection. This dress features a V neckline, fixed waistband with self-fabric waist ties, binding detail on the sleeves, a feminine centre front split and finished with a floaty A-line skirt including self button detailing. Fully lined and cut from 100% Rayon Crepe - FSC Certified Fibres. The Bellavista Midi Dress is perfect paired back with a white strappy heel for your next spring soiree."
                            }
                        </p>
                        <p className="info">
                            <span>Available:</span>
                            {"In stock"}
                        </p>
                        <p className="info">
                            <span>SKU:</span>
                        </p>
                        <p className="info">
                            <span>Brand:</span>
                        </p>
                        <hr />
                    </section>
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`

    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price {
    }
    .desc {
    }
    .info {
    }

    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
        }
    }
`;

export default ProductDetails;
