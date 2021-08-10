


   function addRow(todo) {
    var table = document.getElementById("Todoraws");
                      
    var row = document.createElement("TR");  
    
    var name = document.createElement("TD");
    name.innerHTML = todo.userId;
    row.appendChild(name)
  
    var completed = document.createElement("TD");
    completed.innerHTML = todo.completed
    row.appendChild(completed)
  
    

    var id =document.createElement("TD");
    id.innerHTML = todo.id
    row.appendChild(id)
   

    var title =document.createElement("TD");
    title.innerHTML = todo.title.substring(0,20)
    row.appendChild(title)
    table.appendChild(row);
  }
  
  
  

function addRows(minIndex, maxIndex) {
  const request = axios.get("https://jsonplaceholder.typicode.com/todos")
  request.then((response)=>{
    var table = document.getElementById("Todoraws");
     table.innerHTML=""
    for (let i = minIndex; i<=maxIndex; i++) {
      addRow(response.data[i])
    }
  })
}


addRows(0, 9)




function addPagination(numbpages,perpage){
 var pagination=document.getElementById("pagination")
 for(let i=numbpages; i>0; i--){
   var numb= document.createElement("a")
   numb.innerHTML =(i)
   numb.onclick=function(){
    addRows(perpage*(i-1),perpage*i-1)
   }
   pagination.appendChild(numb)
 }
 
}
addPagination(20,10)





 






