<template>
  <div>
    <h2>About You</h2>
    <pre v-if="isAuthenticated">
      <p>You are {{ user.name }}!</p>
    </pre>
    <pre v-else>
      <p>I don't know who you are. Please log in.</p>
    </pre>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { user, isAuthenticated } = useAuth0();

      return {
        user,
        isAuthenticated
      };
    }
  };
</script>
