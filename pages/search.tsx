import Layout from "../components/Layout";
import { FiFilter } from "react-icons/fi";
import SearchField from "../components/SearchField";

const Search = () => {
    return (
        <Layout parentClass="">
            <header className="search-header">
                <SearchField />
                <>
                    <h3 className="heading heading-3 mt-lg-x search-results search-results__title">
                        Search
                    </h3>
                    <div className="result-description-with-filter">
                        <p className="text-lg-x search-results search-results__description">
                            Found 0 works
                        </p>

                        <div className="filter-container">
                            <span className="color-selected"></span>
                            <div className="color-swatch"></div>
                        </div>

                        <button className="btn btn-filter">
                            <FiFilter className="icon icon-filter" />
                            Filter
                        </button>
                    </div>
                </>
            </header>
        </Layout>
    );
};

export default Search;
