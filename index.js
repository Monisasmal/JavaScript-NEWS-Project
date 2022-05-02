//console.log("This is JS file");
//047aed9f871343aeb3a055340046027d

sources = 'bbc-news';
let apiKey = '047aed9f871343aeb3a055340046027d'

let newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = ` 
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index + 1}: </b>  ${element["title"]}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#newsAccordian">
                        <div class="accordion-body">${element["content"]}.<a href = "${element["url"]}" target = "_blank"> Read more </a>
                        </div>
                        </div>
                        </div>`;
            newsHtml += news;

        });


        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()


