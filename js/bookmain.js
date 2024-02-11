 "use strict";
var siteUrl = document.getElementById("site-url");
var siteName = document.getElementById("site-name");
var subBtn = document.getElementById("Submit");

subBtn.addEventListener("click" ,addUrls );

var urlContainer = [];
var id = urlContainer.length;
function setLocal(setter) {
    localStorage.setItem("url", JSON.stringify(setter));
};

function getLocal() {
    urlContainer = JSON.parse(localStorage.getItem("url"));
};
if (localStorage.getItem("url") == null) {
    urlContainer = [];
} else {
    getLocal();
    displayUrls(urlContainer);
};



function addUrls() {
    if (urlvaild()&&nameValid() === true) {
        var urlsData = {
            name: siteName.value,
            url: siteUrl.value,
            id: id++
        };
        urlContainer.push(urlsData);
        
        siteUrl.style.outline = "4px transparent solid";
        siteName.style.outline="4px solid transparent";
    } else {
        alert("invalid url or sitename");
        // document.getElementById("popup").classList.replace("d")
    }
    console.log(urlContainer);
        displayUrls(urlContainer);
        setLocal(urlContainer);
        clear();
};

function displayUrls(urls) {
    var container = ``;
    for (var i = 0; i < urls.length; i++) {

        container +=

            `<tr>
        <td>${i + 1}</td>
        <td>${urls[i].name}</td>
        <td><button class="btn btn-info"><a href="//${urls[i].url}" target="_blank">Visit</a></button></td>
        <td><button class="btn btn-danger" onclick="Delete(${urls[i].id})">Delete</button></td>
    </tr>
    `;
    };
    document.getElementById("tbody").innerHTML = container;

};
function urlvaild() {
    var regexurl = /^(http:\/\/www|https:\/\/www|www)\.[a-zA-Z]{3,}\.(com|net|gov)$/ig;
    var test = regexurl.test(siteUrl.value);
    if (test) {
        siteUrl.style.outline = "green 4px solid"
        return true
    } else {
        siteUrl.style.outline = "4px red solid";
        return false;
    }
}
function nameValid() {
    var nameRegex =/^[A-Za-z_]{3,}$/
    var test = nameRegex.test(siteName.value);
    if(test){
        siteName.style.outline = "green 4px solid"
        return true
    }else {
        siteName.style.outline = "4px red solid";
        return false;
}
}
function clear() {
    siteName.value = "";
    siteUrl.value = "";
}
function Delete(id) {

    for (var i = 0; i < urlContainer.length; i++) {
        if (urlContainer[i].id === id) {
            var ret = urlContainer.splice(urlContainer.indexOf(urlContainer[i]), 1);
        }
    }

    // seteproducts in local storage
    setLocal(urlContainer);

    // Show Product
    displayUrls(urlContainer);
};

