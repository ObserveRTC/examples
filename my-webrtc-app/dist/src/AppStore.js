import { getRandomUserId } from "./UserIds";
import { v4 as uuidv4 } from "uuid";
var clientType;
var roomId;
var sfuAddress;
var samplingPeriodInMs;
var clientId = uuidv4();
var userId = getRandomUserId();
export function getRoomId() {
    if (!roomId) {
        var candidate = document.querySelector("span#roomId");
        if (candidate) {
            roomId = candidate.textContent;
        }
    }
    return roomId;
}
export function getSamplingPeriodInMs() {
    if (!samplingPeriodInMs) {
        var candidate = document.querySelector("span#samplingPeriodInMs");
        if (candidate === null || candidate === void 0 ? void 0 : candidate.textContent) {
            samplingPeriodInMs = parseInt(candidate.textContent);
        }
        else {
            samplingPeriodInMs = 15000;
        }
    }
    return samplingPeriodInMs;
}
export function getUserId() {
    return userId;
}
export function getClientId() {
    return clientId;
}
export function getClientType() {
    if (!clientType) {
        var candidate = document.querySelector("span#clientType").textContent.toLocaleLowerCase();
        switch (candidate) {
            case "mediasoup":
                clientType = "mediasoup";
                break;
            default:
                throw new Error("Cannot recognize sfuType: " + candidate);
        }
    }
    return clientType;
}
export function getSfuAddress() {
    if (!sfuAddress) {
        var candidate = document.querySelector("span#sfuAddress");
        if (candidate) {
            sfuAddress = candidate.textContent;
        }
    }
    return sfuAddress;
}
