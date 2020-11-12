"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./api/movies/"));
const service_1 = require("./api/movies/service");
const app = express_1.default();
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log('paso por aqui');
    if (req.headers.clavesupersegura === '1234') {
        next();
    }
    else {
        console.log('no puede pasar');
        res.sendStatus(403);
    }
});
app.use('/movie', movies_1.default);
app.get('/', (req, res) => {
    console.log(req.headers);
    res.json();
});
service_1.loadDatabase()
    .then(() => {
    app.listen(3000, () => console.log('Listen on port 3000'));
})
    .catch((err) => {
    console.error("Database wasn't loaded: ", err);
});
