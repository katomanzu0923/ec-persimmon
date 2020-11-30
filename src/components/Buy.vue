<template>
	<div class="buy-body">
		<div class="buy-title">
			<h1>商品一覧</h1>
		</div>
		<div class="buy-area">
			<div class="box">
				<figure class="image"><img src="@/assets/kaki.png" alt=""></figure>
				<div class="buy-titles">傷なし富有柿（個別）</div>
				<div class="price">
					<label for="price">一つ500円</label><input type="text" value="" v-model="number01" v-on:input="a()">個<br>
				</div>
			</div>
			<div class="box">
				<figure class="image"><img src="@/assets/kaki.png" alt=""></figure>
				<div class="buy-titles">傷あり富有柿（個別）</div>
				<div class="price">
					<label for="price">一つ300円</label><input type="text" value="" v-model="number02" v-on:input="b()">個<br>
				</div>
			</div>
			<div class="box">
				<figure class="image"><img src="@/assets/kaki.png" alt=""></figure>
				<div class="buy-titles">傷なし富有柿（一ケース）</div>
				<div class="price">
					<label for="price">一つ3500円</label><input type="text" value="" v-model="number03" v-on:input="c()">個<br>
				</div>
			</div>
			<div class="box">
				<figure class="image"><img src="@/assets/kaki.png" alt=""></figure>
				<div class="buy-titles">傷なし富有柿（一ケース）</div>
				<div class="price">
					<label for="price">一つ3000円</label><input type="text" value="" v-model="number04" v-on:input="d()">個<br>
				</div>
			</div>
		</div>
		<div class="totall">
				<h4>購入予定金額{{price}}円(送料一律500円含む)</h4>
		</div>
		<button @click="perches()">レジにすすむ</button>
		<transition name="fade">
			<div class="perches-body" v-if="isUp == 'up'">
				<Perches :price="price" :number01="number01" :number02="number02" :nubmer03="number03" :number04="number04"  @isoff="of"></Perches>
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
			number:"4",
			number01: 0,
			number02: 0,
			number03: 0,
			number04: 0,
			price: "0",
			isUp: "down"
		}
	},
	methods: {
		a() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.price = result
		},
		b() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.price = result
		},
		c() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.price = result
		},
		d() {
			let number01 = this.number01
			let number02 = this.number02
			let number03 = this.number03
			let number04 = this.number04
			let result = (number03 * 3500) + (number04 * 2000) + (number01 * 500) + (number02 *300)+500
			this.price = result
		},
		perches() {
			this.isUp = 'up'
		},
		of(){
			this.isUp = "down"
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
}
h4 {
	display: inline-block;
	margin-right: 5px;
}
p {
	margin: 5px;
}
img {
	width: 200px;
	height: 150px;
	margin: 5px;
}
label{
	margin: 5px;
}
input {
	width: 50px;
	text-align: end;
	margin: 5px;
}
button {
	padding: 5px;
	width: 20%;
	margin: 0 40%;
	color: white;
	background: orange;
	border: 1px solid $main-color;
	filter: drop-shadow(0 0 0.75rem rgb(221, 99, 17));

}
.image {
	width: 100%;
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
	margin: 1% auto;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 1px solid rgba(107, 103, 103, 0.904);
	border-bottom: 1px solid $main-color;
	border-radius: 20px;
}
.buy-area {
	display: flex;
	justify-content: space-evenly;
}
.buy-titles {
	text-align: center;
	padding: 5px;
	font-size: 1rem;
	margin: 1px;
}
.box {
	position: relative;
	margin: 40px;
	border: 3px solid $main-color;
	border-radius: 8px;
	
	}
.totall {
	display: inline-block;
	text-align: center;
	width: 60%;
	margin: 10px 20%;

}
#off {
	display: none;
}
.price {
	width: 100%;
	bottom: 0;
	border-top: 1px dotted $main-color;
	text-align: center;
}
</style>