function init() {
    document.title = WebsiteInfos.name + " | NFT"

    websitesNameLabel = document.querySelectorAll(".name")
    websitesNameLabel.forEach(websiteNameLabel => {
        websiteNameLabel.innerText = WebsiteInfos.name
    });
}
function displayNav() {
    checkbox = document.querySelector("#navDisplayed")
    if (checkbox.checked == false) {
        document.querySelector(".wrapper").style.transform = "translateY(0)"
        checkbox.checked = true
    }else {
        document.querySelector(".wrapper").style.transform = "translateY(-150%)"
        checkbox.checked = false
    }
}
function redirection(target) {
    window.location.href = "https://" + target
}
function inRedirection(target) {
    window.location.href = "./" + target + ".html"
}

const text = document.querySelector(".cursorText")
text.innerHTML = text.textContent.replace(/\S/g, "<span class='spanLetterCursor' >$&</span>")

const element = document.querySelectorAll(".spanLetterCursor")
for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate("+i*23+"deg)"
}

document.addEventListener("mousemove", function(e)
{
    text.style.left = e.pageX + "px";
    text.style.top = e.pageY + "px";
})