import Arts from "../components/Arts";
import Filters from "../components/Filters";
import Layout from "../components/Layout";
import SearchField from "../components/SearchField";
import Sort from "../components/Sort";

const Search = () => {
    return (
        <Layout parentClass="search-container">
            <header className="search-header">
                <SearchField />
                <Sort />
            </header>
            <main className="search-body">
                <Filters />
                <Arts />
            </main>
        </Layout>
    );
};

export default Search;
