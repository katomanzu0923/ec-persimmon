<template>
  <div>
		<div id="perches-body">
			<div class="perches-menu">
				<div class="buy-title">
					<h1>ご注文フォーム</h1>
				</div>
				<div class="pay">
					<div class="pay-name">
						<label for="" class="bottom">お名前</label>
						<input  type="text" v-model="name" placeholder="名前を入力してください" v-on:change="nameCheck()">
					</div>
					<div class="pay-name">
						<label for="" class="bottom">郵便番号</label>
						<input type="text" v-model="post"  v-on:change="postCheck()">
					</div>
					<div class="pay-name">
						<label for="" class="bottom">ご住所</label>
						<input  type="text"  v-model="house"  v-on:change="houseCheck()">
					</div>
					<div class="pay-name">
						<label for="" class="bottom">電話番号</label>
						<input  type="text" v-model="phone"  v-on:change="phoneCheck()">
					</div>
					<div class="pay-name">
						<label for="" class="bottom">メールアドレス</label>
						<input  type="text"  v-model="mail"  v-on:change="mailCheck()">
					</div>
					<div class="pay-name">
						<label for="" class="bottom">支払い方法</label>
						<select v-model="pay" v-on:change="payCheck()"><option disabled value="">選択して下さい</option>
						<option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
              </option>
						</select>
					</div>
				</div>
			</div>
			<button @click="all()" class="buy" >購入する</button>
		</div>
		
	</div>
</template>

