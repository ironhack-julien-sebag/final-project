export const getMinPrice = data => {
    let arr = []

    data.forEach(artist => {
        arr.push(artist.price)
    })

    return Math.min.apply(Math, arr)
}

export const getMaxPrice = data => {
    let arr = []

    data.forEach(artist => {
        arr.push(artist.price)
    })

    return Math.max.apply(Math, arr)
}
