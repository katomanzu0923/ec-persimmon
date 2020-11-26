<template>
	<div class="buy-body">
		<div class="buy-title">
			<h1>購入ページ</h1>
		</div>
		<div class="buy-area">
			<div class="nomass">
				<div class="buy-title">個別に購入</div>
				<img src="@/assets/name4.png" alt="">
				<div><p>選択してください（送料一律500円）</p></div>
				<label for="">傷なし一つ500円</label>
				<input type="text" value="" v-model="number01" v-on:input="a()">個<br>
				<label for="">傷あり一つ300円</label>
				<input type="text" value="" v-model="number02" v-on:input="b()">個
			</div>
			<div class="mass">
				<div class="buy-title">まとめて購入</div>
				<img src="@/assets/name4.png" alt="">
				<div><P>選択してください（送料一律500円）</P></div>
				<label for="">傷なし一ケース８個入り3500円</label>
				<input type="text" value="" v-model="number03" v-on:input="c()">ケース<br>
				<label for="">傷あり一ケース８個入り2000円</label>
				<input type="text" value="" v-model="number04" v-on:input="d()">個
			</div>
		</div>
		<div class="totall">
				{{totallPrice}}円(送料一律500円含む)
		</div>
		<div class="purches">
			<button @click="perches()">購入する</button>
		</div>
		<transition name="fade">
			<div class="perches-body" v-if="isUp == true">
				<Perches></Perches>
			</div>
		</transition>
	</div>
</template>

<script>
import Perches from './Perches.vue'
export default {
  components: { Perches },
	data() {
		return {
			number01: 0,
			number02: 0,
			number03: 0,
			number04: 0,
			totallPrice: "0",
			isUp: false
		}
	},
	methods: {
		a() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.totallPrice = result
		},
		b() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.totallPrice = result
		},
		c() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.totallPrice = result
		},
		d() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.totallPrice = result
		},
		perches() {
			this.isUp = true
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	margin: 50px;
	text-align: center;
	font-size: 1rem;
	color: green;
}
p {
	margin: 5px;
}
img {
	width: 100px;
	height: 100px;
}
label{
	margin: 5px;
}
input {
	width: 50px;
	text-align: end;
	margin: 5px;
}
.fade-enter-active {
  transition: all 0.25s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
.buy-title {
	margin: 1%;
	clear: green;
}
.buy-area {
	display: flex;
	justify-content: space-evenly;
}
.nomass {
	display: inline-block;
	border: 1px dotted rgb(255, 174, 0);
	width: 30%;
	padding: 10px;
	text-align: center;
	color: green;
}
.nomass-title {
	display: block;
}
.mass {
	display: inline-block;
	border: 1px dotted rgb(255, 174, 0);
	color: green;
	width: 30%;
	padding: 10px;
	text-align: center;
}
.totall {
	text-align: center;
	margin: 30px;

}
.purches {
	text-align: center;
}
#off {
	display: none;
}
</style>