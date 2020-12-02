<template>
	<div class="contact-body">
		<div class="contact-title">
			<h1>お問いわせ先</h1>
		</div>
		<div class="contact">
			<div id="circle" :class="{up:change01}">1</div><div id="circle" :class="{up:change02}">2</div><div id="circle" :class="{up:change03}">3</div>
			<div class="contact-area">
					<label for="name">お名前</label>
					<input name="お名前" id="name"  rows="1" v-model="name" v-on:change="nameCheck()">
					<div class="result">{{nameResult}}</div>
					<label for="mail">メールアドレス</label>
					<input name="" id="mail" cols="30" rows="1" v-model="mail" v-on:change="mailCheck()">
					<div class="result">{{mailResult}}</div>
					<label for="content">ご要望内容</label>
					<textarea name="" id="content" cols="30" rows="10" v-model="content" v-on:change="contentCheck()"></textarea>
					<div class="result">{{contentResult}}</div>
					<div id="circle" :class="{up:change01}">1</div><div id="circle02" :class="{up:change02}">2</div><div id="circle03" :class="{up:change03}">3</div><button >送信</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			name: "",
			nameResult: "お名前を入力してください",
			mail: "",
			change01: false,
			mailResult: "メールアドレスは必ず@を含んでください",
			change02: false,
			content: "",
			contentResult:"ご要望をご記入してください",
			change03: false
		}

	},
	methods: {
		nameCheck(){
			if (this.name === "") {
				this.nameResult = "名前は必ず入力してください",this.change01 = false
			}else{
				this.nameResult = "大丈夫です",this.change01 =!this.change01
			}
		},
		mailCheck() {
			if (this.mail === "" || !this.mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+$/)) {
				this.mailResult = "＠は必ず含んでください",this.change02 = false
			}else{
				this.mailResult = "大丈夫です",this.change02 =!this.change02
			}
		},
		contentCheck() {
			if (this.content === "") {
				this.contentResult = "必ずご要望は記述してください",this.change03 = false
			}else{
				this.contentResult = "大丈夫です",this.change03 = !this.change03
			}
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
label {
	display: block;
}
button {
  text-decoration: none;
  color: #66d882;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid 1px rgb(0, 0, 0);
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: .4s;
	font-weight: 0.25rem;
	line-height: 80px;
}

button:hover {
  background: rgb(233, 155, 67);
}
input, textarea {
	outline: none;
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
.contact {
	text-align: center;
	margin-top: 100px;
}

#circle {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
	border: 1px solid black;
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
</style>