<template>
  <section>
    <div class="mt-5">
      <div class="mb-2">
        <h1 class="center">My Profile</h1>
      </div>
      <div class="center">
        <p class="mb-2">This is the user Profile</p>
      </div>
      <div class="center">
        <a class="mb-2" target="_blank" href="https://solomonmarvel.com"
          >Visit my Website</a
        >
      </div>
      <div class="center">
        <button class="button-primary" @click="fetchProfiles()">
          Fetch Profiles
        </button>
      </div>
    </div>

    <div v-for="(i, index) in profiles" :key="index">
      <profile_component :profile="i" />
    </div>
    
  </section>
</template>

<script>
import profile_component from "@/components/profile_component.vue";
import Axios from "../api/index";
export default {
  name: "Profile",
  components: {
    profile_component,
  },
  data() {
    return {
      profiles: null,
    };
  },
  methods: {
    async fetchProfiles() {
      let result = await Axios.call("get", "profiles");
      this.profiles = result.data;
    },
  },
};
</script>

<style scoped>
.profile {
  border-radius: var(--border-radius);
  padding: 2em;
  border: 1px solid black;
  margin: 1em;
}

.contact {
  background-color: rgb(255, 255, 218);
}
</style>
