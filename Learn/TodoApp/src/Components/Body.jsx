import { useState, useContext } from "react"
import {TodoList, AddTaskForm, EditTaskForm} from "."
import { TaskContext } from "../AppContexts";


export default function Body(){
    const {tasks, addTask, updateTask} = useContext(TaskContext);

    const [openAddTaskForm, setOpenAddTaskForm] = useState(false);
    const [openEditTaskForm, setOpenEditTaskForm] = useState(false);
    // const [openTaskId, setOpenTaskId] = useState(null);

    let visible_form = (openAddTaskForm || openEditTaskForm) ? "block" : "hidden";
    let visible_list = (openAddTaskForm || openEditTaskForm) ? "hidden" : "block";
    
    const [task2edit, setTask2Edit] = useState(null);

    function onOpenAddTaskForm(){
        if(!openAddTaskForm) setOpenAddTaskForm(true);
        if(openEditTaskForm) setOpenEditTaskForm(false);
    }

    function onOpenEditTaskForm(task_id=null){
        if(!!task_id){
            const selected = tasks.find((t) => t.id == task_id)
            if(!task2edit){
                setTask2Edit({...selected})
            }
            else if(task_id != task2edit?.id){
                setTask2Edit({...selected})
            }

            if(!openEditTaskForm) setOpenEditTaskForm(true)
            
            if(openAddTaskForm) setOpenAddTaskForm(false)
        }
        
    }
    // console.log(openAddTaskForm, openEditTaskForm, !(openAddTaskForm || openEditTaskForm))

    return <>    
        <div  id="body" className="w-full block px-2 box-border lg:shadow-sm shadow-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-0 md:gap-5">
                <div className={`text-2xl h-[88vh] ${visible_list} md:block col-span-1 overflow-auto md:shadow-[8px_0px_10px_-10px] shadow-blue-300 md:border-r-1 border-white`}>
                    <TodoList onAddTask={onOpenAddTaskForm}
                                onEditTask={onOpenEditTaskForm} />
                </div>

                <div className={`col-span-1 ${visible_form} md:block md:col-span-2 p-2 text-l`}>
                    { !(openAddTaskForm || openEditTaskForm) && <span>Create/Select a task.</span>}
                    {
                        openAddTaskForm && <AddTaskForm onSave={(task)=>{addTask(task); setOpenAddTaskForm(false);}} onCancel={()=>{setOpenAddTaskForm(false)}} />
                    }
                    {
                        openEditTaskForm && <EditTaskForm task={task2edit} onSave={(task)=>{updateTask(task); setOpenEditTaskForm(false);}} onCancel={()=>{setOpenEditTaskForm(false)}} />
                    }
                </div>
            </div>
        </div>
    </>
}