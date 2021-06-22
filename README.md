<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>José L. Camuñas</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc="
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav class="navbar sticky-top navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand abs" href="#">José L. Camuñas</a>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapseNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/jlcamunas/"
                data-bs-target="#myModal"
                target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/jscmns"
                data-bs-target="#myModal"
                target="_blank"
                ><i class="fab fa-github"></i
              ></a>
            </li>
          </ul>
          <ul id="custom-color" class="navbar-nav my-margin">
            <li class="nav-item active">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- ABOUT -->
    <div class="container-fluid">
      <div class="container my-5 text-center w-md-75" id="about">
        <div class="row my-3 text-center">
          <div class="col-sm-3">
            <img
              src="./imgs/Profile pic.jpg"
              alt=""
              class="img-fluid"
              id="profile-pic"
            />
          </div>
          <div id="heading-p" class="col-sm-9">
            <h2 class="mb-2">Hi, I am José L. Camuñas</h2>
            <h3 class="mb-2 fs-5 text-secondary">
              Web Developer from Tucumán, Argentina
            </h3>
            <h4 class="text-muted">
              <a href="mailto_jose_camunas@hotmail.com">jose_camunas@hotmail.com</a>
            </h4>
          </div>
        </div>

        <p>Welcome to my portfolio page!</p>
        <p>
          In here you'll find some of the projects I have been working on as I
          embark on the journey of web (and software) development, feel free to
          check them out! You can contact me at
          <a href="https://www.linkedin.com/in/jlcamunas/">LinkedIn,</a> view my
          <a href="https://github.com/jscmns">Github</a>, or send me an email
          using the <a href="#contact">form.</a>
        </p>
        <p></p>
        <p>I hope we get in touch! Have a nice day!</p>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="container-fluid pb-1" id="skills-bg">
      <div class="container w-md-50" style id="skills">
        <h2 class="text-center fs-1">Skills</h2>

        <!-- SKILL GROUP -->
        <div class="row mt-3 text-center">
          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">HTML</h3>
            <img
              src="./imgs/HTML5_Logo_550px.png"
              alt="HTML-Logo"
              class="img-fluid"
            />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">CSS</h3>
            <img src="./imgs/logo-css.png" alt="CSS-Logo" class="img-fluid" />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">JavaScript</h3>
            <img src="./imgs/js-logo.png" alt="JS-Logo" class="img-fluid" />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">Git/Github</h3>
            <img
              src="./imgs/github-logo.png"
              alt="Github-Logo"
              class="img-fluid"
            />
          </div>
        </div>

        <!-- SKILL GROUP -->
        <div class="row mt-3 text-center">
          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">Bootstrap</h3>
            <img
              src="./imgs/bootstrap-logo.png"
              alt="Bootstrap-Logo"
              class="img-fluid"
            />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">Node.js</h3>
            <img src="./imgs/nodejs.png" alt="Node-Logo" class="img-fluid" />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">MongoDB</h3>
            <img
              src="./imgs/mongodb.png"
              alt="MongoDB-Logo"
              class="img-fluid"
            />
          </div>

          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">Express.js</h3>
            <img src="./imgs/Express.png" alt="Node-Logo" class="img-fluid" />
          </div>
        </div>

        <!-- SKILL GROUP -->
        <div class="row mt-3 text-center">
          <!-- SKILL -->

          <div class="col-sm-3 offset-sm-3 skill-box">
            <h3 class="d-none">Linux</h3>
            <img src="./imgs/linux.png" alt="Node-Logo" class="img-fluid" />
          </div>
          <!-- SKILL -->
          <div class="col-sm-3 skill-box">
            <h3 class="d-none">Ubuntu</h3>
            <img src="./imgs/ubuntu.png" alt="Node-Logo" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <!-- PROJECTS -->
    <div class="container w-md-75" id="projects">
      <h2 class="py-4 text-center fs1">Projects</h2>

      <!-- PROJECT GROUP -->
      <div class="row text-center">
        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title justify-content-start">YelpCamp</h5>
              <p class="card-text justify-content-center">
                A full-stack app with full CRUD, an authentication and
                authorization system, ownership of campgrounds, image upload and
                more
              </p>
              <a
                href="https://intense-woodland-47369.herokuapp.com/"
                target="_blank"
                class="btn btn-primary justify-content-end"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Real time chatroom</h5>
              <p class="card-text">
                A chatroom with backend functionality. Maintains messages sent
                in a firebase firestore
              </p>
              <a
                href="https://jscmns.github.io/real-time-chatroom/index.html"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">
                A simple weather app. Works with an API to fetch weather data.
              </p>
              <a
                href="https://jscmns.github.io/weather-app/"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Scorekeeper</h5>
              <p class="card-text">
                A simple scorekeeper app. Counts score for two players.
              </p>
              <a
                href="https://jscmns.github.io/scorekeeper/index.html"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- PROJECT GROUP -->
      <div class="row mt-3 text-center">
        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Interactive quiz</h5>
              <p class="card-text">A simple quiz page made with HTML and CSS</p>
              <a
                href="https://jscmns.github.io/interactive-ninja-quiz/"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Digital clock</h5>
              <p class="card-text">A digital clock</p>
              <a
                href="https://jscmns.github.io/digital-clock/"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Museum of candy</h5>
              <p class="card-text">
                A simple static website done to experiment with styles
              </p>
              <a
                href="https://jscmns.github.io/museum-of-candy/index.html"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="col-sm-3 project-box">
          <div class="card text-center h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Todo List</h5>
              <p class="card-text">
                A to do list app that works in the browser
              </p>
              <a
                href="https://jscmns.github.io/todo/index.html"
                target="_blank"
                class="btn btn-primary"
                >View</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT FORM -->
    <div class="container-fluid" id="form-bg">
      <div class="container my-5 w-md-50" id="contact">
        <h2 class="mb-3 text-center">Contact Me!</h2>
        <form action="mailto:jose_camunas@hotmail.com">
          <div class="mb-3">
            <label for="email" class="form-label fs-5">Your Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label fs-5">Your name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name here"
              name="name"
            />
          </div>
          <div class="mb-3">
            <label for="text" class="form-label fs-5">Message:</label>
            <textarea
              class="form-control"
              id="text"
              name="text"
              rows="3"
              placeholder="Enter message..."
            ></textarea>
          </div>
          <button class="btn btn-success">Send</button>
        </form>
      </div>
    </div>

    <footer class="footer mt-auto py-3 text-light text-center">
      <div class="container">
        <ul class="social-list">
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.linkedin.com/in/jlcamunas/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://github.com/jscmns"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <p class="mt-3 fs-5">José L. Camuñas</p>
      <p class="mt-3 fs-5">2021</p>
    </footer>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="script.js
  "></script>
  </body>
</html>
