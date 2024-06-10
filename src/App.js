import './App.css';
import apiRequest from "./apiRequest";
import Header from './Header';
import Footer from './Footer';
import {useState,useEffect} from "react";
import List from './List';
import AddItem from './AddItem';
import Search from './Search';

function App() {
  
  let [search,setSearch]= useState("");
 let [newItem,setNew] = useState(''); 
  let [data,setData] = useState([    
      {"id": 1, "info": "this app is a CRUD app , connected to an api ", "checked": false},
      {"id": 2, "info": "i'm just working on the api :)", "checked": false},
      {"id": 3, "info": "work out", "checked": true}

  ]);
  let url = "http://localhost:3003/api";
useEffect(()=>{
  console.log("use");
  let fetchItem = async ()=>{
    try{

      console.log("---------------------------");
      let res = await fetch(url);
      let data = await res.json();
      console.log("---------------------------");
      console.log(data);
      setData(data);


    }catch(err){
      console.log(err.stack);
    }finally{

    }

  }
  fetchItem();
},[])
//     {
//       id:0,
//       info:"lorem  ipsum text render the dom",
//       checked:false,
//     }
// ,
//     {
//       id:1,
//       info:"not  ipsum text render the dom",
//       checked:true,
//     },

//     {
//       id:2,
//       info:"more lor  ipsum text render the dom",
//       checked:false,
//     }
 
  async function handleClick(id) {
    let check = false;
    let newArr  = data.map((item)=>{
      if(item.id === id){
        check = !item.checked;
        return(
          {...item,checked:!item.checked}
        )
      }else{
        return(item)
      }
     
    
    }
      
      
      );
    setData(newArr);
    const patchO = {
      method:"PATCH",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({checked:check})
    };
    console.log(check);
    const result = await apiRequest(`${url}/${id}`,patchO)

  }
  async function handleDelete(id) {
   let newArr = data.filter((item)=>item.id !== id);
  setData(newArr); 

  const deletO = {
    method:'DELETE'
  }
  const result = await apiRequest(`${url}/${id}`,deletO)
}
async function handleAdd(e) {
  e.preventDefault();
  e.currentTarget.firstChild.value=""
  let ide = data.length?data[data.length-1].id +1:1;
  let item = {
    id:ide,
    info:newItem,
    checked:false
  }
  let newArr = [...data,item];
  const postOption = {
    method : "POST",
    header:{
      "Content-Type":"application/json"
    },
    body : JSON.stringify(item)
  }
  const result = await apiRequest(url,postOption);
  setData(newArr);
  
}
function handleSearch(e){
 setSearch(e);
}
  return (
    
    <div className="App">
      
    <Header/>
      <Footer length={data.length}/>
    

      <Search
      handleSearch={handleSearch}
      />
      <AddItem
      handleAdd={handleAdd}
      newItem={newItem}
      setNew={setNew}
      />

     
{data.length === 0? <h1>lest is empty!</h1>:(

 
  <List data={data.filter((item)=>item.info.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
   handleClick={handleClick}
   handleDelete={handleDelete}
   />    
  
       )}


    </div>
      
      );
    }
    
export default App;
