<template>
    <!-- DO NOT MODIFY ANY TEMPLATE CODE -->
    <header class="site-header">
        <div class="brand">
            <span class="brand-icon">◆</span>
            <span>Campus Events</span>
        </div>

        <nav class="main-nav">
            <a href="#events">Events</a>
            <a href="#register">Register</a>
            <a id="about" href="#about">About</a>
        </nav>
    </header>

    <div class="page-layout">
        <aside class="sidebar">
            <h2>Filters</h2>
            <label for="category"> </label>
            <select id="category">
                <option>All categories</option>
                <option>Academic</option>
                <option>Sports</option>
                <option>Social</option>
            </select>

            <div class="filter-options">
                <p>Audience</p>
                <label><input type="checkbox"> Student </label>
                <label><input type="checkbox"> Staff </label>
            </div>
            <button class="secondary-button"> Apply Filters</button>
        </aside>

        <main class="main-content">
            <section class="welcome-panel" id="about">
                <div>
                    <p class="eyebrow">DISCOVER • PARTICIPATE • CONNECT</p>
                    <h1>Find something exciting on campus.</h1>
                    <p>
                        Browse upcoming activities, workshops and events organised
                        by the university community.
                    </p>
                </div>
            </section>

            <section id="events">
                <div class="section-heading">
                    <div>
                        <h2>Upcoming events</h2>
                        <p>Choose an event and reserve your place.</p>
                    </div>
                    <a href="#register">View registration form</a>
                </div>

                <div class="event-grid">
                    <article class="event-card featured">
                        <div class="event-content">
                            <h3>Research Sharing Session</h3>
                             <span class="tag academic">ACADEMIC</span>
                              <p class="event-date">18 SEP</p>
                            <p>Learn about current student research projects and ideas.</p>
                            <a href="#register">View details</a>
                        </div>
                    </article>

                    <article class="event-card">
                        <div class="event-content">
                            <h3>Inter-Faculty Badminton</h3>
                             <span class="tag sports">SPORTS</span>
                            <p class="event-date">21 SEP</p>
                            <p>
                                Join a friendly competition with students from different faculties.
                            </p>
                            <a href="#register">View details</a>
                        </div>
                    </article>

                    <article class="event-card">
                        <div class="event-content">
                            <h3>International Food Fair</h3>
                            <span class="tag social">SOCIAL</span>
                            <p class="event-date">25 SEP</p>
                            <p>
                                Enjoy food, music and performances from around the world.
                            </p>
                            <a href="#register">View details</a>
                        </div>
                    </article>
                </div>
            </section>

            <section class="registration-panel" id="register">
                <h2>Register for an event</h2>
                <p>Reserve a place by completing the form below.</p>

                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input id="name" type="text" placeholder="Your name">
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="event">Event</label>
                        <select id="event">
                            <option>Select an event</option>
                            <option>Research Sharing Session</option>
                            <option>Inter-Faculty Badminton</option>
                            <option>International Food Fair</option>
                        </select>
                    </div>

                    <button class="primary-button" type="submit">
                        Submit registration
                    </button>
                </form>
            </section>

        </main>
    </div>

    <footer class="site-footer">
        <p>Campus Events Dashboard</p>
        <a href="#about">Back to top</a>
    </footer>

</template>

<style scoped>
/* Part 1 - btn hover effect globally */


/* Part 2 - style .site-header */
.site-header {
    background-color: rgb(240, 250, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky ;
    top: 0;
}

/* Part 3 - style .page-layout */
.page-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 24px;
}

/* Part 4 - style .registration-panel */
.registration-panel {  
   background-color: #ffffff;
   border: 1px solid #dbe3ef;
   padding: 20px;
   margin: 20px;
   border-radius: 15px; 
}

/* DO NOT EDIT BELOW */
* { box-sizing: border-box; }

.sidebar {
    background-color: lightsteelblue;
}

.main-content {
    background-color: lightcyan;
}

.welcome-panel {
  display: flex;
  /* align-items: center; */
  gap: 24px;
  padding: 28px;
  color: #ffffff;
  background: linear-gradient(135deg, #123b69, #2563eb);
}

.event-card {
  display: flex;
  gap: 14px;

  min-width: 0;
  padding: 16px;

  background-color: #ffffff;
  border: 1px solid #dbe3ef;
  border-radius: 10px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* style .event-grid */
.event-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);
}

button:hover{
    background-color: green;
}
</style>