<template>
	<div class="buy-body">
		<div class="buy-title">
			<h1>購入ページ</h1>
		</div>
		<div class="buy-area">
			<div class="nomass">
				<div>個別に購入</div>
				<img src="@/assets/name4.png" alt="">
				<div><p>選択してください</p></div>
				<label for="">傷なし一つ500円</label>
				<input type="text" value="" v-model="number01" v-on:input="a()">個<br>
				<label for="">傷あり一つ300円</label>
				<input type="text" value="" v-model="number02" v-on:input="b()">個
			</div>
			<div class="mass">
				<div>まとめて購入</div>
				<img src="@/assets/name4.png" alt="">
				<div>選択してください</div>
				<label for="">傷なし一ケース８個入り3500円</label>
				<input type="text" value="" v-model="number03" v-on:input="c()">ケース<br>
				<label for="">傷あり一ケース８個入り2000円</label>
				<input type="text" value="" v-model="number04" v-on:input="d()">個
			</div>
		</div>
		<div class="totall">
				{{totallPrice}}
			</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			number01: 0,
			number02: 0,
			number03: 0,
			number04: 0,
			totallPrice: "0"
		}
	},
	methods: {
		a() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)
			this.totallPrice = result
		},
		b() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)
			this.totallPrice = result
		},
		c() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)
			this.totallPrice = result
		},
		d() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)
			this.totallPrice = result
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	margin: 50px;
	text-align: center;
	font-size: 1rem;
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
.buy-area {
	display: flex;
	justify-content: space-evenly;
}
.nomass {
	display: inline-block;
	border: 1px solid grey;
	width: 30%;
	padding: 10px;
}
.nomass-title {
	display: block;
}
.mass {
	display: inline-block;
	border:  1px solid grey;
	width: 30%;
}
.totall {
	text-align: center;
	margin: 30px;
}
</style>