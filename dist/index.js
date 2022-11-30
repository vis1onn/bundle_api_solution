"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bundle_1 = __importDefault(require("./routes/bundle"));
const app = (0, express_1.default)();
app.use('/bundle', bundle_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke!' });
});
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
//# sourceMappingURL=index.js.map