<script>
 export default {
	data(){
		return {
			isOver:'down',
			myTax: '0',
			currentcomponent:"",
			noPay:true,
			noMail:true,
			noPhone: true,
			noHouse:true,
			noPost: true,
			cardName:"",
			payed:"",
			checked:false,
			buy: false,
			isNameCheck:false,
			isPostCheck:false,
			isHouseCheck:false,
			isPhoneCheck:false,
			isMailCheck:false,
			isOn:false,
			isUp:'down',
			isPay:'1',
			name: "",
			nameResult: "",
			mail: "",
			mailResult: "",
			houseResult:"",
			phoneResult:"",
			phone: "",
			post:"",
			pay:'1',
			addPrice:"0",
			selected: '',
      options: [{ id: 1, name: 'クレジットカード(手数料0円)' },{ id: 2, name: '着払い（手数料300円）' },{ id: 3, name: '銀行振り込み（手数料300円）' }]
		}
	},
	props: {
		price: {
			type: Number,
			default: 0
		},
		number01: {
			type: Number,
			default: 0
		},
		middlePrice01: {
			type: Number,
			default: 0
		},
		number02: {
			type: Number,
			default: 0
		},
		middlePrice02: {
			type: Number,
			default: 0
		},
		number03: {
			type: Number,
			default: 0
		},
		middlePrice03: {
			type: Number,
			default: 0
		},
		number04: {
			type: Number,
			default: 0
		},
		middlePrice04: {
			type: Number,
			default: 0
		},
	},
	methods: {
		check() {
			this.buy = true
		},
		on(){
			this.isOn = true
			this.$emit('isoff','this.isUp');
		},
		nameCheck(){
			if (this.name === "") {
				this.nameResult = "名前は必ず入力してください"
				this.good = ""
				this.isNameCheck = true
				this.noPost = true
			}else{
				this.good = "オッケーです"
				this.nameResult = "✅"
				this.isNameCheck = false
				this.noPost = false
			}
		},
		postCheck(){
			if (this.post === "" || !this.post.match(/^\d{3}-?\d{4}$/)) {
				this.postResult = "郵便番号は必ず半角数字7文字で入力してください"
				this.good = ""
				this.isPostCheck = true
				this.noHouse = true
			}else{
				this.postResult = "✅"
				this.isPostCheck = false
				this.noHouse = false
			}
		},
		houseCheck(){
			if (this.house === "") {
				this.houseResult = "住所は必ず入力してください"
				this.good = ""
				this.isHouseCheck = true
				this.noPhone = true
			}else{
				this.houseResult = "✅"
				this.isHouseCheck = false
				this.noPhone = false
			}
		},
		phoneCheck(){
			if (this.phone === "" || !this.phone.match(/^[0-9-]{6,9}$|^[0-9-]{11}$/ || /^¥d{3}-¥d{4}-¥d{4}$|^¥d{11}$/)) {
				this.phoneResult = "電話番号ハイフンなしで必ず入力してください"
				this.good = ""
				this.isPhoneCheck = true
				this.noMail = true
			}else{
				this.phoneResult = "✅"
				this.isPhoneCheck = false
				this. noMail = false
			}
		},
		mailCheck() {
			if (this.mail === "" || !this.mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+$/)) {
				this.mailResult = "＠は必ず含んでください"
				this.isMailCheck = true
				this.noPay = true
			}else{
				this.mailResult = "✅"
				this.isMailCheck = false
				this.noPay = false
			}
		},
		payCheck() {
			this.myTax = '0'
			if (this.pay === 'クレジットカード(手数料0円)' ) {
				this.isPay = '1'
				this.Price = this.price
				this.checked = false
			}else {
				this.myTax = '300'
				this.isPay = '2'
				if (this.addprice === this.price+300){
					this.addPrice = this.price
				}else {
					let taxPrice = this.price +300
					this.addPrice = taxPrice
				}
			}
		},
	
		buyCheck() {
			if (this.checked === true || 
			this.payed.match(/^\d{14,16}$/) && this.limit.match(/^\d{14,16}$/) && this.number.match(/^\d{3,4}$/) && this.cardName.match(/^[A-Z]+\s[A-Z]+$/)) {
				this.buy = true
			}else {
				this.buy = false
			}
		},
		all() {
			this.isOver = 'up'

			setTimeout(this.auto, 3000,);
		},
		auto() {
			this.isOn = true
			this.$emit('isoff','this.isUp');
		}
	},

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
  .fade-enter-active {
  transition: all 1s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
  .pa {
		display: inline-block;
		text-align: center;
			position: unset;
			display: block;
			margin: 1% auto;
	}

.bottom{
	margin: 0 1%;
	width: 10%;
}

	.noa {
		color: rgba(0, 0, 0, 0.404);
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

  h2 {
	text-align: center;
	font-weight: bold;
	border-bottom:2px solid green;
	margin: 0 auto;
	margin-bottom: 5px;
	width: 30%;
	padding: 5px;
  }
  h3 {
		margin: 5px;
		display: inline-block;
  }
	img {
		display: block;
	width: 90%;
	padding: 5%;
	height: 50px;
}
  input {
	display: inline-block;
	width: 10%;
	outline: none;

  }
	label {
		display: inline-block;
		text-align: center;
		color: $main-color;
		
	}
	button {
	color: white;
	background: #295a31;
}

	
  #perches-body {
		height: 70vh;
		width: 100vw;
	}

	
	.box-price {
		padding: 5px;
		@include media(m){
			padding: 0;
		}
	}
	.shipping {
		display: block;
		padding: 5% 0;
		text-align: center;
		color: rgba(128, 128, 128, 0.644);
	}
	.myTax {
		display: inline-block;
		color: rgba(128, 128, 128, 0.644);
	}
	.addPrice {
		font-size: 1rem;
	}
	.state {
		display: flex;
		margin: 2px;
		justify-content: center;
	}
	.pay {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 1% 0 0 0;
	}
	.pay-name {
		margin-top: 1%;
		text-align: center;
		position: relative;
		
		@include media(m){
			padding: 1% 0; 
		}
	}
	.input-name-red {
		color: red;
		display: block;
		@include media(m) {
			font-size: 0.75rem;
		}
	}
	.input-name-blue {
		color: green;
		display: inline-block;
	}
	.pay-post {
		text-align: center;
		padding: 1%;
		position: relative;
		@include media(m){
			padding: 1% 0; 
		}
	}
	.input-post-blue {
		color: green;
		display: inline-block;
	}
	.pay-house {
		padding: 1%;
		position: relative;
		@include media(m){
			padding: 1% 0; 
		}
	}
	.input-house-red {
		color: red;
		display: block;
		@include media(m) {
			font-size: 0.75rem;
			margin-left: 30%;
		}
	}
	.input-house-blue {
		color: green;
		display: inline-block;
	}
	.pay-phone {
		position: relative;
		text-align: center;
		@include media(m){
			padding: 1% 0; 
		}
	}
	.input-phone-red {
		color: red;
		display: block;
		@include media(m) {
			font-size: 0.75rem;
			margin-left: 30%;
		}
	}
	.input-phone-blue {
		color: green;
		display: inline-block;
	}
	.pay-mail {
		padding: 1%;
		position: relative;
		@include media(m){
			padding: 1% 0; 
		}
	}
	.input-mail-red {
		color: red;
		text-align: center;
	
	}
	.input-mail-blue {
		color: green;
		display: inline-block;
	}
	.pay-pay {
		position: relative;
		@include media(m){
			padding: 1% 0; 
			text-align: center;
		}
	}
	.pay-payed {
		display: inline-block;
		margin-left: 5px;
		width: 20%;
	}
	.payed {
		text-align: center;
		display: inline;
		color: red;
		padding-left: 1px;
	}
	select {
		width: 10%;
		@include media(m){
			display: block;
		padding: 0 10%;
		width: 80%;
		margin: 0 10%;
		}
	}
	.flex {
			margin: 1%;
			display: flex;
			justify-content: space-around;
	}
	.buy {
		margin: 3% 45%;
		width: 10%;
	}
	.result {
		display: inline-block;
		
		color: red;
	}


	.good {
		color: blue;
	}
	#none {
		filter: opacity(0);
	}
	
	.input-red {
		border:solid 4px rgba(235, 50, 4, 0.705);
		text-align: start;
	}
	.input-blue {
		border:solid 4px rgba(231, 130, 15, 0.493);
		border:solid 2px 2px $main-color;
		@include media(m){
			font-size: 0.75rem;
		}
	}
	.input-postred {
		border:solid 4px rgba(235, 50, 4, 0.705);
		margin-left: -15px;
		@include media(m){
			font-size: 0.5rem;
			margin: 1%;
		}
		
	}
	.input-postblue {
		margin-left: -15px;
		border:solid 4px rgba(231, 130, 15, 0.493);
	}
	.input-mailred {
		border:solid 4px rgba(235, 50, 4, 0.705);
		margin-left: -60px;
		@include media(m){
			width: 40%;
			margin-left: -30px;
		}
	}
	.input-mailblue {
		margin-left: -60px;
		border:solid 4px rgba(231, 130, 15, 0.493);
		@include media(m){
			width: 40%;
			margin-left: -30px;
		}
	}
	#checkbox {
		display: inline-block;
	}
	.pay-card-limit {
		display: inline-block;
		margin-left: 5px;
		width: 10%;
	}
	.pay-card-number {
		display: inline-block;
		margin-left: 5px;
		width: 18%;
		@include media(m){
			width: 15%;
		}
		}
	.pay-card-name {
		display: inline-block;
		width: 20%;
		margin-left: 5px;
		@include media(m){
			width: 30%;
		}
	}
	.o {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
		left: 20%;
		height: 115%;
		top: -15%;
		text-align: center;
		padding: auto 0;
		z-index: 50;
		font-size: 2rem;
		color: orange;
		backdrop-filter: brightness(10%);
		@include media(m){
			width: 100%;
			height: 115%;
			left: 0;
			top: -15%;
		}
	}
	p {
		color: rgb(72, 72, 80);
		width: 60%;
	}
	.offButton {
		color: orange;
		border-radius: 3px;
	}
	.box {
	text-align: center;
	padding: 10px;
	margin: 5px;
	border: 3px solid $main-color;
	border-radius: 8px;
	box-shadow: 0 0 5px 1px rgb(160, 152, 152);
	}
	.box-price {
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 5px 0;
		border-top: 1px dotted $main-color;
	}
</style>