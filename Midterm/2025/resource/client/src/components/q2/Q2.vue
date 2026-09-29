<script setup>
</script>

<template>
    <header class="py-4 text-center bg-light">
        <h1 class="h3 mb-0">Genshin Character Gallery</h1>
        <p class="text-muted mb-0">Choose a character to view art and a short blurb.</p>
    </header>

    <main class="container py-4">

        <div class="row g-4 align-items-start">

            <!-- LEFT: Character Nav -->
            <nav id="navCol" class="col-12 col-lg-3 order-lg-0 order-md-2 col-md-12 order-sm-0" aria-label="Character selector">
                <ul class="nav nav-pills align-items-lg-start flex-lg-column justify-content-center" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="tab-albedo" data-bs-toggle="tab"
                                data-bs-target="#pane-albedo" type="button" role="tab"
                                aria-controls="pane-albedo" aria-selected="true">Albedo</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab-sayu" data-bs-toggle="tab"
                                data-bs-target="#pane-sayu" type="button" role="tab"
                                aria-controls="pane-sayu" aria-selected="false">Sayu</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab-sucrose" data-bs-toggle="tab"
                                data-bs-target="#pane-sucrose" type="button" role="tab"
                                aria-controls="pane-sucrose" aria-selected="false">Sucrose</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tab-thoma" data-bs-toggle="tab"
                                data-bs-target="#pane-thoma" type="button" role="tab"
                                aria-controls="pane-thoma" aria-selected="false">Thoma</button>
                    </li>
                </ul>
            </nav>

            <!-- MIDDLE: Character Text -->
            <section id="contentCol" class="col-12 col-lg-5 order-lg-1 col-md-6 order-md-0 order-sm-2">
                <h2 class="h4">Character Notes</h2>
                <p class="mb-3">
                    Click a name to switch the featured artwork. Use the form to log a quick note about the selected character.
                </p>

                <form aria-label="Quick note form">
                    <div class="row g-3">
                        <div class="col-12 col-sm-6">
                            <label for="nickname" class="form-label">Your nickname</label>
                            <input id="nickname" type="text" class="form-control" placeholder="Traveler" required>
                        </div>
                        <div class="col-12 col-sm-6">
                            <label for="region" class="form-label">Region</label>
                            <select id="region" class="form-select" required>
                                <option value="">Select</option>
                                <option>Mondstadt</option>
                                <option>Liyue</option>
                                <option>Inazuma</option>
                                <option>Sumeru</option>
                                <option>Fontaine</option>
                                <option>Natia</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="note" class="form-label">Why this character</label>
                            <textarea id="note" class="form-control" rows="3" placeholder="Short reason"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Save note</button>
                        </div>
                    </div>
                </form>
            </section>

            <!-- RIGHT: Character Image (Bootstrap Tabs content) -->
            <aside id="imageCol" class="col-12 col-lg-4 order-lg-2 col-md-6 order-md-1 order-sm-1 ">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="pane-albedo" role="tabpanel" aria-labelledby="tab-albedo" tabindex="0">
                        <img src="/images/albedo.png" alt="Albedo character art" class="img-fluid rounded">
                    </div>
                    <div class="tab-pane fade" id="pane-sayu" role="tabpanel" aria-labelledby="tab-sayu" tabindex="0">
                        <img src="/images/sayu.png" alt="Sayu character art" class="img-fluid rounded">
                    </div>
                    <div class="tab-pane fade" id="pane-sucrose" role="tabpanel" aria-labelledby="tab-sucrose" tabindex="0">
                        <img src="/images/sucrose.png" alt="Sucrose character art" class="img-fluid rounded">
                    </div>
                    <div class="tab-pane fade" id="pane-thoma" role="tabpanel" aria-labelledby="tab-thoma" tabindex="0">
                        <img src="/images/thoma.png" alt="Thoma character art" class="img-fluid rounded">
                    </div>
                </div>
            </aside>

        </div>

    </main>

    <footer class="text-center py-4 small text-muted bottom-0">
        © 2025 WAD2 Corporation
    </footer>
</template>