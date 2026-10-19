<!--
Name: Marcus Chiam Hao Yi
Email: marcuschiam.2025@computing.smu.edu.sg
-->
<script setup>
import './q2_readonly.css'
</script>

<template>
  <div class="q2-page">

    <nav class="navbar navbar-expand-md fairhub-navbar">
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="#">FairHub</a>

        <!-- Q2C a) -->
        <span class="navbar-title d-none d-lg-block">
          Registration
        </span>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#q2Navbar"
          aria-controls="q2Navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="hamburger-lines">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Q2A b) -->
        <div id="q2Navbar" class="justify-content-end navbar-collapse">
          <ul class="navbar-nav collapsed">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Workshops</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Schedule</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Q2A a) -->
    <!-- Q2B a) -->
    <h1 class="page-title text-center d-lg-none">
      Registration
    </h1>

    <main class="container-fluid registration-area">
      <form>
        <div class="row g-4">

          <!-- Q2A c) -->
          <!-- Q2B b) -->
          <!-- Q2C b) -->
          <div class="col-sm-12 col-md-12 col-lg-3">
            <label for="workshop" class="form-label col-sm-12 col-md-12">Workshop:</label>
            <select id="workshop" class="form-select col-sm-12 col-md-12">
              <option selected>Figma for Beginners</option>
              <option>Intro to Web Development</option>
              <option>JavaScript Fundamentals</option>
              <option>Python for Data Analysis</option>
              <option>Machine Learning Intro</option>
              <option>Intro to AWS</option>
            </select>
          </div>

          <!-- Q2A d) -->
          <!-- Q2B c) -->
          <!-- Q2C c) -->
          <div class=" col-md-5 col-lg-3">
            <div class="mb-3 col-sm-12 ">
              <label for="name" class="form-label ">Name:</label>
              <input id="name" type="text" class="form-control col-md-12" value="Monkey D. Luffy">
            </div>

            <div class="mb-3 col-sm-12 ">
              <label for="email" class="form-labe">Email:</label>
              <input id="email" type="email" class="form-control col-md-12" value="luffy@strawhat.com">
            </div>

            <div class="col-sm-12 ">
              <label for="institution" class="form-label">Institution:</label>
              <input id="institution" type="text" class="form-control col-md-12" value="Pirates Academy">
            </div>
          </div>

          <!-- Q2A e) -->
          <!-- Q2B d) -->
          <!-- Q2C d) -->
          <div id="personalInfo" class=" col-md-5 col-lg-4">
            <div class="row g-3">

              <!-- Q2A f) and g) -->
              <!-- Q2B e) and f) -->
              <!-- Q2C e) -->
              <div class="order-sm-1 col-sm-5 order-md-0 col-md-5 col-lg-5">
                <label for="title" class="form-label">Title:</label>
                <select id="title" class="form-select">
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                  <option selected>No title</option>
                </select>
              </div>

              <!-- Do NOT remove the offset-1 class -->
              <!-- Q2A f) and g) -->
              <!-- Q2B e) and f) -->
              <!-- Q2C e)-->
              <div class="offset-1 order-sm-2 col-sm-4 order-md-1 col-md-4 col-lg-4" >
                <label for="age" class="form-label">Age:</label>
                <input id="age" type="number" class="form-control" value="21">
              </div>

              <!-- Q2A f) and g) -->
              <!-- Q2B e) and f) -->
              <!-- Q2C e)-->
              <div class="order-sm-0 col-sm-12 order-md-2 col-md-8 col-lg-8">
                <label for="dietary" class="form-label">Dietary Preference:</label>
                <select id="dietary" class="form-select">
                  <option selected>No preference</option>
                  <option>Halal</option>
                  <option>Vegetarian</option>
                </select>
              </div>

            </div>
          </div>

          <!-- Q2A h) -->
          <!-- Q2B g) -->
          <!-- Q2C f) -->
          <div class="d-flex register-column col-md-2 col-lg-2">
            <button type="button" class="btn btn-primary register-btn">
              Register
            </button>
          </div>

        </div>
      </form>
    </main>

  </div>
</template>
