<template>
  <div id="app">
    <h2><%= data %></h2>
    <ul>
        <% if (list) { %>
            <% for(var i=0;i<list.length;i++){ %>
                <li><%=list[i]%></li>
            <% } %>
        <% } %>
    <ul>
  </div>
</template>

<script>
import './css/base.scss';
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>