<template>
<div>
		<Header  @kei="keii()"></Header>
		<Top class="mar"></Top>
		<About class="fix"></About>
		<Buy class="fix"></Buy>
		<Perches class="fix"></Perches>
		<Footer></Footer>
</div>
</template>

<script>
export default {
	methods: {
		keii(){
			alert(1)
		}
	}
}
</script>

<style lang="scss" scoped>
  $breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}
.fix{
	margin-top: 100px;
}

.mar{
}
</style>
