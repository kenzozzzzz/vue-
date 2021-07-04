<template>
  <div>
    <input type="checkbox" id="check" />
    <label for="check"> Activate </label>
    <div class="app1">
      <h1 class="main-text" data-splitting>Main Text</h1>
      <div class="cover-image">
        <span class="main-text-echo" data-splitting>Main Text</span>
        <p class="blurred-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
body {
	height: 100vh;
	display: grid;
	place-items: center;
	place-content: center;
	font-family: sans-serif;
	text-transform: uppercase;
	text-align: center;
}
label,
input {
	cursor: pointer;
}

.main-text,
.main-text-echo {
	font-size: 5rem;
}
.char {
	display: inline-block;
	transition: transform 0.4s ease;
	transition-delay: calc(var(--char-index) * 0.05s);
}
.main-text {
	:checked ~ .app & {
		.char {
			transform: translateY(50%);
		}
	}
}
.main-text-echo {
	transform: translateY(-4.5rem);
	display: inline-block;
	margin-bottom: 0;
	:checked ~ .app & {
		.char {
			transform: translateY(-50%);
		}
	}
}
.cover-image {
	background-color: whitesmoke;
	padding: 2rem;
	margin-top: -2.5rem;
	z-index: 1;
	position: relative;
	overflow: hidden;
}
.blurred-text {
	filter: blur(2px);
	font-size: 2rem;
	max-width: 30ch;
	line-height: 1.3;
	transition: filter 0.4s;
	transition-delay: 0.4s;
	:checked ~ .app & {
		filter: blur(10px);
	}
}

</style>