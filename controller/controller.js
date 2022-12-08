
const {Todos}=require("../model/Todos")

const saveTodos=async(req,res)=>{
    try{
        const todos =new Todos(req.body)
        todos.save()
        res.json(todos)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}


const getTodos = async (req, res) => {

  //  req.params refers to items with a ':' in the URL and req.query refers to items associated with the '?'

  ////  query /////////////////
   //console.log( req.query.User2,req.query.User )
   //http://localhost:4000/todos/getTodos?User=shafeeque&User2=sfq

//// params ////////////////////////////
//http://localhost:4000/todos/getTodos/sfq/programmer
// console.log( req.params.User,req.params.Job)

    try {
        // we want get the handle of the schema in this file
        console.log(req.query.User,req.query.Password)
        // console.log(req.params.User,req.params.Password)
        const todos =await Todos.find({User:req.params.User})
        console.log(todos)
        res.json(todos)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}



const fullSearch=async(req,res)=>{
    try{

        const todos =await Todos.find(

            ////  full text search  /////////////////////
            // {$text : {$search:"shafeeque"}}

            // {User:"Vishnuettan"}


            /////////  partial search ///////////
        
                {
                  User:{
                    $regex : new RegExp('sha')
                  }
                }
             
         )
        console.log(todos)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}

module.exports ={
    saveTodos,
    getTodos,
    fullSearch
}
