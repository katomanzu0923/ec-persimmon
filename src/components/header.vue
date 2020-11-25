<template>
	<div class="header">
		<div class="header-body">
			<div>
				<p><span class="title-f">柿</span>の販売所</p>
			</div>
			<div class="header-menu">
				<button @click="currentComponet = 'top';  change_top()" class="top">
					{{top_menu }}
					<div v-if="isActiveTop ===  'off'" class="underDown"></div><div v-else class="underUp"></div>
				</button>
				<button @click="currentComponet = 'buy'; change_buy()" class="buy">
					{{buy_menu}}
					<div v-if="isActiveBuy === 'off'" class="underDown"></div><div v-else class="underBuy"></div>
				</button>
				<button @click="currentComponet = 'about'; change_about()" class="about">
					{{about_menu}}
					<div v-if="isActiveAbout ===  'off'" class="underDown"></div><div v-else class="underAbout"></div>
				</button>
				<button @click="currentComponet = 'contact';  change_contact()" class="contact">
					{{contact_menu}}
					<div v-if="isActiveContact ===  'off'" class="underDown"></div><div v-else class="underContact"></div>
				</button>
			</div>
			<div class="header-current-body">
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
			top_menu: "Top",
			buy_menu: "購入",
			about_menu: "富有柿について",
			contact_menu: "お問い合わせ",
			isActiveTop: "off",
			isActiveBuy: "off",
			isActiveAbout: "off",
			isActiveContact: "off"
		}
	},
	methods: {
		change_top() {
			this.top_menu = "選択中",
			this.buy_menu = "購入",
			this.about_menu = "富有柿について",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "on"
			this.isActiveBuy = "off"
			this.isActiveAbout = "off"
			this.isActiveContact = "off"
		},
		change_buy()  {
			this.top_menu = "Top",
			this.buy_menu = "選択中",
			this.about_menu = "富有柿について",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "off",
			this.isActiveBuy = "on",
			this.isActiveAbout = "off"
			this.isActiveContact = "off"
		},
		change_about()  {
			this.top_menu = "Top",
			this.buy_menu = "購入",
			this.about_menu = "選択中",
			this.contact_menu = "お問い合わせ"
			this.isActiveTop = "off",
			this.isActiveBuy = "off",
			this.isActiveAbout = "on"
			this.isActiveContact = "off"
		},
		change_contact()  {
			this.top_menu = "Top",
			this.buy_menu = "購入",
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
$main-color: rgba(230, 132, 21, 0.562); 
  button {
		padding: 1%;
		width: 30%;
		background: transparent;
    outline: 0;
		border: none;
  }
	button:focus {
		color: green;
		background: transparent;
	}
	p {
		padding: 1%;
		font-size: 2rem;
		color: green;
	}

  .header-body {
		position: relative;
		height: 150px;
		background: $main-color;
		color: $main-color;
		text-align: center;
	}
	.title-f {
		display: inline-block;
		font-family: 'Noto Sans JP', sans-serif;
		transform: rotate(-25deg);
		font-weight: bold;
		margin: 5px;
		font-size: 2.5rem;
	}
	.header-menu {
		position: absolute;
		bottom: 0;
		display: flex;
		width: 80%;
		left: 10%;
		justify-content: center;
		align-content: space-between;
		margin-bottom: 10px;
		color:green;
	}
	.top	{
		border-left: 1px solid green;
		position: relative;
		color:green;
	}
	.underDwon::before {
		filter: opacity(0);
	}
	.underUp::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:#0097A7;
   position:absolute;
   bottom:-10px;
   left:10%;
		filter: opacity(100%);
	}

	.buy {
		border-left: 1px solid green;
		border-right: 1px solid green;
		position: relative;
		color:green;
	}
	.underBuy::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:#0097A7;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
	.about {
		border-right: 1px solid green;
		position: relative;
		color:green;
	}
	.underAbout::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:#0097A7;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
	.contact {
		border-right: 1px solid green;
		position: relative;
		color:green;
	}
	.underContact::before { 
	content:"";
   display:block;
   width:80%;
   height:3px;
   background-color:#0097A7;
   position:absolute;
   bottom:-10px;
   left:10%;filter: opacity(100%);
	}
</style>