import React from 'react'
import Backbone from "backbone"
import TaskNav from "./taskNav"
import STORE from "../store"
import ACTIONS from "../actions"
import _ from "backbone/node_modules/underscore"

const AllTasks = React.createClass({
	componentWillMount: function() {
		STORE.on("updateState", () => {
			this.setState(STORE._getData())
		})
	},
	componentWillUnmount: function() {
		STORE.off("updateState")
	},
	getInitialState: function() {
		return STORE._getData()
	},
	render: function() {
		return (
			<div className="all-tasks">
				<TaskNav currentDisplay={this.state.currentDisplay} />
				<input placeholder="Write new task" onKeyDown={ACTIONS._addTask}/>
				<TaskContainer tasks={this.state.displayedTasks} />
			</div>
		)
	}
})

const TaskContainer = React.createClass({
	render: function() {
		console.log(STORE)
		return (
			<div className="task-container">
				{this.props.tasks.map(task => <Task passedTask={task} />)}
			</div>
		)
	}
})

const Task = React.createClass({
	_changeStatus: function() {
		var obj = this.props.passedTask
		obj.status = obj.status === "complete" ? "active" : "complete"
	},
	render: function() {
		var checkboxStyle = {
			backgroundColor: this.props.passedTask.status === "active" ? "red" : "green"
		}
		return (
			<div className="task">
				<span >{this.props.passedTask["taskName"]}</span>
				<div 
					className="checkbox" 
					style={checkboxStyle} 
					onClick={this._changeStatus}>
				</div>
			</div>
		)
	}
})

export default AllTasks