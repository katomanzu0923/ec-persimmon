<template>
	<div class="top-body">
      <div class="pag">
					<transition name="fade">
						<div v-if="isSeason == '1'" class="page"><img src="@/assets/name4.png" alt="a" ></div>
					</transition>
					<transition name="fade">
						<div v-if="isSeason == '2'" class="page"><img src="@/assets/top_jp_bac.png" alt="a"></div>
					</transition>
					<transition name="fade">
						<div v-if="isSeason == '3'" class="page"><img src="@/assets/kaki.png" alt="a" id="kaki"></div>
						<div class="right">
				<p class="right-text">秋の魅力をあなたのもとへ</p>
				<p class="right-text02">今が食べ頃です</p>
			</div>
					</transition>
					<transition name="fade">
						<div v-if="isSeason == '4'"><img src="@/assets/top_jp_bac.png" alt="a"></div>
					</transition>
      </div>
			<div class="right">
				<p class="right-text">秋の魅力をあなたのもとへ</p>
				<p class="right-text02">今が食べ頃です</p>
			</div>
			<button @click="back()" :class="[isButton === true? 'none01': 'none01',isButton01 === true? 'none02':'none01']" id="is">{{ backSeason }}</button>
			<button id="it" @click="next()" :class="[isButton === true? 'none02': 'none01',isButton01 === true? 'none01':'none01']" >{{ nextSeason }}</button>
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
  $main-color: rgb(231, 163, 85);
  $sub-color: rgb(230, 133, 23);
  img {
		width: 100%;
		height: 500px;
	}
	button {
		border: none;
		background: none;
		outline: none;
		color: $main-color;
		font-size: 1rem;
	}
	button:hover {
		color: $sub-color;
		font-weight: bold;
	}
	#is::after{ 
		display: block; 
		position: absolute;
		top: -10px;
		left: -50%;
		width: 40px; 
		height: 40px; 
		border-top: 4px solid $main-color; 
		border-right: 4px solid $main-color;
		-webkit-transform: rotate(-135deg); 
		content: ""; 
	}
	
	
	#it::after{ 
		display: block; 
		position: absolute;
		top: -10px;
		right: -50%;
		width: 40px; 
		height: 40px; 
		border-top: 4px solid $main-color; 
		border-right: 4px solid $main-color; 
		-webkit-transform: rotate(45deg); 
		content: ""; 
	}

	.fade-enter-active {
  transition: all 3s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-to, .fade-leave{
	opacity: 1;
}
	.pag {
		position: absolute;
		bottom: 0;
		width: 70%;
		left: 0;
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
		top: 50%;
		left: 0;
	}
	#it {
		position: absolute;
		top: 50%;
		right: 0;
	}
	#kaki {
		height: 800px;
		width: 100%;
	}
	.right {
		position: absolute;
		right: 0%;
		width: 30%;
		height: 80%;
    writing-mode: vertical-rl;
		font-size: 2rem;
		color: rgb(233, 155, 67);
	}
	.right-text {
		position: absolute;
		left: 0;
		height: 100%;
		top: 0%;
		margin: 20%;
	}
	.right-text02 {
		position: absolute;
		right: 0;
		bottom: 0;
		margin: 20%;
	}
</style>