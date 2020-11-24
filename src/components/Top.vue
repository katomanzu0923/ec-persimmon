<template>
	<div class="top-body">
		
      <!-- ページ全体、このleftをtransitionでスライドさせてページを動かす -->
      <div class="pag">
        <div v-if="isSeason == '1'" class="page"><img src="@/assets/name4.png" alt="a"></div>
        <div v-else-if="isSeason == '2'" class="page"><img src="@/assets/top_jp_bac.png" alt="a"></div>
        <div v-else-if="isSeason == '3'" class="page"><img src="@/assets/name4.png" alt="a"></div>
				<div v-else><img src="@/assets/top_jp_bac.png" alt="a"></div>
      </div>
			<button @click="back()" :class="[isButton === true? 'none01': 'none01',isButton01 === true? 'none02':'none01']" id="is">{{ backSeason }}</button>
			<button id="it" @click="next()" :class="[isButton === true? 'none02': 'none01',isButton01 === true? 'none01':'none01']" >{{ nextSeason }}</button>
			<div class="hooter">@copy right katomanzu</div>
	</div>
</template>

<script >
export default {
  data() {
    return {
			isSeason: 3,
			isButton: false,
			isButton01: false,
			backSeason: "夏へ",
			nextSeason: "冬へ",
    }
	},
	methods: {
		next() {
			this.isSeason +=1;
			if (this.isSeason === 4) {
				this.isButton = true 
			}else {
				this.isButton01 = false
			}
			if (this.isSeason === 2) {
				this.nextSeason = "秋へ", this.backSeason = "春へ"
			}else if (this.isSeason === 4) {
				this.backSeason = "秋へ"
			} else if (this.isSeason === 3) {
				this.nextSeason = "冬へ",this.backSeason = "夏へ"
			}
		},
		back() {
			this.isSeason -=1;
			if(this.isSeason === 1) {
				this.isButton01 = true 
			}else {
				this.isButton = false
			}
			if (this.isSeason === 2) {
				this.nextSeason = "秋へ",this.backSeason = "春へ"
			}else if (this.isSeason === 2) {
				this.backSeason = "春へ" 
			}else if (this.isSeason === 3) {
				this.backSeason = "夏へ" 
			}else if (this.isSeason === 1) {
				this.nextSeason = "夏へ"
			}
		}
	}
}

</script>

<style lang="scss" scoped>
  img {
		width: 100%;
		height: 500px;
	}
	button {
		border: none;
	}
	.top-body {
	}
	.pag {
		position: absolute;
		top: 20%;
		width: 80%;
		margin-top: 5%;
		left: 10%;

	}
	.none01 {
		display: inline-block;
		margin: 5%;
	}
	.none02 {
		display: none;
	}
	#is {
		position: absolute;
		top: 40%;
		left: 0;
	}
	#it {
		position: absolute;
		top: 40%;
		right: 0;
	}
	.hooter {
		position: absolute;
		position: fixed;
		bottom: 0;
		background: rgba(255, 208, 0, 0.466);
		height: 3%;
		left: 0;
		width: 100%;
		text-align: center;

	}
</style>