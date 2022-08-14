<template>
  <div class="some-web-app">
    <LoginButton></LoginButton>
    <LogoutButton></LogoutButton>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import LoginButton from './LoginButton.vue'
import LogoutButton from './LogoutButton.vue'
import UserInfo from './UserInfo.vue'

export default {
  name: 'SomeWebApp',
  components: {
    LoginButton,
    LogoutButton,
    UserInfo
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
