function AddItem({newItem,setNew,handleAdd}) {
    return(
        <form id="addItem" onSubmit={(e)=>handleAdd(e)} >
            < input
            type="text"
            id="add"
            autoFocus
            placeholder="add item"
            onChange={(e)=>setNew(e.target.value)}
            required
            />
            <button id="btn" type="submit">Add</button>
        </form>
    )
}

export default AddItem;