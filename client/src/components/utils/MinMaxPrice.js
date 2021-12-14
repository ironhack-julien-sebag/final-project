export const getMinPrice = data => {
    let arr = []

    data.forEach(artist => {
        if (artist.price === undefined) {
            arr.push(0)
        } else {
            arr.push(parseInt(artist.price))
        }
    })

    // return parseInt(Math.min.apply(Math, arr))
    return Math.min(...arr)
}

export const getMaxPrice = data => {
    let arr = []

    data.forEach(artist => {
        if (artist.price === undefined) {
            arr.push(0)
        } else {
            arr.push(parseInt(artist.price))
        }
    })

    return parseInt(Math.max.apply(Math, arr))
}
