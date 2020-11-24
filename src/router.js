import Vue from 'vue';
import Router from 'vue-router';
import Buy from './components/Buy.vue';
import Perches from './components/Perches.vue';

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{path: '/', component: Buy}, { path: "/Perches", component: Perches}]
});