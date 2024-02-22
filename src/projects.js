
export class MkToDo {
    constructor(title, desc, dueDate , priority){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

  export  class MkProjects{
    constructor(name){
        this.name = name;
        this.toDoList = [];
    }

    addToDo(title, desc, dueDate , priority){
        const newToDo = new MkToDo(title, desc, dueDate , priority);
        this.toDoList.push(newToDo);
        return newToDo;
    }
}


export class Project{
    constructor(){
        this.allProjects = [];
    }

    newProject(name){
        const pro = new MkProjects(name);
        this.allProjects.push(pro);
        return pro;
    }

    namedPro(){
        this.allProjects.forEach((element)=>
            console.log(this.allProjects.indexOf(element)));
            ;
        
    }

}