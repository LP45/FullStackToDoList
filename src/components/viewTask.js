import React, { Component } from 'react';
import FrontEndCalls from '../AxioisCalls/FrontEndCalls';
let api = new FrontEndCalls();

class ViewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tasks: {}

        }



    }//constructor

    componentDidMount() {
        api.gettaskById(this.state.id).then((res) => {
            this.setState({ tasks: res.data })

        });
    }
    handleClick = (e) => {
        this.props.history.push(`/update-task/${this.state.id}`);
    }


    render() {
        return (
            <div>

                <h3 className="text-center">View All Tasks</h3>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Task ID: </label>
                            <input placeholder={this.state.tasks.id} readOnly={true} name="id" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Task: </label>
                            <input placeholder={this.state.tasks.task} readOnly={true} name="task" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <input placeholder={this.state.tasks.date} readOnly={true} name="date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input placeholder={this.state.tasks.description} readOnly={true} name="description" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Status: </label>
                            <input placeholder={this.state.tasks.status} readOnly={true} name="status" className="form-control" />
                        </div>
                        <button className="btn btn-secondary" onClick={this.handleClick}>Update</button>

                    </form>
                </div>


            </div>
        );
    }
}

export default ViewTask;