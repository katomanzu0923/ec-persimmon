<template>
  <div>
		<transition name="fade">
			<div  v-show="isPay === 'up'" class="o">
				ご購入ありがとうございます。またの御来店おまちしております
			</div>
		</transition>
		<div id="perches-body" :class="{perchesBody:isOn}">
			<div class="perches-menu">
				<button @click="on()" class="offButton">✖︎</button>
				<h1>ご購入内容</h1>
				<div class="totall">
					<div class="totall-left">
						<div v-if="number01 >=1" class="totall-box">
							<img src="@/assets/kaki.png" alt="">
							<div class="box-price">
								傷なし{{number01}}点<br>
								小計{{middlePrice01}}円
							</div>
						</div>
						<div v-if="number02 >=1" class="totall-box">
							<img src="@/assets/kaki.png" alt="">
							<div class="box-price">
								傷なし{{number02}}点<br>
								小計{{middlePrice02}}円
							</div>
						</div>
						<div v-if="number03 >=1" class="totall-box">
							<img src="@/assets/kaki.png" alt="">
							<div class="box-price">
								傷なし{{number03}}点<br>
								小計{{middlePrice03}}円
							</div>
						</div>
						<div v-if="number04 >=1" class="totall-box">
							<img src="@/assets/kaki.png" alt="">
							<div class="box-price">
								傷なし{{number04}}点<br>
								小計{{middlePrice04}}円
							</div>
						</div>
					</div>
					<div class="totall-right">
						<div v-if="isPay==='1'" class="totall-price">総計{{price}}円</div><div v-else class="totall-price">総計{{addPrice}}円<br><div class="addPrice">(300円追加されました)</div></div>
						<div class="shipping">内(送料   500円  手数料 {{myTax}}円)</div>
					</div>
				</div>
				<div class="pay">
					<div class="pay-name">
						<label for="" class="bottom">お名前</label>
						<input :class="[isNameCheck === true? 'input-red': 'input-blue']"  type="text" v-model="name" v-on:change="nameCheck()">
						<div :class="[isNameCheck === true? 'input-name-red': 'input-name-blue']">{{nameResult}}</div><div></div>
					</div>
					<div class="pay-post">
						<label for="" :class='{noa:noPost}' id="bottom">郵便番号</label>
						<input :class="[isPostCheck === true? 'input-postred': 'input-postblue']" type="text" v-model="post" :disabled="noPost" v-on:change="postCheck()">
						<div :class="[isPostCheck === true? 'input-post-red': 'input-post-blue']">{{postResult}}</div>
					</div>
					<div class="pay-house">
						<label for="" :class='{noa:noHouse}' id="bottom">ご住所</label>
						<input id="mail" :class="[isHouseCheck === true? 'input-red': 'input-blue']" type="text"  v-model="house" :disabled="noHouse" v-on:change="houseCheck()">
						<div :class="[isHouseCheck === true? 'input-house-red': 'input-house-blue']">{{houseResult}}</div>
					</div>
					<div class="pay-phone">
						<label for="" :class='{noa:noPhone}' id="bottom">電話番号</label>
						<input :class="[isPhoneCheck === true? 'input-postred': 'input-postblue']" type="text" v-model="phone" :disabled="noPhone" v-on:change="phoneCheck()">
						<div :class="[isPhoneCheck === true? 'input-phone-red': 'input-phone-blue']">{{phoneResult}}</div>
					</div>
					<div class="pay-mail">
						<label for="" :class='{noa:noMail}'>メールアドレス</label>
						<input id="mail" :class="[isMailCheck === true? 'input-mailred': 'input-mailblue']" type="text"  v-model="mail" :disabled="noMail" v-on:change="mailCheck()">
						<div :class="[isMailCheck === true? 'input-mail-red': 'input-mail-blue']">{{mailResult}}</div>
					</div>
					<div class="pay-pay">
						<label for="" :class='{noa:noPay}'>支払い方法</label>
						<select v-model="pay" :disabled="noPay" v-on:change="payCheck()"><option disabled value="">選択して下さい</option>
						<option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
              </option>
						</select>
						<input class="pay-payed" v-if="isPay==='1'" type="text" name="カード番号をご記入ください" id="" placeholder="カード番号" v-model="payed"  :disabled="noPay" v-on="buyCheck()">
						<input class="pay-card-limit" v-if="isPay==='1'" type="text"  id="" placeholder="有効期限 1/1" v-model="limit" :disabled="noPay" v-on="buyCheck()">
						<input class="pay-card-number" v-if="isPay==='1'" type="text" name="カード番号をご記入ください" id="" placeholder="セキュリティコード 123" v-model="number" :disabled="noPay" v-on="buyCheck()">
						<input class="pay-card-name" v-if="isPay==='1'" type="text" name="カード番号をご記入ください" id="" placeholder="名前 taro" v-model="cardName" :disabled="noPay" v-on="buyCheck()">
						<div class="payed" v-else>手数料300円加算されましたがよろしいでしょうか<input type="checkbox" class="pa" v-model="checked" v-on="buyCheck()"></div>
					</div>
				</div>

				<button @click="all()" class="buy" :disabled="!buy">購入する</button>
			</div>
		</div>
	</div>
</template>

