<!--
TRIAL LAB TEST SET C - Q1
-->

<script setup>
    import './q1.css'
</script>

<template>

    <div class="calendar-container">
        <h2 class="calendar-title">October 2026</h2>

        <div class="calendar-grid">
            <!-- Row 1: Day Headers -->
            <day class="header">SUN</day>
            <day class="header">MON</day>
            <day class="header">TUE</day>
            <day class="header">WED</day>
            <day class="header">THU</day>
            <day class="header">FRI</day>
            <day class="header">SAT</day>

            <!-- Row 2: Week 1 -->
            <day class="inactive"></day>
            <day class="inactive"></day>
            <day class="inactive"></day>
            <day class="inactive"></day>
            <day>1</day>
            <day class="today">2</day>
            <day>3</day>

            <!-- Row 3: Week 2 -->
            <day>4</day>
            <day>5</day>
            <day>6</day>
            <day>7</day>
            <day>8</day>
            <day>9</day>
            <day>10</day>

            <!-- Row 4: Week 3 -->
            <day>11</day>
            <day>12</day>
            <day>13</day>
            <day>14</day>
            <day>15</day>
            <day>16</day>
            <day>17</day>

            <!-- Row 5: Week 4 -->
            <day>18</day>
            <day>19</day>
            <day>20</day>
            <day>21</day>
            <day>22</day>
            <day>23</day>
            <day>24</day>

            <!-- Row 6: Week 5 -->
            <day>25</day>
            <day>26</day>
            <day>27</day>
            <day>28</day>
            <day>29</day>
            <day>30</day>
            <day>31</day>
        </div>
    </div>

</template>