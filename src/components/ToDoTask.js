import React, { Component } from 'react';
import FrontEndCalls from '../AxioisCalls/FrontEndCalls';
let api = new FrontEndCalls();

class ToDoTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.addtask = this.addtask.bind(this);
        this.edittask = this.edittask.bind(this);
        this.deletetask = this.deletetask.bind(this);
        this.viewtask = this.viewtask.bind(this);
    }

    componentDidMount() {
        api.gettask().then((res) => {
            console.log(res.data);
            this.setState({ tasks: res.data });
        });
    }

    addtask() {

        this.props.history.push('/add-task');
    }

    edittask(id) {
        this.props.history.push(`/update-task/${id}`);

    }

    deletetask(id) {
        this.props.history.push(`/delete-task/${id}`);
        // taskService.deletetask(id).then(res => {
        //     this.setState({
        //          task: this.state.tasks.filter(task => task.id !== id)
        //     })
        // })

    }

    viewtask(id) {
        this.props.history.push(`/view-task/${id}`);

    }
    handleChange = (e, id) => {
        let tasks = {
            id: this.state.id,
            task: this.state.task,
            date: this.state.date,
            description: this.state.description,
            status: this.state.status
        };

        api.gettaskById(id).then((res) => {
            let tasks = {...res.data};
            tasks.status = e.target.value;
            let task={
                id: tasks.id,
                task: tasks.task,
                date: tasks.date,
                description:tasks.description,
                status:tasks.status
             };
            console.log(e.target.value,task)
            api.updatetask(tasks, id).then((res) => {
                console.log(res)
                
            });
        });

    }

    render() {
        console.log(this.state.tasks)
        return (
            <div>
                <h2 className="text-center">Tasks List</h2>
                <div class="d-grid gap-2">
                    <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.addtask}> Add task</button>
                </div>
                
  
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Task Id</th>
                                <th>Task</th>
                                <th>Task date</th>
                                <th>Task description</th>
                                <th>Task status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                        <tr key={task.id}>
                                            <td>{task.id}</td>
                                            <td>{task.task}</td>
                                            <td>{task.date}</td>
                                            <td>{task.description}</td>
                                            <td><select onChange={(e) => this.handleChange(e, task.id)} name="options" id="options" defaultValue={task.status}>
                                                <option value="Created">Created</option>
                                                <option value="Complete">Complete</option>
                                                <option value="Incomplete" >Incomplete</option>

                                            </select>

                                            </td>
                                            <td>
                                                <button onClick={() => this.edittask(task.id)} className="btn btn-secondary">Update</button>
                                                <button onClick={() => this.deletetask(task.id)} className="btn btn-secondary">Delete</button>
                                                <button onClick={() => this.viewtask(task.id)} className="btn btn-secondary">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ToDoTask;