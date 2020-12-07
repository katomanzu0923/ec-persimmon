<template>
	<div class="contact-body">
		<div v-if="isOut" class="out">
			<p>送信が完了しました。</p>
		</div>
		<div class="contact-title">
			<h1>お問い合わせ先</h1>
		</div>
		<div class="contact">
			<div class="contact-lien">
				<div id="inline" :class="{up:change01}">{{contactName}}</div><div id="inline" :class="{up:change02}">{{contactMail}}</div><div id="inline" :class="{up:change03}">{{contactText}}</div>
			</div>
			<div class="contact-private">
				<div class="contact-name">
					<label for="name">お名前</label>
					<input name="お名前" id="name"  rows="1" v-model="name" v-on:change="nameCheck()">
					<div class="nameResult">{{nameResult}}</div>
				</div>
				<div class="contact-mail">
					<label for="mail">メールアドレス</label>
          <input name="" id="mail" cols="30" rows="1" v-model="mail" :disabled="mailChecking" v-on:change="mailCheck()">
					<div class="mailResult">{{mailResult}}</div>
				</div>
			</div>
			<div class="contact-message">
				<label for="content" class="label-message">ご要望内容</label>
				<textarea name="" id="content" cols="30" rows="10" v-model="content" :disabled="textChecking" v-on:change="contentCheck()"></textarea>
			</div>
			<div class="cotact-send">
				<button @click="out()" :class="{up:!sendChecking}" :disabled="sendChecking">送信</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			name: "",
			nameResult: "",
			mail: "",
			change01: false,
			mailResult: "",
			mailChecking: true,
			change02: false,
			content: "",
			contentResult:"ご要望をご記入してください",
			change03: false,
			textChecking: true,
			sendChecking: true,
			isOut:false,
			contactName:"1.お名前入力ください",
			contactMail:"2.メールアドレスを入力してください",
			contactText:"3.お問い合わせ内容を入力してください"
		}

	},
	methods: {
		nameCheck(){
			if (this.name === "") {
				this.nameResult = "名前は必ず入力してください",this.change01 = false,this.mailChecking = true
			}else{
				this.change01 = true,this.mailChecking = false,this.nameResult = "",this.contactName = 'メールアドレスを入力しましょう！'
			}
		},
		mailCheck() {
			if (this.mail === "" || !this.mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+$/)) {
				this.mailResult = "＠は必ず含んでください",this.change02 = false,this.textChecking = true
			}else{
				this.change02 = true,this.textChecking = false,this.mailResult = "",this.contactMail = 'お問い合わせ事項を入力しましょう！'
			}
		},
		contentCheck() {
			if (this.content === "") {
				this.contentResult = "必ずご要望は記述してください",this.change03 = false,this.sendChecking = true
			}else{
				this.contentResult = "大丈夫です",this.change03 = true,this.sendChecking = false,this.contactText = '内容を確認して送信ボタンを押しましょう！'
			}
		},
		out() {
			this.isOut = true
			setTimeout(this.auto, 3000,);
		},
		auto() {
			this.isOut = false
			this.name = "",
			this.mail = "",
			this.content = "",
			this.change01 = false,
			this.change02 = false,
			this.change03 = false,
			this.mailChecking = true,
			this.textChecking = true,
			this.sendChecking = true,
			this.contactName = "1.お名前入力ください",
			this.contactMail = "2.メールアドレスを入力してください",
			this.contactText = "3.お問い合わせ内容を入力してください"
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
label {
	display: block;
	text-align: start;
	padding-bottom: 5px;
	color:$main-color;
}
button {
  text-decoration: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid 1px $main-color;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: .4s;
	font-weight: 0.25rem;
	line-height: midlle;
}
textarea {
	width: 60%;
	margin-bottom: 2%;
	outline: none;
	border:1px solid $main-color;
	box-shadow: 0 0 1px 1px rgba(214, 108, 8, 0.527);
}

input {
	display: block;
	outline: none;
	background-color: white;
	border:1px solid $main-color;
	box-shadow: 0 0 1px 1px rgba(214, 108, 8, 0.527);
	@include media(m){
		width: 50%;
	}
}
h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
	@include media(m){
		margin: unset;
		font-size: 1.5rem;
	}
}
.contact-body {
	display: block;
	@include media(m){
		position: absolute;
		top: 10%;
		width: 100%;
	}
}
#inline {
	display: inline-block;
	border: 1px solid orange;
	width: 100%;
	padding: 1%;
	@include media(m) {
		padding: 1px 0;
	}
}
.out {
	position: absolute;
	width: 61%;
	margin: 0 20%;
	top: 21%;
	height: 60%;
	backdrop-filter: brightness(30%);
	text-align: center;
	line-height: middle;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	color: orange;
	@include media(m){
		width: 70%;
		margin: 0 15%;
		height: 95%;
		top: 8%;
		font-size: 1.5rem;
	}
}
.contact {

}
.contact-lien {
	display: flex;
	color: $main-color;
	width: 60%;
	margin: 0 20%;
	border: 1px solid $main-color;
	border-bottom: none;
	text-align: center;
	@include media(m){
		display: block;
		width: 70%;
		margin: 0 15%;
	}
}
.contact-private {
	display: flex;
	justify-content: space-evenly;
	border: 1px solid $main-color;
	border-bottom: none;
	border-top: 1px dotted $main-color;
	width: 60%;
	margin: 0 20%;
	@include media(m){
		width: 70%;
		margin: 0 15%;
	}
}
.contact-name {
	padding: 2%;
}
.nameResult {
	display: block;
	text-align: start;
	color: red;
}
.mailResult {
	display: block;
	text-align: start;
	color: red;
	width: 65%;
}
.contact-mail {
	padding: 2%;
	padding-bottom: 5px;
}
.contact-message {
	width: 60%;
	margin: 0 20%;
	text-align: center;
	border: 1px solid $main-color;
	border-top: none;
	border-bottom: none;
	@include media(m){
		width: 70%;
		margin: 0 15%;
	}
}
.label-message {
	width: 60%;
	margin: 0 20%;
	padding-top: 2%;
	padding-bottom: 5px;
}
#circle {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 50%;
	border: 1px solid $main-color;
	line-height: 30px;
	margin: 10px;
}
#circle02 {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
	border: 1px solid black;
	line-height: 50px;
	margin: 10px;
}
#circle03 {
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 50%;
	border: 1px solid black;
	line-height: 70px;
	margin: 10px;
}
.contact-area {
	
	border: 1px solid rgb(255, 174, 0);

	width:60%;
	left: 20%;
	height: 50%;
	margin: 0 20%;
	color: rgb(255, 174, 0);
}
.cotact-send {
	border: 1px solid $main-color;
	border-radius: 1px;
	border-top: none;
	text-align: center;
	width: 60%;
	margin: 0 20%;
	padding: 5px 0;
	@include media(m){
		width: 70%;
		margin: 0 15%;
	}
}
.result {
	margin: 10px;
}
.up {
	background: rgb(233, 155, 67);
	color: green;
}
.contact-title {
	margin: 1% auto;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 1px solid $main-color;
	border-bottom: 1px solid $main-color;
	border-radius: 20px;
	@include media(m){
		width: 70%;
		margin: 1% 15%;
		font-size: 1.5rem;
	}
}
#f {
	color: none;
}
</style>