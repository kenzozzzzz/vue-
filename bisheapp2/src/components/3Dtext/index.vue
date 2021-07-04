<template>
    <div class="threeDtext">
        <link rel='preconnect' href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet">
        <h1>30000</h1>
        <h2>thank You</h2>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.threeDtext{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    font-family: 'Concert One', cursive;
    perspective: 2500px;/*透视深度*/
}
h1,h2{
    padding: 0;
    margin: 0;
    position: relative;
    color: rgb(185, 236, 232);
}
h1 {
    font-size: 10rem;
    animation: 5s rotate ease-in-out infinite;
}
@keyframes rotate{
    0% ,100%{
        transform: rotate3d(0,1,0,-20deg);
    }
    50%{
        transform: rotate3d(0,1,0,20deg);
    }
}
h2 {
    font-size: 5rem;
    letter-spacing: -4px;
    animation: 2.5s thank-you ease-in-out infinite;
}
@keyframes thank-you{
    0%,100%{
        transform: rotate3d(1,0,0,-10deg);
    }
    50%{
        transform: rotate3d(1,0,0,10deg);
    }
}
h1::before,
h1::after{
    content: "30000";
}
h2::before,
h2::after{
    content: "thank You";
}
h1::before,
h1::after,
h2::before,
h2::after{
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: -1; */
}
h1::before{
    animation: 5s h1-before ease-in-out infinite;
    color: #009cde;
    z-index: -1;
}
@keyframes h1-before{
    0%,100%{
        transform: translate3d(8px,4px,-7px);
    }
    50% {
        transform: translate3d(-8px,4px,-7px);    
    }
}
h1::after{
    animation: 5s h1-after ease-in-out infinite;
    color: #003c71;
    z-index: -2;
}
@keyframes h1-after{
    0%,100%{
        transform: translate3d(16px,8px,-14px);
    }
    50% {
        transform: translate3d(-16px,8px,-14px);   
    }
}
h2::before{
    animation: 2.5s h2-before ease-in-out infinite;
    color: #009cde;
    z-index: -1;
}
@keyframes h2-before{
    0%,100%{
        transform: translate3d(0px,3px,-10px);
    }
    50% {
        transform: translate3d(0px,-3px,-10px);   
    }
}
h2::after{
    animation: 2.5s h2-after ease-in-out infinite;
    color: #003c71;
    z-index: -2;
}
@keyframes h2-after{
    0%,100%{
        transform: translate3d(0px,6px,-20px);
    }
    50% {
        transform: translate3d(0px,-6px,-20px);   
    }
}
</style>