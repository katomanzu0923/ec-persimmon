<template>
	<div class="about-body">
		<div class="about-title">
			<h1>富有柿について</h1>
		</div>
		<h3>富有柿とは</h3>
		<div class="a"> 
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kaki.png" alt="">
				</div>
					<div class="content-text"><p>富有柿(ふゆうがき)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が、せっきーファームの農場がある「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
			</div>
		</div>
		<h3>健康と富有柿</h3>
		<div class="b"> 
				<div class="content-image-b">
					<img src="@/assets/kaki.png" alt="">
				</div>
			<transition class="t" name="fade">
				<div v-show="scrollY > 150 ">
					<div class="content-text-b"><p>富有柿(ふゆうがき)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が、せっきーファームの農場がある「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
				</div>
			</transition>

		</div>
		<h3>地域と富有柿</h3>
		<div class="c"> 
			<div class="about-content">
				<div class="content-image">
					<img src="@/assets/kaki.png" alt="">
				</div>
			<transition name="fade">
				<div v-show="scrollY > 650 ">
					<div class="content-text"><p>富有柿(ふゆうがき)は、国内で一番生産量が多い柿の品種で、他の品種と比べて果肉の食感が良く糖度が高いことから「甘柿の王様」と呼ばれています。富有柿が生まれた発祥の地が、せっきーファームの農場がある「岐阜県瑞穂市」。瑞穂市居倉(旧巣南町)には、富有柿が誕生した「原木」があり、指定天然記念物として石碑が建立されました。瑞穂市から全国に富有柿の栽培が広がり、今では世界各国で生産され食べられています。</p></div>
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
.fade-enter-active {
  transition: all 3s ease;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to {
	opacity: 1;
}

h3 {
	text-align: center;
	margin: 10px;
	padding: 50px;
}
img {
	width: 450px;
	height: 300px;
	margin: 10%;
}
.about-body {
	margin-bottom: 5%;
}
.a {
	background: rgba(230, 132, 21, 0.562);
	position: relative;
	width: 60%;
	margin: 0 20%;
	border: 1px solid cornsilk;	
	border-radius: 500px;
}
.b {
	background: rgba(233, 156, 67, 0.527);
	position: relative;
	width: 60%;
	margin: 0 20%;
	text-align: end;
	border: 1px solid cornsilk;	
	border-radius: 500px;
}
.c {
	background: rgba(233, 156, 67, 0.562);
	position: relative;
	width: 60%;
	margin: 0 20%;
	border: 1px solid cornsilk;	
	border-radius: 500px;
}
.about-title {
	text-align: center;
	margin: 50px;
	font-size: 24px;
}
.about-content {
	display: flex;
}
.content {
	display: inline-block;
}
.content-image {
	display: inline-block;
	margin: 5%;
}
.content-text {
	display: inline-block;
	width: 30%;
	position: absolute;
	right: 0;
	bottom: 15%;
	margin: 5%;
	vertical-align: top;
	padding: 5px;
	font-size: 1rem;
}
.content-image-b {
	display: inline-block;
	margin: 5%;
}
.content-text-b {
	display: inline-block;
	width: 30%;
	position: absolute;
	left: 0;
	bottom: 15%;
	margin: 5%;
	vertical-align: top;
	padding: 5px;
	font-size: 1rem;
}
</style>