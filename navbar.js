function new_navbar() {
    // Function that creates Navbar based on navbar_contents object modification
    const navbar_contents = {
        "content1" : {"name" : "Home", "href_link" : "index.html", "status" : true},
        "content2" : {"name" : "Projects", "href_link" : "projects.html", "status" : true},
        "content3" : {"name" : "Achievements", "href_link" : "#", "status" : false},
        "content4" : {"name" : "Contact", "href_link" : "#", "status" : false}
    };

    /* Get the section of Navbar */
    let navbar = document.getElementById('navbar');
    let navbar_structure = document.createElement("nav");

    /* Add Bootstrap */
    navbar_structure.setAttribute("class", "navbar navbar-expand-md py-1 text-white bg-dark");
    navbar_structure.setAttribute("data-bs-theme","dark");
    navbar_structure.innerHTML = 
    `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span> <!-- this button appears when window size is small -->
    </button>`;

    navbar_dropdowns = document.createElement('div');
    navbar_dropdowns.setAttribute("class", "collapse navbar-collapse");
    navbar_dropdowns.setAttribute("id", "collapsibleNavbar");
    let navbar_list = document.createElement('ul');
    navbar_list.setAttribute("class", "navbar-nav ml-5 mr-auto");

    /* Go through navbar_contents object*/
    for (content in navbar_contents) {
        // console.log(content);
        let node = document.createElement("li");
        node.setAttribute("class", "nav-item mx-3");
        let node_click = document.createElement("a");
        node_click.setAttribute("class", "nav-link");
        node_click.setAttribute("href", navbar_contents[content]["href_link"]);
        node_name = document.createTextNode(navbar_contents[content]["name"]);

        // If feature not ready
        if (!navbar_contents[content]["status"]) {
            node_click.setAttribute("onclick", "error_alert()");
        }

        // Append everything of the content
        node_click.appendChild(node_name);
        node.appendChild(node_click);
        navbar_list.appendChild(node);
    }
    // console.log(navbar_list);
    navbar_dropdowns.appendChild(navbar_list);
    // console.log(navbar_structure);
    navbar_structure.append(navbar_dropdowns);
    navbar.appendChild(navbar_structure);
    //console.log(navbar);
}

function error_alert() {
    /* For any buttons not suppose to be working right now */
    alert("Coming soon!")
}

// Call all needed functions
new_navbar();