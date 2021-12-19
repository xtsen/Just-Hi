function init() {
    document.title = WebsiteInfos.name + " | NFT"

    websitesNameLabel = document.querySelectorAll(".name")
    websitesNameLabel.forEach(websiteNameLabel => {
        websiteNameLabel.innerText = WebsiteInfos.name
    });
    createGallery()
}
function createGallery() {
    nfts.forEach(nft => {
        card = `
        <a href="">
            <div class="nftContainer" style="background-image: url('./res/nft/${nft.id}.webp')">
                <div class="bottom">
                    <p class="idNFT">#${nft.id}</p>
                    <p class="priceNFT">$${nft.price}</p>
                </div>
            </div>
        </a>
        `
        document.querySelector(".mainNFTS").innerHTML += card
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