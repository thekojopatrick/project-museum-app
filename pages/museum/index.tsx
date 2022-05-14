import Arts from "../../components/Arts";
import BreadCrumb from "../../components/BreadCrumb";
import Filters from "../../components/Filters";
import Layout from "../../components/Layout";
import SearchField from "../../components/SearchField";
import Sort from "../../components/Sort";

const Museum = () => {
    return (
        <Layout parentClass="search-container">
            <BreadCrumb title="Museum"/>
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

export default Museum;
