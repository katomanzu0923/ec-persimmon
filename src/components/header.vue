<template>
	<div class="header">
		<div class="header-body">
			<div class="lo" @click="currentComponet='Top'">
				<img src="@/assets/fuyukaki.png" alt="" class="logo">
			</div>
			<div class="header-menu">
				<button @click="currentComponet = 'top';  change_top()" class="top">
					{{top_menu}}
					<div v-if="isActiveTop ===  'off'" class="underDown"></div><div v-else class="underUp"></div>
				</button>
				<button @click="currentComponet = 'about'; change_about()" class="about">
					{{about_menu}}
					<div v-if="isActiveAbout ===  'off'" class="underDown"></div><div v-else class="underAbout"></div>
				</button>
				<button @click="currentComponet = 'buy'; change_buy()" class="buy">
					{{buy_menu}}
					<div v-if="isActiveBuy === 'off'" class="underDown"></div><div v-else class="underBuy"></div>
				</button>
				<button @click="currentComponet = 'contact';  change_contact()" class="contact">
					{{contact_menu}}
					<div v-if="isActiveContact ===  'off'" class="underDown"></div><div v-else class="underContact"></div>
				</button>
			</div>
		</div>
		
		<keep-alive>
			<component :is="currentComponet" class="contents">f</component>
		</keep-alive>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentComponet: "Top",
			number: "3",
			top_menu: "私たちについて",
			buy_menu: "商品一覧",
			about_menu: "富有柿について",
			contact_menu: "お問い合わせ",
			isActiveTop: "off",
			isActiveBuy: "off",
			isActiveAbout: "off",
			isActiveContact: "off"
		}
	},
	props: {
		price: {
			type: Number,
			default: 0
		}
	},
	methods: {
		change_top() {
			this.top_menu = "選択中",
			this.buy_menu = "商品一覧",
			this.about_menu = "富有柿について",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "on"
			this.isActiveBuy = "off"
			this.isActiveAbout = "off"
			this.isActiveContact = "off"
		},
		change_buy()  {
			this.top_menu = "私たちについて",
			this.buy_menu = "商品一覧",
			this.about_menu = "富有柿について",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "off",
			this.isActiveBuy = "on",
			this.isActiveAbout = "off"
			this.isActiveContact = "off"
		},
		change_about()  {
			this.top_menu = "私たちについて",
			this.buy_menu = "商品一覧",
			this.about_menu = "選択中",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "off",
			this.isActiveBuy = "off",
			this.isActiveAbout = "on"
			this.isActiveContact = "off"
		},
		change_contact()  {
			this.top_menu = "Top私たちについて",
			this.buy_menu = "商品一覧",
			this.about_menu = "富有柿について",
			this.contact_menu = "選択中"
			this.isActiveTop = "off",
			this.isActiveBuy = "off",
			this.isActiveAbout = "off"
			this.isActiveContact = "on"
		}
	}
}
</script>

<style lang="scss" scoped>
$main-color: rgb(231, 163, 85);
$sub-color: rgb(230, 133, 23);
  button {
		padding: 2%;
		width: 30%;
		background: transparent;
    outline: 0;
		border: none;
  }
	button:focus {
		background: transparent;
	}
	p {
		padding: 1%;
		font-size: 2rem;
		color: $main-color;
	}
	.lo {
		position: absolute;
		top: 0;
		left: 0;
		margin: 2%;
	}
	.logo {
		width: 300px;
		height: 50px;
	}
  .header-body {
		position: relative;
		height: 115px;
		color: $main-color;
		width: 100%;
		text-align: center;
		background: #fff;
		border-bottom:1px solid grey ;
	}
	
	.header-menu {
		position: absolute;
		display: flex;
		width: 50%;
		right: 0;
		justify-content: start;
		margin: 2% 0;
		align-content: space-around;
		color:$main-color;
		top: 0;
		height: 10px;
	}
	.top	{
		border-left: 1px solid $main-color;
		border-right: 1px solid $main-color;
		position: relative;
		color:$main-color;
		padding-bottom: 40px;
	}
	.underDwon::before {
		filter: opacity(0);
	}
	.underUp::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:$sub-color;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}

	.buy {
		border-left: 1px solid $main-color;
		border-right: 1px solid $main-color;
		position: relative;
		color:$main-color;
		padding-bottom: 40px;
	}
	.underBuy::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:$sub-color;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
	.about {
		position: relative;
		color:$main-color;
		padding-bottom: 40px;
	}
	.underAbout::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:$sub-color;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
	.contact {
	
		position: relative;
		color:$main-color;
		padding-bottom: 40px;
	}
	.underContact::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color: $sub-color;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
</style>