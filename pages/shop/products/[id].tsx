import { useRouter } from "next/router";
import BreadCrumb from "../../../components/BreadCrumb";
import Layout from "../../../components/Layout";
import ProductImages from "../../../components/Product/ProductImages";
import { images, productColors } from "../../../utils/constants";
import styled from "styled-components";
import ProductColors from "../../../components/Product/ProductColors";
import ProductSizes from "../../../components/Product/ProductSizes";
import SelectQuantity from "../../../components/Product/SelectQuantity";
import AddToCart from "../../../components/Product/AddToCart";

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
                    <section className="">
                        <h2 className="product-name">
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
                            <ProductColors colors={productColors} />
                        </p>
                        <p className="info">
                            <ProductSizes />
                        </p>
                        <p className="info">
                            <SelectQuantity />
                        </p>
                        <hr />
                        <AddToCart />
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

    .product-name {
        font-size: 22.5px;
        line-height: 1.3rem;
    }
    .price {
        font-size: 24px;
        font-weight: lighter;
        margin: 1rem 0;
    }
    .desc {
        font-size: 1rem;
        line-height: 1.9;
        letter-spacing: 0.03em;
        margin-bottom: 1rem;
    }
    .info {
        font-size: 1.6rem;
        margin: 1rem 0;
    }

    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: stretch;
        }
        .price {
        }
    }
`;

export default ProductDetails;
