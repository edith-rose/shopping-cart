<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body  {
    font-size: 12px;
    background: #fff;
    font-family:"微软雅黑";
    text-align: center;
    color: #333;
    background: #fff;
    margin: 0px;
    padding: 0px;
  }
  div {
    margin: 0 auto;
    padding: 0;
  }
  th {
    text-align: left;
  }
  h1, h2, h3, h4, h5, h6, ul, li, dl, dt, dd, form, img, p {
    margin: 0;
    padding: 0;
    border: none;
    list-style-type: none;
  }

  a, a:hover {
    text-decoration: none;
    color: #333;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
