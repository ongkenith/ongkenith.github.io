function populateProjCards() {
    const cards = [
        {"name": "Justin Bieber Fan Page", "description": "A quick project by prompting AI to create a webpage for Justin Bieber.","img": "photos/justin/justin1.jpg", "href" : "https://ongkenith.github.io/justin.html"
        },
        {"name": "HeartCode Mentor Training", "description": "Learning how to use Next.js framework during mentor training","img": "photos/heartcodeTraining", "href" : "https://heartcode-training-try.vercel.app/"
        }
    ];

    // <div class="col-md-3">
    //     <div class="card" style="width: 18rem;">
    //         <img src="" class="card-img-top">
    //         <div class="card-body">
    //             <h5 class="card-title">Project Name</h5>
    //             <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    //             <a href="#" class="btn btn-primary">Visit Webpage</a>
    //         </div>
    //     </div>
    // </div>

    var projectCards = document.getElementById("projectCards");

    for (let card of cards) {
        var content = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${card["img"]}" class="card-img-top" width="100px" height="260px">
                    <div class="card-body">
                        <h5 class="card-title">${card["name"]}</h5>
                        <p class="card-text">${card["description"]}</p>
                        <a href="${card["href"]}" target="_blank" class="btn btn-primary">Visit Webpage</a>
                    </div>
                </div>
            </div>
        `

        projectCards.innerHTML += content;
    }
}

populateProjCards()