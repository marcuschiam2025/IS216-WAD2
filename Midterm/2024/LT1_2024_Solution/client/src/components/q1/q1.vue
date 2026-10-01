<!--
Name:
Email:
-->

<script setup>
import './q1.css'
</script>

<template>
    <header>
        <h1>Literary Corner</h1>
    </header>

    <main>
        <section id="featured-review">
            <h2>Featured Review</h2>

            <article class="book-review">
                <img src="./images/book_cover_image.png" alt="Book Cover">

                <span id="book-author">by M. Clifford</span>

                <p>The book that does not deserved to be read ....</p>

                <div class="rating">
                    <ul>
                        <li>★</li>
                        <li>★</li>
                        <li>☆</li>
                        <li>☆</li>
                        <li>☆</li>
                    </ul>

                    <span>| 20 ratings</span>
                </div>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Literary Corner. All rights reserved.</p>
    </footer>
</template>
