import css from "./SearchBox.module.css"

export default function SearchBox({ inputValue, handleChange }) {
    return (
        <div className={css.form}>
            <label htmlFor="findContact">Find contacts by name</label>
            <input
                type="text"
                id="findContact"
                value={inputValue}
                onChange={handleChange}
            /> 
        </div>
    )
}