import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from "backbone"
import AllTasks from "./views/allTasks"

const app = function() {
	ReactDOM.render(<AllTasks />,document.querySelector('.container'))
}

app()