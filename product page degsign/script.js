let productimg = document.getElementById('product-img')
let btn = document.getElementsByClassName('btn')

btn[0].onclick = function () {
    productimg.src = "images/image1.png"
    for (bt of btn) {
        bt.classlist.remove("active")

    }
    this.classList.add("active")
}

btn[1].onclick = function () {
    productimg.src = "images/image2.png"
    for (bt of btn) {
        bt.classlist.remove("active")

    }
    this.classList.add("active")
}

btn[2].onclick = function () {
    productimg.src = "images/image3.png"
    for (bt of btn) {
        bt.classlist.remove("active")

    }
    this.classList.add("active")
}