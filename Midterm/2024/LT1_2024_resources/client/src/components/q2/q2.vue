<!--
Name:
Email:
-->

<script setup>
import './q2_readonly.css'
</script>

<template>
    <div class="container">
        <div class="row" id="title">
            <div class="col-lg-3 col-md-2 col-1"></div>
            <div class="col-lg-6 col-md-8 col-10 site-name">One Piece Interest Group</div>
            <div class="col-lg-3 col-md-2 col-1"></div>
        </div>

        <div class="row">
            <div class="col-lg-2 col-md-2 col-1"></div>
            <div class="col-lg-2 col-md-2 menu-item col-sm-5">Home</div>
            <div class="col-lg-2 col-md-2 menu-item col-sm-5">About Us</div>
            <div class="d-md-none col-1"></div>
            <div class="d-md-none col-1"></div>
            <div class="col-lg-2 col-md-2 menu-item col-sm-5">Schedule</div>
            <div class="col-lg-2 col-md-2 menu-item col-sm-5">Contact Us</div>
            <div class="col-lg-2 col-md-2 col-1"></div>
        </div>

        <div class="row content-paragraph">
            <div class="col-lg-2 col-md-1 col-1"></div>

            <div id="desc" class="col-md-10 col-10 col-lg-4 text-sm-end">
                <p>"One Piece," the globally renowned manga by Eiichiro Oda, follows the thrilling adventures of Monkey D. Luffy and his diverse crew, the Straw Hat Pirates. Setting sail in search of the ultimate treasure, the One Piece, they face formidable foes and navigate perilous seas. Each member, from swordsman Zoro to navigator Nami and sharpshooter Usopp, brings unique skills and dreams to the crew. Their unbreakable bond and relentless pursuit of freedom captivate readers, making "One Piece" a masterpiece of camaraderie and high-seas adventure. The Straw Hats' journey is a testament to friendship, courage, and the endless quest for dreams. Contact us to join our interest group!</p>
            </div>

            <div class="col-lg-1 col-md-3 col-1"></div>
            <div class="d-md-none col-1"></div>

            <div id="image" class="col-md-6 col-10 d-flex justify-content-center col-lg-4 ">
                <img src="./joyboy.jpg" class="img-fluid" alt="Sample Image">
            </div>

            <div class="col-lg-1 col-md-3 col-1"></div>
        </div>

        <div class="row contact-form">
            <div class="col-lg-2 col-md-2 col-2"></div>

            <div class="col-10">
                <h3>Contact Us</h3>
            </div>

            <div class="col-lg-2 col-md-1 col-1"></div>

            <div class="col-lg-3 col-md-3 col-sm-10">
                <input type="text" class="form-control" placeholder="Name">
            </div>

            <div class="d-md-none col-1"></div>
            <div class="d-md-none col-1"></div>

            <div class="col-lg-3 col-md-3 col-sm-10">
                <input type="email" class="form-control" placeholder="Email">
            </div>

            <div class="col-lg-2 col-md-1 col-1"></div>
        </div>

        <div class="row contact-form">
            <div class="col-lg-2 col-md-1 col-1"></div>

            <div class="col-lg-8 col-md-10 col-10 col-sm-10">
                <textarea class="form-control" rows="5" placeholder="Comment"></textarea>
            </div>

            <div class="col-lg-2 col-md-1 col-1"></div>
        </div>

        <div class="row contact-form">
            <div class="col-lg-2 col-md-4 col-4"></div>

            <div class="col-lg-2 col-md-12 col-12 text-center order-lg-0 order-1">
                <button class="btn btn-primary">Submit</button>
            </div>

            <div class="col-lg-8 col-md-12 col-12 text-center order-lg-1 order-0">
                <i>Thank you for contacting us!</i>
            </div>
        </div>
    </div>

    <br><br>
</template>
