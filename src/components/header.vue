<template>
	<div class="header" v-on:kei="keii()">
				<img src="@/assets/kakilogo03.png" alt="" class="logo">
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentComponet: "Top",
			number: "3",
			top_menu: "Top",
			buy_menu: "商品一覧",
			about_menu: "富有柿について",
			contact_menu: "お問い合わせ",
			isActiveTop: "off",
			isActiveBuy: "off",
			isActiveAbout: "off",
			isActiveContact: "off",
			topOn:true,
			buyOn:false,
			contactOn:false,
			aboutOn:false,
			visible: false,
		}
	},
	props: {
		price: {
			type: Number,
			default: 0
		}
	},
	created() {
    window.addEventListener("scroll", this.handleScroll);
  },
	methods: {
		handleScroll() {
      this.sY = window.scrollY;
      if (this.sY >2) {
				this.number = this.sY
      } else if (this.sY < 1) {
        this.number = this.sY
      }
    },
	}
}
</script>

<style lang="scss" scoped>
//scss start
$main-color: rgb(231, 163, 85);
$sub-color: #f8d8a4;
$breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}
//scss end
  button {
		padding: 2%;
		width: 30%;
		background: transparent;
    outline: 0;
		border: none;
		@include media(m) {
			padding: unset;
			width: 25%;
		}
  }
	button:focus {
		background: transparent;
	}
	p {
		padding: 1%;
		font-size: 2rem;
		color: $main-color;
	}@include media(m) {
		padding: unset;
	}
	.header-top {
		position: absolute;
		top: 20px;
		left: 20px;
		text-align: start;
		@include media(m) {
			text-align: center;
			min-width: 30%;
		}
	}
	.logo {
		margin:  0 40%;
		width: 20%;
		@include media(m) {
			min-width: 30%;
			height: 5%;
		}
	}

	.header{
		padding: 0;
		border-bottom: 3px solid #51925c;
	}
  
</style>