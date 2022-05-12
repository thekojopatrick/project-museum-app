import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

const Sort = () => {
    return (
        <div className="sort">
            <div className="search-results__found">
                <p className="text-lg-x">Found :</p>
                <span>
                    <button className="search-results__works btn btn-filter btn-active">
                        0 works
                    </button>
                    <button className="search-results__sets btn btn-filter">
                        0 sets
                    </button>
                </span>
            </div>
            <div className="sort-results">
                <form action="">
                    <label htmlFor="sort">Sort by</label>
                    <select name="sort" id="sort" className="sort-input">
                        <option value="relevance">Relevance</option>
                        <option value="type-of-work">Type of Work</option>
                        <option value="artist-a"> Artist (a-z)</option>
                        <option value="artist-z">Artist (z-a)</option>
                        <option value="objNum-a">Object number (a-z)</option>
                        <option value="objNum-z">Object number (z-a)</option>
                    </select>
                </form>
                <div className="btns-change-layouts">
                    <button className="btn btn-filter">
                        <BsFillGrid3X3GapFill className="icon icon-filter" />
                    </button>
                    <button className="btn btn-filter">
                        <BsListUl className="icon icon-filter" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sort;
