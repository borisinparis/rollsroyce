function jumpTo(id) {
    let contain = document.querySelector("#" + id)

    contain.scrollIntoView({ 'behavior': 'smooth' })
    // document.getElementById('.slider').appendChild(contain[0])
}
