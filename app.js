import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";

import prodsRouter from './routes/products.route.js';

const app = express();

// View engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Public folder
app.use(express.static('public'));

// Middlewares request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Router productos
app.use("/products", prodsRouter);

// Home del sitio
app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/ping", (req, res) => {
    res.send("Pong!");
});

// Pagina error 404
app.use((req, res, next) => {
    res.render("404");
});

// Conexión MongoDB
mongoose.connect("mongodb://localhost:27017/tiendita");

app.listen(3000, () => {
    console.log("App listening on port 3000");
});