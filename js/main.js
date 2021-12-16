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
            <div class="nftContainer">
                <div class="top"></div>
                <div class="bottom">
                    <p class="idNFT">#${nft.id}</p>
                    <p class="priceNFT">$${nft.price}</p>
                </div>
            </div>
        </a>
        `
        document.querySelector("main").innerHTML += card
    });
}