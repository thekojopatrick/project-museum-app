import ProductItem from "./productItem";

const Products = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">{0} Products</div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input
                            type="text"
                            name=""
                            placeholder="Search product"
                            className="form-control"
                            id=""
                        />
                    </div>
                </div>
            </div>
            <div className={"p__grid"}>
                <ProductItem />
            </div>
        </div>
    );
};

export default Products;
