"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = __importDefault(require("../../models/Events"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const DeleteService = async (id) => {

    const event = await Events_1.default.findOne({
        where: { id }
    });
    if (!event) {
        throw new AppError_1.default("ERR_NO_TAG_FOUND", 404);
    }
    await event.destroy();
};
exports.default = DeleteService;
