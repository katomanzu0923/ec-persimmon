<template>
	<div class="about-body">
		<div class="about-title">
			<h1>富有柿について</h1>
		</div>
		<div class="a"> 
			<h3>富有柿とは</h3>
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kaki.png" alt="">
				</div>
				<div class="content-text"><p>富有柿(ふゆうがき)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
			</div>
		</div>
		<div class="b"> 
			<h1>歴史と富有柿</h1>
			<div class="about-content">
				<div class="content-image-b">
					<img src="@/assets/kakihistory.png" alt="">
				</div>
			<transition class="t" name="fade">
				<div v-show="scrollY > 150 ">
					<div class="content-text-b"><p>今から約400年前、時の将軍・徳川家康によって江戸を中心とした幹線道路「五街道」が整備されました。
その五街道の一つ、木曽を貫く「中山道」は江戸と京都を結ぶ重要な街道として独自の文化が育まれ、道中の69を数える宿場の総称を「中山道六十九次」と呼ばれています。
中山道55番目の宿場「美江寺宿」(岐阜県瑞穂市美江寺)があります。当時から柿栽培が盛んだったことを示す貴重な資料が残されています
</p></div>
				</div>
			</transition>
			</div>
		</div>
		<div class="c"> 
			<h3>地域と富有柿</h3>
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kakiarea.png" alt="">
				</div>
			<transition name="fade">
				<div v-show="scrollY > 650 ">
					<div class="content-text"><p>地域にねざされた瑞穂市のマスコットキャラクター「かきりん」が、富有柿をPRするために、色々な場所に出現しています。</p></div>
				</div>
			</transition>
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
}
h3 {
	text-align: center;
	margin: 10px;
	font-size: 1.5rem;
	padding-top: 5px;
	color: rgba(0, 128, 0, 0.747);
}
img {
	width: 450px;
	height: 300px;
}
.about-body {
	margin-bottom: 5%;
}
.a {
	background: $main-color;
	position: relative;
	width: 70%;
	text-align: start;
}
.b {
	background: rgba(134, 233, 67, 0.527);
	position: relative;
	width: 70%;
	margin-left: 30%;
}
.c {
	background: $main-color;
	position: relative;
	width: 70%;

}
.about-title {
	margin: 1% auto;
	width: 25%;
	text-align: center;
	font-size: 2rem;
	border-top: 1px solid $main-color;
	border-bottom: 1px solid $main-color;
	border-radius: 20px;
}
.about-content {
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 5%;
}
.content {
	display: inline-block;
}
.content-image {
	display: inline-block;
}
.content-text {
	display: inline-block;
	width: 70%;
	top: 30%;
	font-size: 1rem;
	padding-left: 5%;
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