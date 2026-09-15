<script setup>
import { ref, computed } from 'vue';

const gameStarted = ref(false);
const buttonSpecialAttack = ref(null);

const prince = ref("img/prince.png");
const monster = ref("img/monster.png");

const buttonDetails = ref([
  { action: "attack", btnType: "btn-danger", value: "ATTACK", show: true },
  { action: "specialAttack", btnType: "btn-warning", value: "SPECIAL ATTACK", show: true },
  { action: "heal", btnType: "btn-success", value: "HEAL", show: true },
  { action: "giveUp", btnType: "btn-link", value: "GIVE UP", show: true },
]);

const myHealth = ref(100);
const monsterHealth = ref(100);

const statusList = ref([
  {
    class: "text-dark",
    text: "Game hasn't started."
  }
]);

const MAX_ATTACK = 30;
const MAX_HEAL = 30;
const specialAttackCoolDown = ref(0);

// ADD YOUR CODE HERE







// END OF ADDING YOUR CODE HERE
</script>

<template>
  <div class="row pb-3 text-center">
    <div class="col-sm-1">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>YOU</h2>
      <img :src="prince" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': myHealth + '%' }">
          {{ myHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>MONSTER</h2>
      <img :src="monster" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': monsterHealth + '%' }">
          {{ monsterHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-1">
      <!-- blank -->
    </div>
  </div>

  <!-- ADD YOUR CODE HERE -->










  <!-- END OF ADDING YOUR CODE HERE -->

</template>

<style scoped>
/* Optional styling can go here */
</style>
