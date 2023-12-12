import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from './Pages/home'
import Add from './Pages/Adicionar'
import Atualizar from './Pages/Atualizar'




function AppRouter(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/criar" element={<Add />}></Route>
                    <Route path="/update/:id" element={<Atualizar />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter