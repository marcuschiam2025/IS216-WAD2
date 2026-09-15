<!-- Vue Composition API -->
<script setup>
import { ref } from 'vue';

// Import Vue's computed() function to create reactive computed values
import { computed } from 'vue';

const is_curriculum = ref({
  "University Core": ["Statistics", "Computational Thinking", "Managing",
    "Writing & Reasoning", "Internship",
    "Economics & Society", "Technology & Society",
    "Cultures of the Modern World", "Community Service",
    "Ethics & Social / Corporate Responsibility",
    "Big Questions", "Global Exposure"],
  "IS Major Core": ["Information Systems & Innovation",
    "Business Process Analysis and Solutioning",
    "Enterprise Solution Development",
    "Enterprise Solution Management", "Digital Business Technology and Transformation",
    "Introduction to Programming", "Software Project Management",
    "Web Application Development I", "Web Application Development II",
    "Data Management", "Interaction Design and Prototyping",
    "Information Systems Project Experience"],
  "Electives - Business Analytics": ["Analytics Foundation", "Data Mining & Business Analytics",
    "Geospatial Analytics & Applications",
    "Managing Customer Relations with Analytics : Asian Insights",
    "Social Analytics and Applications", "Text Mining and Language Processing",
    "Visual Analytics for Business Intelligence"],
  "Electives - Digital Business Solutioning": ["Digital Transformation Strategy",
    "Enterprise Analytics for Decision Support", "Enterprise Business Solutions",
    "Internet of Things: Technology and Applications",
    "Managing Customer Relations with Analytics : Asian Insights",
    "Systems for Intelligent Cities"],
  "Electives - Financial Technology": ["Digital Banking Enterprise Architecture",
    "Corporate Banking Technology & Smart Contracts",
    "Digital Payments & Innovation",
    "Financial Markets Processes & Technology",
    "Retail Banking & Mobile Technology"]
});

// Initial selected category
const selected_cat = ref("University Core");

// Returns an array of all course category names
const categories = computed(() => Object.keys(is_curriculum.value));

// Returns an array of courses based on the selected category
const courses = computed(() => is_curriculum.value[selected_cat.value]);

</script>

<template>
  <h3 class="mb-4">BSC (IS) Curriculum</h3>

  <!-- Dropdown list to select course category -->
  Select Category
  <select v-model="selected_cat">
    <!-- Render each category as an option -->
    <option v-for="cat in categories" :key="cat">{{ cat }}</option>
  </select>

  <!-- Display the list of courses for the selected category -->
  <ul class="mt-2">
    <li v-for="course in courses" :key="course">{{ course }}</li>
  </ul>
</template>

<style scoped>
/* Scoped styling can be added here */
</style>
