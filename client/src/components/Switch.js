// Packages
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { v4 as uuid } from "uuid"
import axios from "axios"

// Pages
import Home from "../pages/Home"

// Login
import Login from "../pages/login/Login"
import Signup from "../pages/login/Signup"
import ForgotPassword from "../pages/login/ForgotPassword"
import SignupArtist from "../pages/login/SignupArtist"

// Artists
import Artists from "../pages/artist/Artists"
import ArtistDetail from "../pages/artist/ArtistDetail"
import EditArtist from "../pages/artist/EditArtist"
import ArtistAccount from "../pages/artist/ArtistAccount"

// Protected routes
import ProtectedRoute from "../components/utils/ProtectedRoutes"

// User
import AccountUser from "../pages/user/AccountUser"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"

// Utils
import scrollToTop from "./utils/ScrollToTop"

function Switch() {
    const [artistsList, setArtistsList] = useState([])

    useEffect(() => {
        axios
            .get("/api/users")
            .then(res => setArtistsList(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home />} preload={scrollToTop} />

            {/* Login */}
            <Route path="/login" element={<Login />} preload={scrollToTop} />
            <Route path="/signup" element={<Signup />} preload={scrollToTop} />
            <Route path="/signup/artist" element={<SignupArtist />} preload={scrollToTop} />
            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
                preload={scrollToTop}
            />

            {/* Artists list */}
            <Route
                path="/artists"
                element={<Artists />}
                preload={scrollToTop}
            />

            {artistsList.map(artist => (
                <>
                    {/* Artist page */}
                    <Route
                        path={`/artists/${artist._id}`}
                        element={<ArtistDetail artist={artist} />}
                        key={uuid()}
                        preload={scrollToTop}
                    />
                    {/* Edit artist page */}
                    <Route
                        path={`/artists/${artist._id}/edit`}
                        element={
                            <ProtectedRoute redirectTo="/login">
                                <EditArtist artist={artist} />
                            </ProtectedRoute>
                        }
                        key={`/artists/${artist._id}/edit`}
                        preload={scrollToTop}
                    />
                    {/* Artist account */}
                    <Route
                        path={`/artist/${artist._id}`}
                        element={
                            <ProtectedRoute redirectTo="/login">
                                <ArtistAccount artist={artist} />
                            </ProtectedRoute>
                        }
                        key={`/artist/${artist._id}`}
                        preload={scrollToTop}
                    />
                    {/* Edit artist account */}
                    <Route
                        path={`/artist/${artist._id}/edit`}
                        element={
                            <ProtectedRoute redirectTo="/login"></ProtectedRoute>
                        }
                        key={`/artist/${artist._id}/edit`}
                        preload={scrollToTop}
                    />
                </>
            ))}

            {/* User */}
            <Route
                path="/my-account"
                element={
                    <ProtectedRoute redirectTo="/login">
                        <AccountUser />
                    </ProtectedRoute>
                }
                preload={scrollToTop}
            />
            <Route
                path="/my-account/edit"
                element={
                    <ProtectedRoute redirectTo="/login">
                        <EditAccount />
                    </ProtectedRoute>
                }
                preload={scrollToTop}
            />
            <Route
                path="/my-account/edit/edit-password"
                element={
                    <ProtectedRoute redirectTo="/login">
                        <EditPassword />
                    </ProtectedRoute>
                }
                preload={scrollToTop}
            />
        </Routes>
    )
}

export default Switch
