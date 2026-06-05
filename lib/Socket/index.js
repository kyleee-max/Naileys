"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Defaults_1 = require("../Defaults");
const business_1 = require("./business");
// export the last socket layer
/**
 * @typedef {import('../Types').WASocket} WASocket
 * @typedef {import('../Types').AuthState} AuthState
 * @typedef {import('../Types').MakeWASocketConfig} MakeWASocketConfig
 */

/**
 * Create WhatsApp socket with provided config.
 * @param {Partial<MakeWASocketConfig & { auth?: AuthState }>} config
 * @returns {WASocket}
 */
const makeWASocket = (config) => ((0, business_1.makeBusinessSocket)({
    ...Defaults_1.DEFAULT_CONNECTION_CONFIG,
    ...config
}));
exports.default = makeWASocket;
