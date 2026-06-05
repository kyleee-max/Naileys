export const __esModule: boolean;
export namespace Browsers {
    function ubuntu(browser: any): any[];
    function macOS(browser: any): any[];
    function baileys(browser: any): any[];
    function windows(browser: any): any[];
    function appropriate(browser: any): any[];
}
export namespace BufferJSON {
    function replacer(k: any, value: any): any;
    function reviver(_: any, value: any): any;
}
export type AnyObject = Record<string, unknown>;
/**
 * Wait for a promise to resolve or reject after a timeout.
 * @param {number} ms
 * @param {(resolve: Function, reject: Function) => void} promise
 * @returns {Promise<unknown>}
 */
export function promiseTimeout(ms: number, promise: (resolve: Function, reject: Function) => void): Promise<unknown>;
/**
 * Bind to events and resolve when a condition is met.
 * @param {import('events').EventEmitter} ev
 * @param {string} event
 * @returns {(check: (update: unknown) => Promise<boolean> | boolean, timeoutMs: number) => Promise<void>}
 */
export function bindWaitForEvent(ev: import("events").EventEmitter, event: string): (check: (update: unknown) => Promise<boolean> | boolean, timeoutMs: number) => Promise<void>;
export function trimUndefined(obj: any): any;
export function bytesToCrockford(buffer: any): string;
/**
 * Get the WA platform ID corresponding to a browser name.
 * @param {string} browser
 * @returns {string}
 */
export function getPlatformId(browser: string): string;
/**
 * Get the author id for a message key.
 * @param {AnyObject} key
 * @param {string} [meId='me']
 * @returns {string}
 */
export function getKeyAuthor(key: AnyObject, meId?: string): string;
/**
 * Pad a message buffer to a multiple of 16 bytes using PKCS#7-like padding.
 * @param {Buffer} msg
 * @returns {Buffer}
 */
export function writeRandomPadMax16(msg: Buffer): Buffer;
export function unpadRandomMax16(e: any): Uint8Array<any>;
export function encodeWAMessage(message: any): Buffer<ArrayBufferLike>;
export function encodeNewsletterMessage(message: any): any;
/**
 * Generate a random registration id (0..16383)
 * @returns {number}
 */
export function generateRegistrationId(): number;
/**
 * Encode a number into big-endian bytes.
 * @param {number} e
 * @param {number} [t=4]
 * @returns {Uint8Array}
 */
export function encodeBigEndian(e: number, t?: number): Uint8Array;
/**
 * Convert protobuf Long or numeric types into a plain number.
 * @param {unknown} t
 * @returns {number}
 */
export function toNumber(t: unknown): number;
/** unix timestamp of a date in seconds */
export function unixTimestampSeconds(date?: Date): number;
/**
 * Create a cancellable debounced timeout helper.
 * @param {number} [intervalMs=1000]
 * @param {Function} task
 * @returns {{ start: Function, cancel: Function, setTask: Function, setInterval: Function }}
 */
export function debouncedTimeout(intervalMs?: number, task: Function): {
    start: Function;
    cancel: Function;
    setTask: Function;
    setInterval: Function;
};
/**
 * Delay for a number of milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function delay(ms: number): Promise<void>;
/**
 * Create a cancellable delay promise.
 * @param {number} ms
 * @returns {{ delay: Promise<void>, cancel: () => void }}
 */
export function delayCancellable(ms: number): {
    delay: Promise<void>;
    cancel: () => void;
};
/**
 * Generate a v2 message id. If userId is provided will include user context.
 * @param {string} [userId]
 * @returns {string}
 */
export function generateMessageIDV2(userId?: string): string;
/**
 * Generate a random message id.
 * @returns {string}
 */
export function generateMessageID(): string;
/**
 * Wait for the connection.update event to satisfy the provided check.
 * @param {import('events').EventEmitter} ev
 */
export function bindWaitForConnectionUpdate(ev: import("events").EventEmitter): (check: (update: unknown) => Promise<boolean> | boolean, timeoutMs: number) => Promise<void>;
/**
 * Print QR status to logger when a QR is received by the socket.
 * @param {import('events').EventEmitter} ev
 * @param {{ info?: Function, warn?: Function }} logger
 */
export function printQRIfNecessaryListener(ev: import("events").EventEmitter, logger: {
    info?: Function;
    warn?: Function;
}): void;
export function fetchLatestWileysVersion(options?: {}): Promise<{
    version: any[];
    isLatest: boolean;
    error?: undefined;
} | {
    version: number[];
    isLatest: boolean;
    error: any;
}>;
export function fetchLatestBaileysVersion(options?: {}): Promise<{
    version: any[];
    isLatest: boolean;
    error?: undefined;
} | {
    version: number[];
    isLatest: boolean;
    error: any;
}>;
/**
 * A utility that fetches the latest web version of whatsapp.
 * Use to ensure your WA connection is always on the latest version
 */
export function fetchLatestWaWebVersion(options: any): Promise<{
    version: number[];
    isLatest: boolean;
    error?: undefined;
} | {
    version: number[];
    isLatest: boolean;
    error: any;
}>;
/** unique message tag prefix for MD clients */
export function generateMdTagPrefix(): string;
/**
 * Given a type of receipt, returns what the new status of the message should be
 * @param type type from receipt
 */
export function getStatusFromReceiptType(type: any): any;
/**
 * Stream errors generally provide a reason, map that to a baileys DisconnectReason
 * @param reason the string reason given, eg. "conflict"
 */
export function getErrorCodeFromStreamError(node: any): {
    reason: any;
    statusCode: number;
};
export function getCallStatusFromNode({ tag, attrs }: {
    tag: any;
    attrs: any;
}): string;
export function getCodeFromWSError(error: any): number;
/**
 * Is the given platform WA business
 * @param platform AuthenticationCreds.platform
 */
export function isWABusinessPlatform(platform: any): boolean;
