import ListItem from "./ListItem";

function List({data,handleClick,handleDelete}) {
        return(
    <>        

 {data.map((item)=>{
          return(

              <ListItem 
              key={item.id}
              item={item}
              handleClick={handleClick}
              handleDelete={handleDelete}
              />
              )
       
              
            })}
        </>
            )
}
export default List;