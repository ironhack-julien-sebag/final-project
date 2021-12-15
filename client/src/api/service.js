import axios from "axios"

const service = axios.create({
    baseURL: "http://localhost:5005/api",
})

const errorHandler = err => {
    throw err
}

const getMovies = () => {
    return service
        .get("/movies")
        .then(res => res.data)
        .catch(errorHandler)
}

const uploadImage = file => {
    return service
        .post("/upload", file)
        .then(res => res.data)
        .catch(errorHandler)
}

const createMovie = newMovie => {
    return service
        .post("/movies", newMovie)
        .then(res => res.data)
        .catch(errorHandler)
}

export default {
    service,
    getMovies,
    uploadImage,
    createMovie,
}
