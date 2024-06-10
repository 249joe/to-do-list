function ListItem({item,handleClick,handleDelete}) {
    return(
        <li>      
        <input onClick={()=>handleClick(item.id)} className="input" type={'checkbox'} checked={item.checked}/>
            <label style={item.checked?{textDecoration:"line-through"}:null} onClick={()=>handleClick(item.id)}>{item.info}</label>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
        </li>
    )
}
export default ListItem;