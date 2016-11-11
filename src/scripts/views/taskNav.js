import React from 'react'
import Backbone from "backbone"
import ACTIONS from "../actions"

const TaskNav = React.createClass({
	render: function(){
		var allStyle = {
			borderBottom: this.props.currentDisplay !== "all" ? "5px solid black" : "none"
		}
		var activeStyle = {
			borderBottom: this.props.currentDisplay !== "active" ? "5px solid black" : "none"
		}
		var completeStyle = {
			borderBottom: this.props.currentDisplay !== "complete" ? "5px solid black" : "none"
		}
		return (
			<div className="task-nav">
				<div id="AllButton"      style={allStyle}      onClick={ACTIONS._displayAll}>All</div>
				<div id="ActiveButton"   style={activeStyle}   onClick={ACTIONS._displayActive}>Active</div>
				<div id="CompleteButton" style={completeStyle} onClick={ACTIONS._displayComplete}>Complete</div>
			</div>
			)
	}
})

export default TaskNav