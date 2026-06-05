export const __esModule: boolean;
export type WASocket = import("../Types").WASocket;
export type AuthState = import("../Types").AuthState;
export type MakeWASocketConfig = import("../Types").MakeWASocketConfig;
export type MessagesRecvSocket = import("./messages-recv").MessagesRecvSocket;
/**
 * @typedef {import('../Types').WASocket} WASocket
 * @typedef {import('../Types').AuthState} AuthState
 * @typedef {import('../Types').MakeWASocketConfig} MakeWASocketConfig
 * @typedef {import('./messages-recv').MessagesRecvSocket} MessagesRecvSocket
 */
/**
 * Create business layer socket from messages-recv socket
 * @param {Partial<MakeWASocketConfig & { auth?: AuthState, logger?: any }>} config
 * @returns {MessagesRecvSocket & Partial<Pick<WASocket, 'getOrderDetails'|'getCatalog'|'getCollections'|'productCreate'|'productDelete'|'productUpdate'>>}
 */
export function makeBusinessSocket(config: Partial<MakeWASocketConfig & {
    auth?: AuthState;
    logger?: any;
}>): MessagesRecvSocket & Partial<Pick<WASocket, "getOrderDetails" | "getCatalog" | "getCollections" | "productCreate" | "productDelete" | "productUpdate">>;
