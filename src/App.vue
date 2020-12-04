<template>
<div>
		<Header class="fix"></Header>
</div>
</template>

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
.fix {
	@include media(m) {
			display: fixed;
		}
}
</style>
