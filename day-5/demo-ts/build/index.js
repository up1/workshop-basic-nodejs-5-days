"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = express_1.default();
server.get("/", function (req, res) {
    res.send("Hello TypeScript");
});
server.listen(3000, function () {
    console.log("Starting");
});
