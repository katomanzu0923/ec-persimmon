<template>
	<div class="contact-body">
		<div class="contact">
			<div class="contact-title">お問い合わせ</div>
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
label {
	display: block;
}
.contact {
	text-align: center;
	margin-top: 100px;
}

#circle {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
	border: 1px solid black;
	line-height: 50px;
	margin: 10px;
}
.contact-area {
	border: 1px solid grey;
	position: absolute;
	width:60%;
	left: 20%;
	height: 50%;
}
.result {
	margin: 10px;
}
.up {
	background: blue;
}
</style>