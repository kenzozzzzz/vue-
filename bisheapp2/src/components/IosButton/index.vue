E<template>
  <div>
      
      <label for="toggle">
          <input type="checkbox" name="" id="toggle"><span :style="spanStyle"></span>
          </label>
  </div>
</template>

<script>
export default {
    data(){
        return{
            spanStyle:{
                '--button-width':'500px',
                '--button-height':'295px',
                '--toggle-diameter':'255px',
                '--button-toggle-offset':'calc((var(--button-height) - var(--toggle-diameter)) / 2)',
                '--toggle-shadow-offset':'10px',
                '--toggle-wider':'333px',
                '--color-grey':'#E9E9E9',
                '--color-dark-grey':'#39393D',
                '--color-green':'#30D158',
            }
        }
    }
}
</script>

<style scoped>
span{
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height)/2);
    transition: .3s all ease-in-out;
}
span::after{
    content: '';
    display: inline-block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: calc(var(--toggle-diameter)/2);
    position: absolute;
    top: var(--button-toggle-offset);
    transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset)*4)
     rgba(0,0,0,.10);
     transition: .3s all ease-in-out;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
input[type="checkbox"]:checked + span{
    background-color: var(--color-green);
}
input[type="checkbox"]:checked + span::after{
    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - 
    var(--button-toggle-offset)));
    box-shadow: calc(var(--toggle-shadow-offset)*-1) 0 calc(var(--toggle-shadow-offset)*4)
     rgba(0,0,0,.10);
}
input[type="checkbox"]{
    display: none;
}
input[type="checkbox"]:active + span::after{
    width: var(--toggle-wider);
}
input[type="checkbox"]:checked:active + span::after{
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - 
    var(--button-toggle-offset)));
}
@media(prefers-color-scheme : dark){
    body {
        background-color: #1C1C1E;
    }
    span {
    background-color: var(--color-dark-grey);
  }
}
</style>