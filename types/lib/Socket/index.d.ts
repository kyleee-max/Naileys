export const __esModule: boolean;
export default makeWASocket;
export type WASocket = import("../Types").WASocket;
export type AuthState = import("../Types").AuthState;
export type MakeWASocketConfig = import("../Types").MakeWASocketConfig;
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
declare function makeWASocket(config: Partial<MakeWASocketConfig & {
    auth?: AuthState;
}>): WASocket;
