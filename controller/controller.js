
const {Todos}=require("../model/Todos")

const saveTodos=async(req,res)=>{
    try{
        const todos =new Todos(req.body)
        todos.save()
        res.send("hii")
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}


const getTodos = async (req, res) => {

    try {
        // we want get the handle of the schema in this file
        const todos =await Todos.find()
        res.json(todos)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}


module.exports ={
    saveTodos,
    getTodos
}
