import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from './Pages/home'
import Add from './Pages/Adicionar'
import Atualizar from './Pages/Atualizar'
import Get from './Components/Get'
import Produtos from './Pages/Produtos'
import Carrinho from "./Pages/Carrinho"




function AppRouter(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/criar" element={<Add />}></Route>
                    <Route path="/update/:id" element={<Atualizar />}></Route>
                    <Route path="/adm4321" element={<Get />}></Route>
                    <Route path="/produtos" element={<Produtos />}></Route>
                    <Route path="/carrinho/:id" element={<Carrinho />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter