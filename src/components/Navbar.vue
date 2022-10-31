<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand fs-1 fw-bold color-primary" href="#">putra</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0 ml-0 mt-0">
            <a class="nav-link active" href="#">HOME</a>
          </li>
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0">
            <a class="nav-link" href="#">SKILL</a>
          </li>
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0">
            <a class="nav-link" href="#">PROJECTS</a>
          </li>
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0">
            <a class="nav-link" href="#">BLOGS</a>
          </li>
          <li class="nav-item mx-md-3 mx-0 mt-3 mt-md-0 me-0 mb-0">
            <a class="nav-link" href="#">CONTACTS</a>
          </li>
        </ul>

        <div class="theme shadow">
          <i class="fas fa-sun text-warning"></i>
        </div>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar .nav-link {
  font-family: var(--fontLogo);
  font-size: 20px;
}

.theme {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 25px;
  margin-left: 10rem;
}
</style>
