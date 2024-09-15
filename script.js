/* Print Navigation Top Bar */
let nav_bar_contents = 
`<div id='nav_bar' class="container-fluid my-1 sticky-top">
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="projects.html">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="error_alert()">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</div>`;

document.getElementById("nav_bar").innerHTML = nav_bar_contents;

function error_alert() {
    alert("Coming soon!")
}