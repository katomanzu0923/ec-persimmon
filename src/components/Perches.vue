<template>
  <div>
		<div id="perches-body" :class="{perchesBody:isOn}">
			<div class="perches-menu">
				<button @click="on()">✖︎</button>
				<div>
					<h2>購入ページ</h2>
						<div class="totall">
							<h3>購入内容</h3>
							<div class="state">個別傷なし{{number01}}個、傷あり{{number02}}個、傷なし{{number03}}ケース、傷あり{{number04}}ケース</div>
							<p v-if="isPay==='1'" class="totall-price">総計{{price}}円</p><p v-else class="totall-price">総計{{addPrice}}円</p>
						</div>
					<p>選択が正しければご確認の上以下の空欄を記述していただいて購入ボタンを押してください</p>
				</div>
				<div class="pay">
					<div class="pay-name">
						<label for="" class="bottom">お名前</label>
						<input :class="[isNameCheck === true? 'input-red': 'input-blue']"  type="text" v-model="name" v-on:change="nameCheck()">
						<div :class="[isNameCheck === true? 'input-name-red': 'input-name-blue']">{{nameResult}}</div><div></div>
					</div>
					<div class="pay-post">
						<label for="" class="bottom">郵便番号</label>
						<input :class="[isPostCheck === true? 'input-red': 'input-blue']" type="text" v-model="post" v-on:change="postCheck()">
						<div :class="[isPostCheck === true? 'input-post-red': 'input-post-blue']">{{postResult}}</div>
					</div>
					<div class="pay-house">
						<label for="" class="bottom">ご住所</label>
						<input id="mail" :class="[isHouseCheck === true? 'input-red': 'input-blue']" type="text"  v-model="house" v-on:change="houseCheck()">
						<div :class="[isHouseCheck === true? 'input-house-red': 'input-house-blue']">{{houseResult}}</div>
					</div>
					<div class="pay-phone">
						<label for="" class="bottom">電話番号</label>
						<input :class="[isPhoneCheck === true? 'input-red': 'input-blue']" type="text" v-model="phone" v-on:change="phoneCheck()">
						<div :class="[isPhoneCheck === true? 'input-phone-red': 'input-phone-blue']">{{phoneResult}}</div>
					</div>
					<div class="pay-mail">
						<label for="" class="label-bottom">メールアドレス</label>
						<input id="mail" :class="[isMailCheck === true? 'input-red': 'input-blue']" type="text"  v-model="mail" v-on:change="mailCheck()">
						<div :class="[isMailCheck === true? 'input-mail-red': 'input-mail-blue']">{{mailResult}}</div>
					</div>
					<div class="pay-pay">
						<label for="" class="label-bottom">支払い方法</label>
						<select v-model="pay" v-on:change="payCheck()"><option disabled value="">選択して下さい</option>
						<option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
              </option>
						</select>
						<input class="pay-payed" v-if="isPay==='1'" type="text" name="カード番号をご記入ください" id="" placeholder="カード番号をご記入ください"><div class="payed" v-else>手数料300円加算されましたがよろしいでしょうか</div>
					</div>
				</div>

				<button @click="auto()" class="buy">購入する</button>
			</div>
		</div>
		<div v-if="isPay === 'up'" class="o">
			ご購入ありがとうございます。また、御来店おまちしております
		</div>
		<div v-else>

		</div>
	</div>
</template>

<script>
 export default {
	data(){
		return {
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
		number02: {
			type: Number,
			default: 0
		},number03: {
			type: Number,
			default: 0
		},
		number04: {
			type: Number,
			default: 0
		}
	},
	methods: {
		on(){
			this.isOn = true
			this.$emit('isoff','this.isUp');
		},
		nameCheck(){
			if (this.name === "") {
				this.nameResult = "名前は必ず入力してください"
				this.good = ""
				this.isNameCheck = true
			}else{
				this.good = "オッケーです"
				this.nameResult = "次は郵便番号を記入してください！"
				this.isNameCheck = false
			}
		},
		postCheck(){
			if (this.post === "" || !this.post.match(/^\d{3}-?\d{4}$/)) {
				this.postResult = "郵便番号は必ず半角数字7文字で入力してください"
				this.good = ""
				this.isPostCheck = true
			}else{
				this.postResult = "次は住所を記入してください！！"
				this.isPostCheck = false
			}
		},
		houseCheck(){
			if (this.house === "") {
				this.houseResult = "住所は必ず入力してください"
				this.good = ""
				this.isHouseCheck = true
			}else{
				this.houseResult = "次は電話番号を記入してください！"
				this.isHouseCheck = false
			}
		},
		phoneCheck(){
			if (this.phone === "" || !this.phone.match(/^[0-9-]{6,9}$|^[0-9-]{11}$/ || /^¥d{3}-¥d{4}-¥d{4}$|^¥d{11}$/)) {
				this.phoneResult = "電話番号ハイフンなしで必ず入力してください"
				this.good = ""
				this.isPhoneCheck = true
			}else{
				this.phoneResult = "次は支払い方法を選択してください！"
				this.isPhoneCheck = false
			}
		},
		mailCheck() {
			if (this.mail === "" || !this.mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+$/)) {
				this.mailResult = "＠は必ず含んでください",this.change02 = false
				this.good = ""
				this.isMailCheck = true
			}else{
				this.mailResult = "大丈夫です"
				this.isMailCheck = false
			}
		},
		payCheck() {
			if (this.pay === 'クレジットカード(手数料0円)' ) {
				this.isPay = '1'
				this.addPrice = this.price
			}else {
				this.isPay = '2'
				if (this.addPrice === this.price) {
					this.addPrice = this.price +300
				}else {
					this.addPrice 
				}
			}
		},
		auto() {
			this.isPay = "up"
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
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
  }
  p {
	text-align: center;
	margin: 5px;
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
   background-color:orange;
   position:absolute;
   top:0;
   right:80%;
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
		height: 80%;
		top: 10%;
		left: 10%;
		z-index: 2;
		background: green;
	}
	.perches-menu {
		position: absolute;
		width: 60%;
		height: 80%;
		top: 10%;
		left: 20%;
		background: #fff;
		z-index: 2;
		background: rgb(236, 233, 227);
	}
	.totall {
		text-align: center;
		background: $main-color;
		width: 90%;
		padding: 5%;
	}
	.totall-price {
		margin: 10px;
	}
	.state {
		margin: 5px;
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
		position: absolute;
		color: green;
		display: block;
		margin-left: 20%;
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
		position: absolute;
		color: green;
		display: block;
		margin-left: 22%;
		top: 75%;
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
		position: absolute;
		color: green;
		display: block;
		margin-left: 20%;
		top: 75%;
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
		position: absolute;
		color: green;
		display: block;
		margin-left: 20%;
		top: 75%;
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
		position: absolute;
		color: green;
		display: block;
		margin-left: 20%;
		top: 75%;
	}
	.pay-pay {
		border-left: 1px solid orange;
		border-bottom: 1px solid orange;
	}
	.pay-payed {
		margin-left: 10px;
	}
	.payed {
		display: inline;
		color: red;
		padding-left: 10px;
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
	}
	.input-blue {
		border:solid 2px 2px $main-color;
	}
	.o {
		background: grey;
		padding: 10px;
	}
</style>