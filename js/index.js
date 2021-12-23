function init() {
    document.title = WebsiteInfos.name + " | NFT"

    websitesNameLabel = document.querySelectorAll(".name")
    websitesNameLabel.forEach(websiteNameLabel => {
        websiteNameLabel.innerText = WebsiteInfos.name
    });
    createGallery()
}
function createGallery() {
    if (nfts.length > 0) {
        nfts.forEach(nft => {
            card = `
            <a href="" class="backgroundLink">
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
    }else {
        document.querySelector(".comingSoonText").style.display = "block"
    }
}