"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wheater_1 = __importDefault(require("./routes/wheater"));
const db_1 = __importDefault(require("./config/db"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());

app.use('/api/v1/clima', wheater_1.default);

if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'frontend', 'build')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '..', 'frontend', 'build', 'index.html')));
}
else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Server running on port: ${port}`));
