<template>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media screen and (max-height: 500px) {
    font-size: 0.8rem;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00080e;
}

* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  width: 100%;
  max-width: 800px;
  height: 75%;
  max-height: 600px;
  perspective: 500px;
  transform-style: preserve-3d;
  transition: opacity 150ms ease-in-out;

  &.loading {
    opacity: 0;
  }
}

.destination {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-shadow: 0 0 6px #00080e;
  transition: all 150ms ease-out;

  & h1 {
    font-size: 2.5em;
    text-align: center;
  }

  & hr {
    height: 1px;
    background-color: white;
    border: none;
    width: 50px;
  }

  & p {
    font-size: 1.2em;
  }

  & button {
    border: none;
    background-color: #b71c1c;
    font-family: inherit;
    color: white;
    font-size: 1em;
    padding: 0.5em 1em;
    margin-top: 1em;
    border-radius: 2em;
    cursor: pointer;

    &:hover {
      background-color: #d32f2f;
    }
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 100ms ease-in;
    mix-blend-mode: multiply;
    opacity: 0;
    pointer-events: none;
  }

  &.unfolded {
    flex: 8 1;

    &.front {
      transform: translateZ(20px);
    }
    &.back {
      transform: translateZ(-20px);

      &::after {
        background: linear-gradient(
          to right,
          black 0%,
          white 25%,
          white 75%,
          black 100%
        );
        opacity: 0.5;
      }
    }
  }

  &.folded {
    flex: 1 8;

    & h1,
    & hr,
    & p,
    & button {
      display: none;
    }

    &::after {
      opacity: 0.6;
    }

    &.right {
      transform: rotateY(-30deg) scaleX(1.16);

      &::after {
        background: linear-gradient(to left, white, black);
      }
    }
    &.left {
      transform: rotateY(30deg) scaleX(1.16);

      &::after {
        background: linear-gradient(to right, white, black);
      }
    }
  }
}

</style>
