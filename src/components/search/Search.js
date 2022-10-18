import './Search.css';

function Search() {
    return (
        <form className="search-form" id="sf">
            <div className="mb-6" id="input-container">
                <input type="text" id="address"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="BTC address" required=""/>
            </div>
            <button type="submit"
                    id="submit-button"
                    className="text-black border border-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-400 dark:focus:ring-offset-amber-400">Submit
            </button>
        </form>
    )
}

export default Search;