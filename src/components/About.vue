<template>
	<div class="about-body">
		<div class="about-title">
			<h1>富有柿について</h1>
		</div>
		<div class="f">
			<div class="a"> 
			<h3>富有柿とは</h3>
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kaki.png" alt="" class="image">
				</div>
				<div class="content-text"><p>富有柿(ふゆうがき)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
			</div>
		</div>
		<div class="b"> 
			<div class="about-content">
				<div class="content-image">
					<h3>富有柿の歴史</h3>
					<img src="@/assets/kakihistory.png" alt="" class="image">
				</div>
				<div class="content-text"><p>今から約400年前、時の将軍・徳川家康によって江戸を中心とした幹線道路「五街道」が整備されました。その五街道の一つ、木曽を貫く「中山道」は江戸と京都を結ぶ重要な街道として独自の文化が育まれ、道中の69を数える宿場の総称を「中山道六十九次」と呼ばれています。中山道55番目の宿場「美江寺宿」(岐阜県瑞穂市美江寺)があります。当時から柿栽培が盛んだったことを示す貴重な資料が残されています</p></div>
			</div>
		</div>
		<div class="c"> 
			<h3>地域と富有柿</h3>
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kakiarea.png" alt="" class="image">
				</div>
					<div class="content-text"><p>地域にねざされた瑞穂市のマスコットキャラクター「かきりん」が、富有柿をPRするために、色々な場所に出現しています。</p></div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>;
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
.fade-enter-active {
  transition: all 3s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}
h1 {
	margin: 5px;
	padding: 1px;
	text-align: center;
	font-size: 2rem;
	color: $main-color;
	@include media(m){
		font-size:1rem;
	}
}
h3 {
	text-align: center;
	margin: 10px;
	font-size: 1.5rem;
	padding-top: 5px;
	color: rgba(0, 128, 0, 0.747);
	@include media(m){
		font-size: 1rem;
		margin: 1px;
		padding: unset;
	}
}
p {
	font-size: 1rem;
}
img {
	width: 450px;
	height: 300px;
	@include media(m) {
	width: 100px;
	height: 100px;
}
}
.about-body {
	position: absolute;
	top: 12%;
	height: 100vh;
	width: 100%;
	margin-bottom: 20%;
	@include media(m){
		height: 80%;
	}
}
.f {
	@include media(m){
		display: flex;
		flex-direction: row;
	}
}
.a {
	background: $main-color;
	width: 70%;
	text-align: start;
	@include media(m){
		margin: 1%;
	}
}
.b {
	background: rgba(134, 233, 67, 0.527);
	width: 70%;
	margin-left: 30%;
	@include media(m){
		margin: 1%;
}
}
.c {
	background: $main-color;
	width: 70%;
	text-align: start;
	@include media(m){
		margin: 1%;
	}
}
.about-title {
	margin: 1% auto;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 1px solid $main-color;
	border-bottom: 1px solid $main-color;
	border-radius: 20px;
	@include media(m){
	width: 85%;
}
}
.about-title {
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
.content {
	display: inline-block;
}
.about-content {
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 5%
}
.about-content {
	@include media(m){
		flex-direction: column;
	}
}
.content-image {
	display: inline-block;
	text-align: center;
}
.image {
	width: 70%;
}
.content-text {
	display: inline-block;
	width: 70%;
	top: 30%;
	font-size: 1rem;
	padding-left: 5%;
	@include media(m){
		padding:3%;
		width: 95%;
	}
}
.content-image-b {
	display: inline-block;
}
.content-text-b {
	display: inline-block;
	width: 80%;
	top: 30%;
	font-size: 1rem;
	padding-left: 5%;
}
</style>