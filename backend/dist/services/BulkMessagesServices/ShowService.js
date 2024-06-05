"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BulkMessages_1 = __importDefault(require("../../models/BulkMessages"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ShowService = async (id) => {
    const Bmsg = await BulkMessages_1.default.findByPk(id);
    if (!Bmsg) {
        throw new AppError_1.default("ERR_NO_BMSG_FOUND", 404);
    }
    return Bmsg;
};
exports.default = ShowService;
