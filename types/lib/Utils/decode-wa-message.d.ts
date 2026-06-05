export const __esModule: boolean;
export const NO_MESSAGE_FOUND_ERROR_TEXT: "Message absent from node";
export const MISSING_KEYS_ERROR_TEXT: "Key used already or never filled";
export namespace NACK_REASONS {
    let ParsingError: number;
    let UnrecognizedStanza: number;
    let UnrecognizedStanzaClass: number;
    let UnrecognizedStanzaType: number;
    let InvalidProtobuf: number;
    let InvalidHostedCompanionStanza: number;
    let MissingMessageSecret: number;
    let SignalErrorOldCounter: number;
    let MessageDeletedOnPeer: number;
    let UnhandledError: number;
    let UnsupportedAdminRevoke: number;
    let UnsupportedLIDGroup: number;
    let DBOperationFailed: number;
}
/**
 * Decode the received node as a message.
 * @note this will only parse the message, not decrypt it
 * @param {any} stanza
 * @param {string} meId
 * @param {string} meLid
 * @returns {{ fullMessage: any, author: string, sender: string }}
 */
export function decodeMessageNode(stanza: any, meId: string, meLid: string): {
    fullMessage: any;
    author: string;
    sender: string;
};
/**
 * Decrypt an encrypted message node using the provided repository.
 * @param {any} stanza
 * @param {string} meId
 * @param {string} meLid
 * @param {any} repository
 * @param {{ error?: Function }} logger
 * @returns {{ fullMessage: any, category: any, author: string, decrypt: () => Promise<void> }}
 */
export function decryptMessageNode(stanza: any, meId: string, meLid: string, repository: any, logger: {
    error?: Function;
}): {
    fullMessage: any;
    category: any;
    author: string;
    decrypt: () => Promise<void>;
};
