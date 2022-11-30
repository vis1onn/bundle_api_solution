"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bundle_1 = require("../controllers/bundle");
const router = express_1.default.Router();
router.get("/", bundle_1.getBundle);
exports.default = router;
//# sourceMappingURL=bundle.js.map