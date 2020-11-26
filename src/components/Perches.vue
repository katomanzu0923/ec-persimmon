<template>
  <div id="perches-body" :class="{perchesBody:isOn}">
			<button @click="on()">✖︎</button>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isOn:false,
		}
	},
	methods: {
		on(){
			this.isOn = true
		}
	}
}
</script>

<style lang="scss" scoped>

#perches-body {
	position: absolute;
		width: 80%;
		height: 80%;
		top: 10%;
		left: 10%;
		z-index: 2;
		background: orange;
}
  .perchesBody {
		display: none;
		position: absolute;
		width: 80%;
		height: 80%;
		top: 10%;
		left: 10%;
		z-index: 2;
	}
</style>