export const __esModule: boolean;
export type AnyObject = Record<string, unknown>;
export type PrepareMessageOptions = {
    upload: (stream: Buffer | import("stream").Readable, opts?: AnyObject) => Promise<AnyObject>;
    mediaCache?: Map<string, Buffer>;
    newsletter?: boolean;
    mediaTypeOverride?: string;
    mediaUploadTimeoutMs?: number;
    options?: AnyObject;
    logger?: {
        debug?: (...args: any[]) => void;
        warn?: (...args: any[]) => void;
        info?: (...args: any[]) => void;
        child?: (meta: any) => any;
    };
    backgroundColor?: string;
    font?: string;
    getProfilePicUrl?: (jid: string, type: string) => Promise<string | undefined>;
    getUrlInfo?: (url: string) => Promise<AnyObject | undefined>;
};
/**
 * Aggregates all poll updates in a poll.
 * @param msg the poll creation message
 * @param meId your jid
 * @returns A list of options & their voters
 */
export function getAggregateVotesInPollMessage({ message, pollUpdates }: {
    message: any;
    pollUpdates: any;
}, meId: any): any[];
/**
 * Uses a regex to test whether the string contains a URL, and returns the URL if it does.
 * @param {string} text eg. hello https://google.com
 * @returns {string | undefined} the URL, eg. https://google.com
 */
export function extractUrlFromText(text: string): string | undefined;
/**
 * Generate a link preview if the text contains a URL.
 * @param {string} text
 * @param {(url: string) => Promise<AnyObject | undefined>} [getUrlInfo]
 * @param {{ warn?: (...args: any[]) => void }} [logger]
 * @returns {Promise<AnyObject | undefined>}
 */
export function generateLinkPreviewIfRequired(text: string, getUrlInfo?: (url: string) => Promise<AnyObject | undefined>, logger?: {
    warn?: (...args: any[]) => void;
}): Promise<AnyObject | undefined>;
/**
 * Prepare a media message for upload/encryption and return a WAMessage proto
 * @param {AnyObject} message
 * @param {PrepareMessageOptions} options
 * @returns {Promise<import('../../WAProto').proto.Message>}
 */
export function prepareWAMessageMedia(message: AnyObject, options: PrepareMessageOptions): Promise<import("../../WAProto").proto.Message>;
export function prepareDisappearingMessageSettingContent(ephemeralExpiration: any): any;
/**
 * Generate forwarded message content like WA does
 * @param {AnyObject} message the message to forward
 * @param {boolean} [forceForward] will show the message as forwarded even if it is from you
 * @returns {AnyObject}
 */
export function generateForwardMessageContent(message: AnyObject, forceForward?: boolean): AnyObject;
/**
 * Build a WA message payload from a high-level send message object.
 * @param {AnyObject} message
 * @param {AnyObject} options
 * @returns {Promise<import('../../WAProto').proto.Message>}
 */
export function generateWAMessageContent(message: AnyObject, options: AnyObject): Promise<import("../../WAProto").proto.Message>;
/**
 * Wrap a WA message content into a WebMessageInfo object for sending.
 * @param {string} jid
 * @param {AnyObject} message
 * @param {AnyObject} options
 * @returns {import('../../WAProto').proto.WebMessageInfo}
 */
export function generateWAMessageFromContent(jid: string, message: AnyObject, options: AnyObject): import("../../WAProto").proto.WebMessageInfo;
/**
 * Create a full WebMessageInfo for a given jid and high-level content.
 * @param {string} jid
 * @param {AnyObject} content
 * @param {AnyObject} options
 * @returns {Promise<import('../../WAProto').proto.WebMessageInfo>}
 */
export function generateWAMessage(jid: string, content: AnyObject, options: AnyObject): Promise<import("../../WAProto").proto.WebMessageInfo>;
/** Get the key to access the true type of content */
/**
 * Get the message content type key for a proto message object.
 * @param {AnyObject | undefined} content
 * @returns {string|undefined}
 */
export function getContentType(content: AnyObject | undefined): string | undefined;
/**
 * Normalizes ephemeral, view once messages to regular message content
 * Eg. image messages in ephemeral messages, in view once messages etc.
 * @param content
 * @returns
 */
/**
 * Normalize ephemeral/view-once or future-proof content to the inner message object.
 * @param {AnyObject | undefined} content
 * @returns {AnyObject | undefined}
 */
export function normalizeMessageContent(content: AnyObject | undefined): AnyObject | undefined;
/**
 * Extract the true message content from a message
 * Eg. extracts the inner message from a disappearing message/view once message
 */
/**
 * Extract the true message content from a message or template wrapper.
 * @param {AnyObject | undefined} content
 * @returns {AnyObject | undefined}
 */
export function extractMessageContent(content: AnyObject | undefined): AnyObject | undefined;
/**
 * Returns the device predicted by message ID
 */
/**
 * Returns the device predicted by message ID.
 * @param {string} id
 * @returns {string}
 */
export function getDevice(id: string): string;
/** Upserts a receipt in the message */
/**
 * Upserts a receipt into the message object.
 * @param {any} msg
 * @param {any} receipt
 */
export function updateMessageWithReceipt(msg: any, receipt: any): void;
/** Update the message with a new reaction */
/**
 * Update the message with a new reaction.
 * @param {AnyObject} msg
 * @param {AnyObject} reaction
 */
export function updateMessageWithReaction(msg: AnyObject, reaction: AnyObject): void;
/** Update the message with a new poll update */
/**
 * Apply a poll update to the poll creation message.
 * @param {any} msg
 * @param {any} update
 */
export function updateMessageWithPollUpdate(msg: any, update: any): void;
/** Given a list of message keys, aggregates them by chat & sender. Useful for sending read receipts in bulk */
/**
 * Aggregate message keys that are not from the current user.
 * @param {Array<{ remoteJid: string, id: string, participant?: string, fromMe?: boolean }>} keys
 * @returns {Array<{ jid: string, participant?: string, messageIds: string[] }>}
 */
export function aggregateMessageKeysNotFromMe(keys: Array<{
    remoteJid: string;
    id: string;
    participant?: string;
    fromMe?: boolean;
}>): Array<{
    jid: string;
    participant?: string;
    messageIds: string[];
}>;
/**
 * Downloads the given message. Throws an error if it's not a media message
 */
/**
 * Download a media message as a stream or buffer.
 * @param {AnyObject} message
 * @param {'buffer'|'stream'} type
 * @param {AnyObject} options
 * @param {AnyObject} [ctx]
 * @returns {Promise<Buffer|import('stream').Readable>}
 */
export function downloadMediaMessage(message: AnyObject, type: "buffer" | "stream", options: AnyObject, ctx?: AnyObject): Promise<Buffer | import("stream").Readable>;
/** Checks whether the given message is a media message; if it is returns the inner content */
/**
 * Assert the content is a media message and return the inner media object.
 * @param {AnyObject | undefined} content
 * @returns {AnyObject}
 */
export function assertMediaContent(content: AnyObject | undefined): AnyObject;
export function toJid(id: any): any;
export function getSenderLid(message: any): {
    jid: any;
    lid: any;
};
