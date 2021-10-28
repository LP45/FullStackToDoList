import axios from 'axios';


const TASK_API_BASE_URL= "http://localhost:8080/restfulApi";


export default class FrontEndCalls{

    gettask(){
       return axios.get(TASK_API_BASE_URL+"/allTasks");
    }

    createtask(task){
        return axios.post(TASK_API_BASE_URL+"/addTask",task);
    }

    gettaskById(id){
        return axios.get(TASK_API_BASE_URL+"/Task/"+id);
    }

    updatetask(task,id){
        return axios.put(TASK_API_BASE_URL+"/Task/"+id,task);
    }

    deletetask(id){
        return axios.delete(TASK_API_BASE_URL+"/Task/"+id);
    }

}

