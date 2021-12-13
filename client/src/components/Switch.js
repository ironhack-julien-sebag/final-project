// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"
import { v4 as uuid } from "uuid"

// Pages
import Home from "../pages/Home"

// Login
import Login from "../pages/login/Login"
import Signup from "../pages/login/Signup"
import ForgotPassword from "../pages/login/ForgotPassword"

// Artists
import Artists from "../pages/artist/Artists"
import ArtistDetail from "../pages/artist/ArtistDetail"
import EditArtist from "../pages/artist/EditArtist"
import ArtistAccount from "../pages/artist/ArtistAccount"

// Protected routes
import ProtectedRoute from "../components/utils/ProtectedRoutes"

// Data artists
import artists from "./data/artists.json"

// User
import AccountUser from "../pages/user/AccountUser"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"

// Routes
// const Pages = [
//     {
//         path: "/",
//         exact: true,
//         component: Home,
//     },

//     // Login
//     {
//         path: "/login",
//         component: Login,
//     },

//     {
//         path: "/forgot-password",
//         component: ForgotPassword,
//     },

//     // Artists
//     {
//         path: "/artists",
//         component: Artists,
//     },
//     {
//         path: "/artist",
//         component: ArtistAccount
//     },

//     // {
//     //     path: "/artists/id",
//     //     component: ArtistDetail,
//     // },

//     {
//         path: "/artists/id/edit",
//         component: EditArtist,
//     },

//     // User
//     {
//         path: "/my-account",
//         component: AccountUser,
//     },

//     {
//         path: "/my-account/edit",
//         component: EditAccount,
//     },

//     {
//         path: "/my-account/edit/edit-password",
//         component: EditPassword,
//     },
// ]

function Switch() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Login */}
            {/* <Route path="/login" element={<Login />}>
                <Route path="/login" element={<LoginForm />} />
            </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Artist */}
            <Route path="/artists" element={<Artists />} />

            {artists.map(artist => (
                <>
                    {/* Artist page */}
                    <Route
                        path={`/artists/${artist._id.$oid}`}
                        element={<ArtistDetail artist={artist} />}
                        key={uuid()}
                    />
                    {/* Edit artist page */}
                    <Route
                        path={`/artists/${artist._id.$oid}/edit`}
                        element={
                            <ProtectedRoute redirectTo="/login">
                                <EditArtist artist={artist} />
                            </ProtectedRoute>
                        }
                        key={`/artists/${artist._id.$oid}/edit`}
                    />
                    {/* Artist account */}
                    <Route
                        path={`/artist/${artist._id.$oid}`}
                        element={
                            <ProtectedRoute redirectTo="/login">
                                <ArtistAccount artist={artist} />
                            </ProtectedRoute>
                        }
                        key={`/artist/${artist._id.$oid}`}
                    />
                    {/* Edit artist account */}
                    <Route
                        path={`/artist/${artist._id.$oid}/edit`}
                        element={
                            <ProtectedRoute redirectTo="/login"></ProtectedRoute>
                        }
                        key={`/artist/${artist._id.$oid}/edit`}
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
            />
            {/* <Route
                path="/my-account"
                element={<AccountUser />}
            /> */}
            <Route
                path="/my-account/edit"
                element={
                    <ProtectedRoute redirectTo="/login">
                        <EditAccount />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/my-account/edit/edit-password"
                element={
                    <ProtectedRoute redirectTo="/login">
                        <EditPassword />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default Switch
