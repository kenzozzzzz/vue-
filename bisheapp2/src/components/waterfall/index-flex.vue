<template>
  <div class="waterfall">
      <div class="masonry">
          <div class="item">
              <img src="https://picsum.photos/360/460?random=1">
              <img src="https://picsum.photos/320/420?random=1">
              <img src="https://picsum.photos/330/470?random=1">
              <img src="https://picsum.photos/340/430?random=1">
              <img src="https://picsum.photos/370/480?random=1">
              <img src="https://picsum.photos/360/490?random=1">
              <img src="https://picsum.photos/350/460?random=1">
              <img src="https://picsum.photos/320/450?random=1">
              <img src="https://picsum.photos/310/430?random=1">
              <img src="https://picsum.photos/300/420?random=1">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    margin: 4px;
    font-family: Arial, Helvetica, sans-serif;
}

.masonry {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 500px;
}
.item{
    position: relative;
    width: 25%;
    padding: 2px;
    box-sizing: border-box;
    counter-increment: item-counter;
}
.item img{
    display: block;
    width: 100%;
    height: auto;
}
.item::after{
    position: absolute;
    display: block;
    top:2px;
    left: 2px;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background-color: #000;
    color: #fff;
    break-inside: avoid;
    content: counter(item-counter);
}
.item:nth-child(4n+1){
    order: 1;
}
.item:nth-child(4n+2){
    order: 2;
}
.item:nth-child(4n+3){
    order: 3;
}
.item:nth-child(4n){
    order: 4;
}
</style>