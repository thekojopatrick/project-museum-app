import { BiSearch } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

interface SearchFieldProps {
    value?: string;
    onChange?: any;
    onClick?: any;
    onClear?: any;
}

const SearchField = ({
    value,
    onChange,
    onClick,
    onClear,
}: SearchFieldProps) => {
    return (
        <div className="search-field">
            <form action="" className="form-search">
                {/* search icon */}
                <BiSearch className="icon icon-search" />
                {/* search input */}
                <input
                    type="text"
                    name=""
                    id=""
                    value={value}
                    onChange={onChange}
                    className="search-input"
                    placeholder="Search ..."
                />
                {/* clear btn */}
                <button
                    type="reset"
                    onClick={onClear}
                    className="btn btn-clear"
                >
                    <RiCloseFill className="icon icon-clear" />
                </button>

                {/* search btn */}
                <button
                    type="submit"
                    onClick={onClick}
                    className="btn search-btn"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchField;
