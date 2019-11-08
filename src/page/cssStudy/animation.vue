<template>
  <div class="bc">
    <div class="moon"></div>
  </div>

</template>

<script>
export default {
  name: 'animation'
}
</script>

<style scoped>
  .bc{
    background: aqua;
    height: 16rem;
    padding: 1rem;
  }
  .moon{
    margin: 50px;
    font-size: 20px;
    width: 5em;
    height: 5em;
    color: lightyellow;
    border-radius: 50%;
    /* background: red; */
    box-shadow: inset 5em 0 0 ;
    /**/
    animation: move1 10s linear  infinite alternate;
  }
  @keyframes move1{
    to{
      box-shadow: inset 0 0 0;
    }
  }
</style>
