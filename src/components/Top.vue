<template>
	<div class="top-body">
		<div class="left"><img src="@/assets/kaki.png" alt="クリスは立って彼の娘エルバを保持します" id="kaki"></div>
		<div class="right">
			<div class="right-txt">
				<h2>秋の魅力をあなたのもとへ</h2>
				<h2 class="right-ttl">今が食べ頃です</h2>
			</div>
		</div>
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
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese');


  $main-color: #C97A04;
  $sub-color: rgb(83, 67, 47);
	$breakpoints: (
	m: "only screen and (max-width: 980px)",
	pc: "only screen and (max-width: 1199px)",
);
@mixin media($breakpoint) {
	@media #{map-get($breakpoints, $breakpoint)} {
		@content;
	}
}
img{
	width: 70%;
	margin: 100px 15%;
}

h2{
	writing-mode: vertical-rl;
  text-orientation: mixed;
	color: #C97A04;
	font-family: 'Noto Serif JP', serif;	
	margin: 0 5%;
	font-size: 1.5rem;
}

.top-body{
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.left{
	width: 70%;
}

.right{
width: 30%;
}

.right-txt{
	margin:150px 0 0 0;
	height: 50%;
	display: flex;
	justify-content: center;
}

.right-ttl{
	text-align: right;
	-ms-writing-mode: tb-rl;
	writing-mode: vertical-rl;
}
</style>