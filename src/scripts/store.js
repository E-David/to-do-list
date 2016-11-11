import Backbone from 'backbone'
import _ from 'backbone/node_modules/underscore'

const STORE = _.extend(Backbone.Events,{
	_data: {
		allTasks: [],
		displayedTasks: [],
		currentDisplay: "all"
	},
	_getData: function() {
		return this._data
	},
	_triggerUpdate: function() {
		this.trigger("updateState")
	},
	_get: function(dataKey) {
		return this._data[dataKey]
	},
	_set: function(input,value) {
		if(typeof input === "object"){
			var objectInput = input
			console.log("_set obj:",input)
			this._data = _.extend(this._data,objectInput)
		} else {
			var key = input
			console.log("in _set",input,value)
			this._data[key] = value
		}
		this._triggerUpdate()
	}
})

export default STORE