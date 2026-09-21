<script setup>
import { ref } from 'vue'

// TODO: Import the TaskTracker component


const desc = ref('')
const deadline = ref('')
const taskList = ref([])

function add() {
  taskList.value.push({ desc: desc.value, deadline: deadline.value })
  desc.value = ''
  deadline.value = ''
}

// TODO: Add a new method, to delete a task completed


</script>

<template>
  <div class="mb-3">
    <label for="desc" class="form-label">Task</label>
    <input type="text" class="form-control" id="desc" v-model="desc" placeholder="task" />
  </div>
  <div class="mb-3">
    <label for="deadline" class="form-label">Deadline</label>
    <input
      type="date"
      class="form-control"
      id="deadline"
      v-model="deadline"
      placeholder="deadline"
    />
  </div>

  <button type="button" @click="add" class="btn btn-primary">Add New Task</button>
  <hr />

  <TaskTracker
    v-for="(task, idx) in taskList"
    v-bind:key="idx"
    v-bind:task="task"
    v-bind:idx="idx"
    v-on:delete="deleteTask"
  />
</template>
