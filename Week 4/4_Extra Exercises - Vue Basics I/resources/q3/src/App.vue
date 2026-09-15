<!-- Vue Composition API -->
<script setup>
import { ref } from 'vue';

// Predefined list of users with their usernames and passwords
const users = ref([
  { user: "Jack", pwd: "abc" },
  { user: "Mary", pwd: "def" },
  { user: "John", pwd: "123" },
  { user: "Cherry", pwd: "456" }
]);

// Reactive input values
const username = ref(""); // Username entered by user
const cur_pwd = ref(""); // Current password entered by user
const pwd1 = ref(""); // New password
const pwd2 = ref(""); // Confirm new password

// Controls the display of the error message
const show = ref(false);

// Holds the error message text
const error = ref("");

// Method to validate form input
function validate() {
  show.value = false;

  // Check if any input field is empty
  if (!username.value || !cur_pwd.value || !pwd1.value || !pwd2.value) {
    error.value = "All inputs must be filled!";
    show.value = true;
    return;
  }

  // Check if new passwords match
  if (pwd1.value !== pwd2.value) {
    error.value = "New passwords do not match!";
    show.value = true;
    return;
  }

  // Look for the user in the predefined list
  const user = users.value.find(u => u.user === username.value);

  // If user is not found, show error
  if (!user) {
    error.value = "Username does not exist!";
    show.value = true;
    return;
  }

  // If current password is incorrect, show error
  if (user.pwd !== cur_pwd.value) {
    error.value = "Current Password incorrect!";
    show.value = true;
    return;
  }
}
</script>

<template>
  <!-- Username input field -->
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="user" v-model="username" placeholder="Enter Name">
  </div>

  <!-- Current password input -->
  <div class="mb-3">
    <label for="cur_pwd" class="form-label">Current Password</label>
    <input type="password" class="form-control" id="cur_pwd" v-model="cur_pwd" placeholder="Password">
  </div>

  <!-- New password input -->
  <div class="mb-3">
    <label for="pwd1" class="form-label">New Password</label>
    <input type="password" class="form-control" id="pwd1" v-model="pwd1" placeholder="Password">
  </div>

  <!-- Confirm new password input -->
  <div class="mb-3">
    <label for="pwd2" class="form-label">Confirm New Password</label>
    <input type="password" class="form-control" id="pwd2" v-model="pwd2" placeholder="Confirm Password">
  </div>

  <!-- Submit button to trigger validation -->
  <button @click="validate" class="btn btn-primary">Submit</button>
  <br><br>

  <!-- Error message alert -->
  <div class="alert alert-warning" role="alert" v-if="show">{{ error }}</div>
</template>

<style scoped>
/* Scoped styling can be added here */
</style>
