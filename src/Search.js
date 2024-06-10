function Search({handleSearch}) {
    return(
        <form id="search" onSubmit={(e)=>e.preventDefault()}>

        <input
        type="text"
        required
        autoFocus
        placeholder="Search.."
        onChange={(e)=>handleSearch(e.target.value)}
        />

        </form>
    )
}

export default Search;