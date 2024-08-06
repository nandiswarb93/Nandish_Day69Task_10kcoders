
const url = "http://localhost:3000/data";

fetch(url,{
    method : "DELETE",
    // headers : {
    //     "Content-Type" : "application/json"
    // },
    // body:JSON.stringify({
    //     "id" : "4",
    //     "name" : "satish",
    //     "company" : "infosys"
    // })
}).then(response=>{
    if(response.ok)
    {
        return "Data inserted Successfully "
    }
    else{
        return "Error : " + response.statusText +"  "+ response.status;
    }
}).then(data=>console.log(data)).catch(error=>console.log(error))