<script>
 export default {
	data(){
		return {
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
				this.addPrice = this.price
				this.checked = false
			}else {
				this.myTax = '300'
				this.isPay = '2'
				if (this.addPrice === this.price) {
					this.addPrice = this.price +300
				}else {
					this.addPrice 
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
			this.isPay = 'up'
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
		position: absolute;
		display: inline-block;
		left: 65%;
		top: 30%;
	}
	.noa {
		color: rgba(0, 0, 0, 0.404);
	}
	h1 {
		text-align: center;
		padding-bottom: 1%;
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
	width: 50%;
	outline: none;
  }
	label {
		display: inline-block;
		left: 0;
		margin: 2% 5%;
		padding-right: 5%;
	}
	label::after{
   content:"";
   display:inline-block;
   width:1px;
   height:100%;
   position:absolute;
   top:0;
   right:80%;
	}
	button {
		display: inline-block;
	}
	
  #perches-body {
	position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 2;
		border: 1px solid green;
		backdrop-filter: brightness(40%);
  }
  .perchesBody {
		display: none;
		position: absolute;
		width: 60%;
		height: 90%;
		top: 10%;
		left: 10%;
		z-index: 2;
		background: green;
	}
	.perches-menu {
		position: absolute;
		width: 60%;
		height: 90%;
		top: 5%;
		left: 20%;
		background: #fff;
		z-index: 2;
		background: rgb(236, 233, 227);
	}
	.totall {
		border-top: 2px solid $main-color;
		border-bottom: 2px solid $main-color;
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin-left: 10%;
	}
	.totall-right {
		display: inline-block;
		background: rgba(128, 128, 128, 0.123);
		margin-right: 5%;
		margin-top: 5%;
		margin-bottom: 5%;
		border-radius: 5px;
		padding: 0 2%;
	}
	.totall-left {
		display: flex;
		display: inline-block;
		margin-left: 5%;
		margin-top: 5%;
		margin-bottom: 5%;
		width: 40%;
	}
	.totall-price {
		display: inline-block;
		text-align: center;
		width: 100%;
		padding-top: 20%;
		font-size: 1.5rem;
		color: red;
	}
	.totall-box {
		display: inline-block;
		margin: 0 1px;
		width: 30%;
		box-shadow: 0 0 5px 1px rgb(160, 152, 152);
	}
	.box-price {
		padding: 5px;
	}
	.shipping {
		display: block;
		padding-top: 5%;
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
		position: absolute;
		left: 5%;
		width: 90%;
		bottom: 10%;
		display: flex;
		flex-direction: column;
	}
	.pay-name {
		border: 1px solid orange;
		border-bottom: 1px dotted orange;
		padding: 1%;
		position: relative;
	}
	.input-name-red {
		color: red;
		display: block;
		position: absolute;
		margin-left: 20%;
		top: 70%;
	}
	.input-name-blue {
		color: green;
		display: inline-block;
		margin-left: 5px;
		top: 70%;
	}
	.pay-post {
		border-left: 1px solid orange;
		border-right: 1px solid orange;
		border-bottom: 1px dotted orange;
		padding: 1%;
		position: relative;
	}
	.input-post-red {
		color: red;
		display: block;
		position: absolute;
		margin-left: 22%;
		top: 75%;
	}
	.input-post-blue {
		color: green;
		display: inline-block;
		margin-left: 5px;
		top: 70%;
	}
	.pay-house {
		border-left: 1px solid orange;
		border-right: 1px solid orange;
		border-bottom: 1px dotted orange;
		padding: 1%;
		position: relative;
	}
	.input-house-red {
		color: red;
		display: block;
		position: absolute;
		margin-left: 20%;
		top: 75%;
	}
	.input-house-blue {
		color: green;
		display: inline-block;
		margin-left: 5px;
		top: 70%;
	}
	.pay-phone {
		border-left: 1px solid orange;
		border-right: 1px solid orange;
		border-bottom: 1px dotted orange;
		padding: 1%;
		position: relative;
	}
	.input-phone-red {
		color: red;
		display: block;
		position: absolute;
		margin-left: 20%;
		top: 75%;
	}
	.input-phone-blue {
		color: green;
		display: inline-block;
		margin-left: 5px;
		top: 70%;
	}
	.pay-mail {
		border-left: 1px solid orange;
		border-right: 1px solid orange;
		border-bottom: 1px dotted orange;
		padding: 1%;
		position: relative;
	}
	.input-mail-red {
		color: red;
		display: block;
		position: absolute;
		margin-left: 20%;
		top: 75%;
	}
	.input-mail-blue {
		color: green;
		display: inline-block;
		margin-left: 5px;
		top: 70%;
	}
	.pay-pay {
		position: relative;
		border-left: 1px solid orange;
		border-bottom: 1px solid orange;
	}
	.pay-payed {
		display: inline-block;
		margin-left: 5px;
		width: 20%;
	}
	.payed {
		display: inline;
		color: red;
		padding-left: 1px;
	}
	.buy {
		position: absolute;
		bottom: 0;
		width: 40%;
		margin: 20px 30%;
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
	}
	.input-postred {
		border:solid 4px rgba(235, 50, 4, 0.705);
		margin-left: -15px;
	}
	.input-postblue {
		margin-left: -15px;
		border:solid 4px rgba(231, 130, 15, 0.493);
	}
	.input-mailred {
		border:solid 4px rgba(235, 50, 4, 0.705);
		margin-left: -60px;
	}
	.input-mailblue {
		margin-left: -60px;
		border:solid 4px rgba(231, 130, 15, 0.493);
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
	}
	.pay-card-name {
		display: inline-block;
		width: 20%;
		margin-left: 24%;
		margin-bottom:20px;
	}
	.o {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 61%;
		height: 91%;
		top: 5%;
		left: 20%;
		text-align: center;
		padding: auto 0;
		z-index: 3;
		font-size: 2rem;
		color: orange;
		backdrop-filter: brightness(10%);
	}
	.offButton {
		color: orange;
		border: 2px solid orange;
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
		width: 90%;
		margin: 5px;
		padding: 5px;
		border-top: 1px dotted $main-color;
	}
</style>