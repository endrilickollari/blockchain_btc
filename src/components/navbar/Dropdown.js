import {language} from "../../config/languages";

function Dropdown() {
    return (
        <>
            <label className="dropdown">
                dropdown
                <select
                    className='form-select bg-dark custom-select form-select-lg text-white border-dark shadow'
                >
                    {language.map(languages =>
                        <option key={languages.code}>{languages.code}</option>
                    )}
                </select>
            </label>
        </>
    )
}

export default Dropdown;