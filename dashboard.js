const request = axios.get("https://jsonplaceholder.typicode.com/todos")

request.then((response)=>{
   todo = response.data;
   
   var dashboard=document.getElementById("dashboard1")

    var count = Object.keys (todo).length;
   console.log(count);
    dashboard.innerHTML=count

    
    var dashdiv=document.getElementById("dashboard2")
    var completedTodo = todo.filter(function(x){
        return x.completed == true;
    });
    var task = completedTodo.length
    console.log(task);
    dashdiv.innerHTML=task
   

    var dashbox=document.getElementById("dashboard3")
    var completedTodo = todo.filter(function(x){
        return x.completed == false;
    });
    var dash= completedTodo.length
    console.log(dash);
    dashbox.innerHTML=dash
   
})






