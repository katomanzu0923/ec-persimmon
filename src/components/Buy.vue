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
					<label for="price">一つ3500円</label>
					<select v-model="number03"  v-on:change="c()">
						<option v-for="number in numbers" :key="number" :value="number">
							{{ number }}
						</option>
					</select>
					<div class="inline">ケース</div>
				</div>
			</div>
			<div class="box">
				<figure class="image"><img src="@/assets/kaki.png" alt=""></figure>
				<div class="buy-titles">傷なし富有柿（一ケース）</div>
				<div class="price">
					<label for="price">一つ3000円</label><select v-model="number04"  v-on:change="d()">
						<option v-for="number in numbers" :key="number" :value="number">
							{{ number }}
						</option>
					</select>
					<div class="inline">ケース</div><br>
				</div>
			</div>
		</div>
		<div class="totall">
				<h3 v-if="noPay">購入商品の個数を記述ください</h3><h3 v-else >購入予定金額{{price}}円(送料一律500円含む)</h3>
				<button @click="perches()" :disabled="noPay">レジにすすむ</button>
		</div>
		<transition name="fade">
			<div class="perches-body" v-if="isUp == 'up'">
				<Perches :price="price" :number01="number01" :middlePrice01="middlePrice01" :number02="number02" :middlePrice02="middlePrice02" :number03="number03" :middlePrice03="middlePrice03" :number04="number04" :middlePrice04="middlePrice04" @isoff="of"></Perches>
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
			noPay: true,
			number:"4",
			number01: 0,
			number02: 0,
			number03: 0,
			number04: 0,
			price: "0",
			middlePrice01:"0",
			middlePrice02:"0",
			middlePrice03:"0",
			middlePrice04:"0",
			isUp: "down",
			numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "１０＋"]
		}
	},
	methods: {
		a() {
			let limitNumber01 = (this.number01+this.number02)
			if (this.number01 > 99 || limitNumber01 > 99) {
				alert("99個以上ご購入のお客様は別途、お問い合わせフォームからご連絡ください")
				this.noPay = true,this.number01 = 0,this.number02 = 0,this.number03 = 0,this.number04 = 0
			}else {
			let result = (this.number03 * 3500) + (this.number04 * 2000) + (this.number01 * 500) + (this.number02 *300)+500
			this.middlePrice01 = (this.number01 * 500)
			this.price = result
			this.noPay = false
			}
		},
		b() {
			let limitNumber02 = (this.number01+this.number02)
			if (this.number02 > 99 || limitNumber02 > 99) {
				alert("99個以上ご購入のお客様は別途、お問い合わせフォームからご連絡ください")
				this.noPay = true,this.number01= 0,this.number02 = 0,this.number03 = 0,this.number04 = 0
			}else {
			let result = (this.number03 * 3500) + (this.number04 * 2000) + (this.number01 * 500) + (this.number02 *300)+500
			this.middlePrice02 = (this.number02 * 300)
			this.price = result
			this.noPay = false
			}
		},
		c() {
			let limitNumber03 = (this.number03+ this.number04)
			if (this.number03 === "１０＋" || limitNumber03 >= 10) {
				this.noPay = true,this.number01 = 0,this.number02 = 0,this.number03 = 0,this.number04 = 0
				alert("10ケース以上ご購入のお客様は別途、お問い合わせフォームからご連絡ください")
			}else{
				let result = (this.number03 * 3500) + (this.number04 * 2000) + (this.number01 * 500) + (this.number02 *300)+500
			this.middlePrice03 = (this.number03 * 3500)
			this.price = result
			this.noPay = false
			}
		},
		d() {
			let limitNumber04 = (this.number03+ this.number04)
			if (this.number04 === "１０＋" || limitNumber04 >= 10) {
				this.noPay = true,this.number01 = 0,this.number02 = 0,this.number03 = 0,this.number04 = 0
				alert("10ケース以上ご購入のお客様は別途、お問い合わせフォームからご連絡ください")
			}else{
				let result = (this.number03 * 3500) + (this.number04 * 2000) + (this.number01 * 500) + (this.number02 *300)+500
			this.middlePrice04 = (this.number04 * 3500)
			this.price = result
			this.noPay = false
			}
		},
		perches() {
			this.isUp = 'up'
		},
		of(){
			this.isUp = "down"
			this.number01 = '0'
			this.number02 = '0'
			this.number03 = '0'
			this.number04 = '0'
			this.noPay = true
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
$breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}
.buy-body {
	position: absolute;
	top: 10%;
}
h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
	@include media(m) {
		font-size:1.5rem;
	}
}
h3 {
	font-weight: lighter; 
}
h4 {
	display: inline-block;
	margin-right: 5px;
	font-size: 1rem;
}
p {
	margin: 5px;
}
img {
	width: 200px;
	height: 150px;
	margin: 5px;
	@include media(m){
		margin: 2.5%;
		width: 95%;
		height: 40%;
	}
}
label{
	margin: 5px;
	@include media(m) {
		margin: unset;
	}
}
input {
	width: 50px;
	text-align: end;
	margin: 5px;
	border: 1px solid$main-color;
}
button {
	padding: 5px;
	width: 30%;
	margin: 5px 35%;
	color: white;
	background: orange;
	border: 1px solid $main-color;
	filter: drop-shadow(0 0 0.75rem rgb(221, 99, 17));
	@include media(m){
		width: 80%;
		margin: 2% 10%;
	}
}
select {
	outline: none;
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
.buy-body {
	top: 12%;
	width: 100%;
	height: 100%;
}
.buy-title {
	margin: 1% auto;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 1px solid $main-color;
	border-bottom: 1px solid $main-color;
	border-radius: 20px;
	@include media(m){
		width: 50%;
		font-size:1.5rem;
	}
}
.buy-area {
	display: flex;
	justify-content: space-evenly;
	@include media(m){
		flex-direction: row;
		flex-wrap: wrap;
	}
}
.buy-titles {
	text-align: center;
	padding: 5px;
	font-size: 1rem;
	margin: 1px;
	@include media(m) {}
}
.box {
	position: relative;
	margin: 40px;
	border: 3px solid $main-color;
	border-radius: 8px;
	@include media(m){
		width: 40%;
		margin: 5px;
	}
	}
.totall {
	display: inline-block;
	text-align: center;
	width: 60%;
	margin: 2% 20%;
	@include media(m){
		width: 80%;
		margin: 2% 10%;
	}
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
.inline {
	display: inline-block;
}
</style>