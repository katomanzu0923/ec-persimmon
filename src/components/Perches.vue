<template>
  <div>
		<div id="perches-body" :class="{perchesBody:isOn}">
			<div class="perches-menu">
				<button @click="on()">✖︎</button>
				<div class="totall">
					<h2>購入ページ</h2>
					<div>
						<div class="totall">
							<p>購入内容</p>
							<div>傷なし{{number01}}個、傷あり{{number02}}個、傷なし{{number03}}ケース、傷あり{{number04}}ケース</div>
							総計{{price}}円
						</div>
					</div>
					<p>選択が正しければご確認の上以下の空欄を記述していただいて購入ボタンを押してください</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isOn:false,
			isUp:'down'
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
		}
	}
}
</script>

<style lang="scss" scoped>

#perches-body {
	position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 2;
		border: 1px solid green;
		backdrop-filter: blur(2px);
}
  .perchesBody {
		display: none;
		position: absolute;
		width: 80%;
		height: 80%;
		top: 10%;
		left: 10%;
		z-index: 2;
		background: green;
	}
	.perches-menu {
		position: absolute;
		width: 80%;
		height: 80%;
		top: 10%;
		left: 10%;
		background: #fff;
		z-index: 2;
		border: 1px solid orange;
	}
	.totall {
		text-align: center;
		margin: 5%;
	}
</style>