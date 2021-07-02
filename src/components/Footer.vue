<template>
<div class="body">
	<div class="flex">
		<div class="left">
			<img src="@/assets/kakilogo03.png" alt="" class="logo">
		</div>
		<div class="right">
			<div><p>TEL 000-524-0000</p><p>受付時間  午前９時〜午後６時</p></div>
			<div><p>Mail-adress kaki@kaki.com</p></div>
		</div>
	</div>
	<h3>copyright @kato</h3>
</div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&family=Potta+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese');
$main-color: #f8d8a4;
$text-color:#295a31;



h2{
	color: red;
	background: $main-color;
}

img{
	width: 100%;
	background-color: $main-color;
}


P{
	color:$text-color;
	background-color: $main-color;
	font-family: 'Noto Sans JP', sans-serif;
}
h3{
	position: absolute;
	width: 100%;
	bottom: 0;
	text-align: center;
	color: $text-color;
	background-color: $main-color;
	padding: 5px 0;
}

.body{
	background-color: $main-color;
	position: relative;
	width: 100%;
	height: 30vh;
}

.left{
	width: 20vw;
	background-color: $main-color;
}

.right{
	width: 20vw;
	padding: 5% 0;
	text-align: center;
	background-color: $main-color;
}

.flex{
	display: flex;
	justify-content: center;
	background-color: $main-color;
	padding: 2% 0;
}
</style>