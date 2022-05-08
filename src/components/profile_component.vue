<template>
  <div class="profile">
    <p>id: {{ profile.id }}</p>
    <p>username: {{ profile.userName }}</p>
    <p>fullname: {{ profile.fullName }}</p>
    <p>email: {{ profile.emailAddress }}</p>
    <div class="contact">
      <p>Home Address: {{ profile.contact.homeAddress }}</p>
      <p>phone Number: {{ profile.contact.phoneNumber }}</p>
      <p>twitter: {{ profile.contact.socialMedia.twitter }}</p>
      <p>facebook: {{ profile.contact.socialMedia.facebook }}</p>
      <p>instagram: {{ profile.contact.socialMedia.instagram }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object
  }
};
</script>
