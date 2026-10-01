/* 
TRIAL LAB TEST C 
Name: 
Email: 
*/

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import './q4_readonly.css';

/*
 * Q4: Vue - AXIOS & JSON
 *
 * Edit only this file.
 *
 * Use Axios for all HTTP calls.
 * The backend server is available at:
 *     API_URL = 'http://127.0.0.1:8000/api'
 *
 */

const API_URL = 'http://127.0.0.1:8000/api';
const courses = ref([]);
const errorMessage = ref('');
const newCode = ref();
const newName = ref();
const newDescription = ref();
const newCoreIS = ref();
const newCoreSE = ref();
const newCoreCS = ref();
const newCoreCL = ref();


// Part (a) Load data function
async function loadData() {
    errorMessage.value = '';

    // add code here
    try {
        const response = await axios.get(API_URL,{});
        courses.value = response.data.courseInfo;
    } catch (error) {
        errorMessage.value = "Failed to load course data";
    } finally {
        console.log("Request completed");
    }


}

// Part (b) Add course 
async function addCourse() {
    errorMessage.value = '';

    // Validate that all 3 text fields are filled
    if (!newCode.value.trim() || !newName.value.trim() || !newDescription.value.trim()) {
        errorMessage.value = 'Please fill in all 3 text fields (Code, Name, and Description).';
        return;
    }

    // add code here
    try {
        const response = await axios.post(API_URL, {
            code: newCode.value,
            name: newName.value,
            description: newDescription.value,
            coreForIS: newCoreIS.value,
            coreForSE: newCoreSE.value,
            coreForCS: newCoreCS.value,
            coreForCL: newCoreCL.value,
        }
        );
        loadData();
    } catch (error) {
        errorMessage.value = "Failed to add course";
    } finally {
        newCode.value = "";
        newName.value = "";
        newDescription.value = "";
        newCoreIS.value = "";
        newCoreSE.value = "";
        newCoreCS.value = "";
        newCoreCL.value = "";
    }

}

// Part (c) Delete course
async function deleteCourse(code) {
    errorMessage.value = '';

    // add code here
    try {
        const response = await axios.delete(`${API_URL}/${code}`, {});
        loadData();
    } catch (error) {
        errorMessage.value = "Failed to delete course";
    } 
}

// Fetch data automatically when component mounts
onMounted(loadData);
</script>

<template>
    <div class="q4-container">
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>

        <!-- Add New Course Section ------------------->
        <section class="add-course-card">
            <h2>Add New Course</h2>

            <div class="form-grid">
                <div class="form-group">
                    <label for="code">Course Code:</label>
                    <input id="code" type="text" placeholder="e.g. is113" v-model="newCode"/>
                </div>

                <div class="form-group">
                    <label for="name">Course Name:</label>
                    <input id="name" type="text" placeholder="e.g. Web App Dev" v-model="newName"/>
                </div>

                <div class="form-group full-width">
                    <label for="description">Description:</label>
                    <input id="description" type="text" placeholder="Course details..." v-model="newDescription"/>
                </div>

                <div class="checkbox-group full-width">
                    <label><input type="checkbox" v-model="newCoreIS" /> IS Core</label>
                    <label><input type="checkbox" v-model="newCoreSE" /> SE Core</label>
                    <label><input type="checkbox" v-model="newCoreCS" /> CS Core</label>
                    <label><input type="checkbox" v-model="newCoreCL" /> CL Core</label>
                </div>

                <div class="full-width">
                    <button class="add-btn" type="button" @click="addCourse">Add Course</button>
                </div>
            </div>
        </section>

        <!-- Courses Table ------------------->
        <table class="bordered-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>IS Core</th>
                    <th>SE Core</th>
                    <th>CS Core</th>
                    <th>CL Core</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.code">
                    <td>{{ course.code }}</td>
                    <td>{{ course.name }}</td>
                    <td>{{ course.description }}</td>
                    
                    <!-- Part (d) Yes/No -->
                    <td :class="course.coreForIS ? 'text-yes' : 'text-no'">{{ course.coreForIS ? "Yes" : "No" }}</td>
                    <td :class="course.coreForSE ? 'text-yes' : 'text-no'">{{ course.coreForSE ? "Yes" : "No" }}</td>
                    <td :class="course.coreForCS ? 'text-yes' : 'text-no'">{{ course.coreForCS ? "Yes" : "No" }}</td>
                    <td :class="course.coreForCL ? 'text-yes' : 'text-no'">{{ course.coreForCL ? "Yes" : "No" }}</td>
                    <td>
                        <button class="delete-btn" type="button" @click="deleteCourse(course.code)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

