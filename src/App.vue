<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/d1">MyDateRangePicker</router-link> |
      <router-link to="/d2">DateRangePickerDemo1</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
