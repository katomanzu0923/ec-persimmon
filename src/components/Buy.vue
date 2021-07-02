<template>
	<div class="buy-body">
			<div class="buy-title">
			<h1>商品一覧</h1>
			</div>
		<div class="buy-area">
				<div class="kari">
					<div class="buy-titles">
						<h2>富有柿特上</h2>
						<p>それぞれの柿一つ一つに傷がなく、大きさも最大級の品物です。<br>
						お値段んはそれなりの価格がしますが味や見た目を最大級補償いたします</p>
						<div class="totall">
							<div class="af"><h3 class="money">一個当たり1000円(税込)</h3>
							<div class="c">{{number01}}円</div>
							<div class="flex-b"><button type="text" class="ten" @click="plus(1)">＋</button><button type="text" class="ten" @click="mainasu(1)">ー</button></div></div>
						</div>
					</div>
					<div class="image">
						<img src="@/assets/kaki.png" alt="">
					</div>
				</div>
				<div class="kari">
					<div class="buy-titles">
						<h2>富有柿上物</h2>
						<p>それぞれの柿一つ一つに傷がなく、大きさも最大級の品物です。<br>
						お値段んはそれなりの価格がしますが味や見た目を最大級補償いたします</p>
						<div class="totall">
							<div class="af"><h3 class="money">一箱500円(税込)</h3>
							<div class="c">{{number02}}円</div>
							<div class="flex-b"><button type="text" class="ten" @click="plus(2)">＋</button><button type="text" class="ten" @click="mainasu(2)">ー</button></div></div>
						</div>
					</div>
					<div class="image">
						<img src="@/assets/kaki.png" alt="">
					</div>
				</div>
				<div class="kari">
					<div class="buy-titles">
						<h2>富有柿並</h2>
						<p>それぞれの柿一つ一つに傷がなく、大きさも最大級の品物です。<br>
						お値段んはそれなりの価格がしますが味や見た目を最大級補償いたします</p>
						<div class="totall">
							<div class="af"><h3 class="money">一箱100円(税込)</h3>
							<div class="c">{{number03}}円</div>
							<div class="flex-b"><button type="text" class="ten" @click="plus(3)">＋</button><button type="text" class="ten" @click="mainasu(3)">ー</button></div></div>
						</div>
					</div>
					<div class="image">
						<img src="@/assets/kaki.png" alt="">
					</div>
				</div>
				<div class="amo">
					合計金額{{amount}}円<br>
					<div class="red">
						<span class="rr"><h6>(内訳)</h6></span><br>特上 {{number01}}円<br>上物  {{number02}}円<br>並  {{number03}}円
					</div>
				</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			num:0,
			noPay: true,
			number:"4",
			number01: 0,
			number02: 0,
			number03: 0,
			mount01:0,
			mount02:0,
			mount03:0,
			amount:0,
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
		plus(m){
			if(m == 1){
				if(this.mount01 >9)
			{
				alert('これ以上は追加できません')
				this.mount01 = 9
			}
			else
			{
				this.mount01 = this.mount01+1
				this.number01 = this.number01+1000
				this.amount = this.number01
				this.amount = this.number03+this.number02+this.number01
			}
			}
			if(m == 2){
				if(this.mount02 >9)
			{
				alert('これ以上は追加できません')
				this.mount02 = 9
			}
			else
			{
				this.mount02 = this.mount02+1
				this.number02 = this.number02+500
				this.amount = this.number02
				this.amount = this.number03+this.number02+this.number01
			}
			}
			if(m == 3){
				if(this.mount03 >9)
			{
				alert('これ以上は追加できません')
				this.mount03 = 9
			}
			else
			{
				this.mount03 = this.mount03+1
				this.number03 = this.number03+100
				this.amount = this.number03+this.number02+this.number01
			}
			}
		},
		mainasu(m){
			if(m == 1){
				if(this.mount01 === 0)
			{
				alert('これ以上は追加できません')
				this.mount01 = 0
			}
			else
			{
				this.mount01 = this.mount01-1
				this.number01 = this.number01-1000
				this.amount = this.amount - this.number01
			}
			}
			if(m == 2){
				if(this.mount02 === 0)
			{
				alert('これ以上は追加できません')
				this.mount02 = 0
			}
			else
			{
				this.mount02 = this.mount02-1
				this.number02 = this.number02-500
				this.amount = this.amount-this.number02
			}
			}
			if(m == 3){
				if(this.mount03 === 0)
			{
				alert('これ以上は追加できません')
				this.mount03 = 0
			}
			else
			{
				this.mount03 = this.mount03-1
				this.number03 = this.number03-100
				this.amount = this.amount - this.number03
			}
			}
		},
		buy(){
			alert('カートに入れました')
		},
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
			alert('f')
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
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese');
$main-color: #C97A04;
$text-color:#073D38;
$breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}

h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
	font-family: 'Noto Serif JP', serif;
	@include media(m){
		font-size:1rem;
	}
}
h3 {
	font-weight: lighter; 
}
h2{
	font-family: 'Noto Serif JP', serif;
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
	height: 100%;
}

.image{
	background: coral;
}

label{
	margin: 5px;
	@include media(m) {
		margin: unset;
	}
}
input {
	text-align: start;
	display: block;
	border: 1px solid$main-color;
}

.ten{
	margin: 2%;
}
.flex-b{
	display: flex;
	justify-content: space-around;
}

.amo{
	text-align: center;
	color: $text-color;
	font-size: 2rem;
	font-family: 'Noto Serif JP', serif;
}

h2{
	font-size: 1.5rem;
	margin: 2%;
	text-align: center;
	color: #C97A04;
}

h3{
	text-align: start;
}

p{
	text-align: start;
	padding: 2%;
	color: #C97A04;
	font-family: 'Noto Sans JP', sans-serif;
}

button {
	color: white;
	background: $text-color;
	display: block;
	border: none;
}
select {
	outline: none;
}
.money{
	font-size: 1rem;
	color: $main-color;
	text-align: start;
	background: rgb(250, 230, 207);
}

.af{
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 5%;
	margin-top: 5%;
	background: rgb(250, 230, 207);
}

.c{
	background: rgb(250, 230, 207);
}

.setumei{
	display: inline;
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
	width: 85%;
}
}

.buy-titles {
	width: 30%;
	margin: 0 5%;
	position: relative;
	@include media(m){
		font-size:1.5rem;
	}
}


.buy-area{
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 1% 10%;
}


.totall {
	display: inline-block;
	width: 100%;
	text-align: start;
	position: absolute;
	bottom: 0;
	background: rgb(250, 230, 207);
}

.price {
	width: 100%;
	bottom: 0;
	border-top: 1px dotted $main-color;
	text-align: start;
}

.button{
	width: 100%;
}

.inline {
	display: inline-block;
}

.kari{
	display: flex;
	justify-content: center;
	height: 30vh;
	margin: 5% 0;
}

.mini{
	font-size: 1rem;
	background: transparent;
}
h6{
	font-size: 1.25rem;
	background: transparent;
}
.rr{
	font-size: 1.25rem;
	background: transparent;
}

.red{
	width: 10%;
	margin: 1% 45%;
	padding: 1% 0;
	background: rgb(250, 230, 207);
	font-size: 1rem;
}
</style>