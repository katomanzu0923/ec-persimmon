<template>
	<div class="contact-body">
		<div v-if="isOut" class="out">
			<p>送信が完了しました。</p>
		</div>
		<div class="contact-title">
			<h1>お問いわせ先</h1>
		</div>
		<div class="contact">
			<div class="contact-lien">
				<div id="circle" :class="{up:change01}"></div><div id="circle" :class="{up:change02}"></div><div id="circle" :class="{up:change03}"></div>
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
			isOut:false
		}

	},
	methods: {
		nameCheck(){
			if (this.name === "") {
				this.nameResult = "名前は必ず入力してください",this.change01 = false,this.mailChecking = true
			}else{
				this.change01 = true,this.mailChecking = false,this.nameResult = ""
			}
		},
		mailCheck() {
			if (this.mail === "" || !this.mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+$/)) {
				this.mailResult = "＠は必ず含んでください",this.change02 = false,this.textChecking = true
			}else{
				this.change02 = true,this.textChecking = false,this.mailResult = ""
			}
		},
		contentCheck() {
			if (this.content === "") {
				this.contentResult = "必ずご要望は記述してください",this.change03 = false,this.sendChecking = true
			}else{
				this.contentResult = "大丈夫です",this.change03 = true,this.sendChecking = false
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
			this.sendChecking = true
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
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
	border:1px solid white;
	box-shadow: 0 0 1px 1px rgba(214, 108, 8, 0.527);
}

input {
	display: block;
	outline: none;
	background-color: white;
	border:1px solid white;
	box-shadow: 0 0 1px 1px rgba(214, 108, 8, 0.527);
}
h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
}
.contact-body {
	display: block;
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
}
.contact {

}
.contact-lien {
	width: 60%;
	margin: 0 20%;
	border: 1px solid $main-color;
	border-bottom: none;
	text-align: center;
}
.contact-private {
	display: flex;
	justify-content: space-evenly;
	border: 1px solid $main-color;
	border-bottom: none;
	border-top: 1px dotted $main-color;
	width: 60%;
	margin: 0 20%;
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
}
#f {
	color: none;
}
</style>