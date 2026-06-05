export const __esModule: boolean;
export type WAMessageStubType = import("../Types").WAMessageStubType;
export type WAMessage = import("../Types").WAMessage;
export type GroupMetadata = import("../Types").GroupMetadata;
export type MessagesSocket = import("./messages-send").MessagesSocket;
/**
 * @typedef {import('../Types').WAMessageStubType} WAMessageStubType
 * @typedef {import('../Types').WAMessage} WAMessage
 * @typedef {import('../Types').GroupMetadata} GroupMetadata
 * @typedef {import('./messages-send').MessagesSocket} MessagesSocket
 *
 * @param {object} config
 * @param {import('../Types').Logger} config.logger
 * @param {number} [config.retryRequestDelayMs]
 * @param {number} [config.maxMsgRetryCount]
 * @param {Function} [config.getMessage]
 * @param {Function} [config.shouldIgnoreJid]
 * @returns {MessagesSocket & { authState: import('../Types').AuthState }}
 */
export function makeMessagesRecvSocket(config: {
    logger: import("../Types").Logger;
    retryRequestDelayMs?: number;
    maxMsgRetryCount?: number;
    getMessage?: Function;
    shouldIgnoreJid?: Function;
}): MessagesSocket & {
    authState: import("../Types").AuthState;
};
