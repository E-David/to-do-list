import STORE from "./store"
import React from 'react'
import Backbone from "backbone"

const ACTIONS = {
	_makeTask: function(task){
		return {
			taskName: task,
			status: "active"
		}
	},
	_addTask: function(event) {
		if(event.keyCode === 13){
			var allTasks = STORE._get("allTasks")
			var displayedTasks = STORE._get("displayedTasks")
			STORE._set(allTasks.push(ACTIONS._makeTask(event.target.value)))
			STORE._set(displayedTasks.push(ACTIONS._makeTask(event.target.value)))
			event.target.value = ""
		}
	},
	_filterActive: function(obj) {
		return obj.status === "active"
	},
	_filterComplete: function(obj) {
		return obj.status === "complete"
	},
	_displayAll: function() {
		STORE._set({
			displayedTasks: STORE._get("allTasks"),
			currentDisplay: "all"
		})
	},
	_displayActive: function() {
		var allTasks = STORE._get("allTasks")
		STORE._set({
			displayedTasks: allTasks.filter(ACTIONS._filterActive),
			currentDisplay: "active"
		})
	},
	_displayComplete: function() {
		var allTasks = STORE._get("allTasks")
		STORE._set({
			displayedTasks: allTasks.filter(ACTIONS._filterComplete),
			currentDisplay: "complete"
		})
	}
}

export default ACTIONS