<template>
	<div class="about-body">
		<div class="about-title">
			<h1>富有柿について</h1>
		</div>
		<div class="f">
			<transition name="fade">
			<div class="a" v-if="up === 'a'"> 
				<h3>1.富有柿とは</h3>
				<div class="about-bl">
					<div class="content-text"><p>富有柿(ふ)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
					<div class="img"><img src="@/assets/kaki01.png" alt="クリスは立って彼の娘エルバを保持します" id="kaki"></div>
				</div>
			</div>
			</transition>
			<transition name="fade">
			<div class="a"> 
				<h3>2.富有柿の歴史</h3>
				<div class="about-bl-left">
					<div class="img"><img src="@/assets/kakihistory.png" alt="クリスは立って彼の娘エルバを保持します" id="kaki"></div>
					<div class="content-text-left"><p>今から約400年前、時の将軍・徳川家康によって江戸を中心とした幹線道路「五街道」が整備されました。その五街道の一つ、木曽を貫く「中山道」は江戸と京都を結ぶ重要な街道として独自の文化が育まれ、道中の69を数える宿場の総称を「中山道六十九次」と呼ばれています。中山道55番目の宿場「美江寺宿」(岐阜県瑞穂市美江寺)があります。当時から柿栽培が盛んだったことを示す貴重な資料が残されています</p></div>
				</div>
			</div>
		</transition>
		<transition name="fade">
		<div class="a"> 
				<h3>3.地域と富有柿</h3>
				<div class="about-bl">
					<div class="content-text"><p>地域にねざされた瑞穂市のマスコットキャラクター「かきりん」が、富有柿をPRするために、色々な場所に出現しています。</p></div>
					<div class="img"><img src="@/assets/kakiarea.png" alt="クリスは立って彼の娘エルバを保持します" id="kaki"></div>
				</div>
			</div>
		</transition>

			
		</div>
	</div>
</template>

<script>
export default {
	data() {
    return {
			scrollY: 0,
			up:'a'
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
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+S	ans+JP:wght@300;400&family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese');
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
.about-body{
}
.fade-enter-active {
  transition: all 2s ease;
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
	font-family: 'Noto Serif JP', serif;
	@include media(m){
		font-size:1rem;
	}
}
h3 {
	text-align: left;
	font-size: 1.5rem;
	color: $main-color;
	@include media(m){
		font-size: 1rem;
		padding: unset;
	}
}
p {
	font-size: 16px;
	@include media(m){
		font-size:0.75rem;
	}
}
.img{
	height: 30vh;
}
img {
	height: 100%;
}
button {
	margin: 1%;
	border-radius: 10px;
	outline: none;
	color: $main-color;
}
.f {
	@include media(m){
		display: flex;
		flex-direction: column;
	}
}
.a {
	margin: 5% 15%;
	text-align: start;
	border-radius: 270px;
	@include media(m){
		top: 5%;
		margin: 1%;
		width: 98%;
		border-radius: 50px;
		z-index: 5;
	}
}
.a-change {
	background: green;
}
.b {
		background: $main-color;
	width: 50%;
	margin: 5px 25%;
	text-align: start;
	border-radius: 270px;
	@include media(m){
		top: 5%;
		margin: 1%;
		width: 98%;
		border-radius: 50px;
		z-index: 5;
	}
}
.about-bl{
	display: flex;
}

.about-bl-left{
	display: flex;
	margin: 30px 0;
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
	margin: 1% auto 5%;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 3px solid #ffdea8;
	border-bottom: 3px solid #ffdea8;
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
	padding-right: 5%;
	margin: 2.5% 0;
	color: $main-color;
	letter-spacing: １px;
	line-height: 2;
	font-family: 'Noto Sans JP', sans-serif;
}

.content-text-left {
	padding-left: 5%;
	margin: 2.5% 0;
	color: $main-color;
	letter-spacing: １px;
	line-height: 2;
	font-family: 'Noto Sans JP', sans-serif;
}

.content-image-b {
	display: inline-block;
}
.content-text-b {
	display: inline-block;
	width: 80%;
	padding-left: 1%;
}
</style>