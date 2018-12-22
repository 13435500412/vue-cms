import Vue from 'vue'

import App from './App.vue'

var vm = new Vue({
	el:"#app",
	render:c=>c(App)//渲染首页
})