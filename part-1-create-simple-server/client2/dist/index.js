"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zeus_1 = require("../client/zeus");
const chain = (0, zeus_1.Chain)("http://localhost:4000/graphql");
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield chain("query")({
                getUser: [{
                        id: "1",
                    },
                    {
                        email: true,
                        firstname: true
                    }]
            });
            console.log(response.getUser);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield chain("mutation")({
                createUser: [{
                        input: {
                            email: 'Dp2@gmail.com',
                            firstname: "DP",
                            lastname: "Test User",
                        },
                    },
                    {
                        id: true,
                    }]
            });
            console.log(response.createUser);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getUser();
