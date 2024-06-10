const apiRequest = async (url='',options=null,errms =null)=>{

try{
    let res = await fetch(url,options);
    if(!res.ok) throw Error("erro lol")

}catch(err){
    errms = err.message;
}finally{
    return errms
}

}
export default apiRequest;