export const __esModule: boolean;
export type ImageProcessingLibrary = {
    sharp?: AnyObject;
    jimp?: AnyObject;
};
export type MediaUploadResult = {
    mediaUrl?: string;
    directPath?: string;
    handle?: string;
};
export type MediaUploadOptions = {
    fileEncSha256B64?: string;
    mediaType?: string;
    timeoutMs?: number;
    newsletter?: boolean;
};
export type StreamResult = {
    stream: import("stream").Readable;
    type: "buffer" | "readable" | "remote" | "file";
};
export type ThumbnailResult = {
    thumbnail?: string;
    originalImageDimensions?: {
        width?: number;
        height?: number;
    };
};
export type MediaKeys = {
    cipherKey: Buffer;
    iv: Buffer;
    macKey: Buffer;
};
export type PrepareStreamResult = {
    mediaKey?: Buffer;
    encWriteStream?: Buffer | import("stream").Readable;
    bodyPath?: string;
    fileEncSha256?: Buffer;
    fileSha256?: Buffer;
    fileLength?: number;
    didSaveToTmpPath?: boolean;
    mac?: Buffer;
};
export type AnyObject = Record<string, unknown>;
/** generates all the keys required to encrypt/decrypt & sign a media message */
/**
 * Derive media keys (iv, cipherKey, macKey) from a media key buffer.
 * @param {Buffer | string} buffer
 * @param {string} mediaType
 */
/**
 * Derive media keys (iv, cipherKey, macKey) from a media key buffer.
 * @param {Buffer | string} buffer
 * @param {string} mediaType
 * @returns {Promise<MediaKeys>}
 */
export function getMediaKeys(buffer: Buffer | string, mediaType: string): Promise<MediaKeys>;
/**
 * Upload a file buffer to one of several fallback services and return a URL.
 * @param {Buffer} buffer
 * @param {{debug?: Function}} logger
 * @returns {Promise<string>}
 */
/**
 * Upload a file buffer to one of several fallback services and return a URL.
 * @param {Buffer} buffer
 * @param {{ debug?: Function }} logger
 * @returns {Promise<string>}
 */
export function uploadFile(buffer: Buffer, logger: {
    debug?: Function;
}): Promise<string>;
/**
 * Convert a remote video URL to a JPG using ezgif.com.
 * @param {string} videoUrl
 * @returns {Promise<string>}
 */
export function vid2jpg(videoUrl: string): Promise<string>;
/**
 * Get audio duration in seconds from a buffer, file path or readable stream
 * @param {Buffer|string|import('stream').Readable} buffer
 * @returns {Promise<number>}
 */
/**
 * Get audio duration in seconds from a file path, buffer, or stream.
 * @param {Buffer|string|import('stream').Readable} buffer
 * @returns {Promise<number>}
 */
export function getAudioDuration(buffer: Buffer | string | import("stream").Readable): Promise<number>;
/**
 * Compute a compact waveform (Uint8Array) for given audio buffer/stream/file
 * @param {Buffer|string|import('stream').Readable} buffer
 * @param {{ debug?: Function }} logger
 * @returns {Promise<Uint8Array|undefined>}
 */
/**
 * Generate a waveform for audio content.
 * @param {Buffer|string|import('stream').Readable} buffer
 * @param {{ debug?: Function }} logger
 * @returns {Promise<Uint8Array|undefined>}
 */
export function getAudioWaveform(buffer: Buffer | string | import("stream").Readable, logger: {
    debug?: Function;
}): Promise<Uint8Array | undefined>;
/** generates a thumbnail for a given media, if required */
/**
 * Generate a thumbnail for image/video files
 * @param {Buffer|string|import('stream').Readable} file
 * @param {string} mediaType
 * @param {{ logger?: any }} options
 * @returns {Promise<{ thumbnail?: string, originalImageDimensions?: { width?: number, height?: number } }>}
 */
/**
 * Generate a thumbnail for image/video files.
 * @param {Buffer|string|import('stream').Readable} file
 * @param {string} mediaType
 * @param {{ logger?: { debug?: (...args: any[]) => void } }} options
 * @returns {Promise<ThumbnailResult>}
 */
export function generateThumbnail(file: Buffer | string | import("stream").Readable, mediaType: string, options: {
    logger?: {
        debug?: (...args: any[]) => void;
    };
}): Promise<ThumbnailResult>;
export function extensionForMediaMessage(message: any): any;
/**
 * Returns the HKDF info key label for a given media type.
 * @param {string} type
 * @returns {string}
 */
export function hkdfInfoKey(type: string): string;
/**
 * Extracts video thumbnail using FFmpeg
 */
/**
 * Extract a video thumbnail buffer from a path using ffmpeg.
 * @param {string} videoPath
 * @param {string} [time]
 * @param {{ width: number }} [size]
 * @returns {Promise<Buffer>}
 */
export function extractVideoThumb(videoPath: string, time?: string, size?: {
    width: number;
}): Promise<Buffer>;
/**
 * Generate a small JPEG thumbnail for image data or file.
 * @param {Buffer|string|import('stream').Readable} bufferOrFilePath
 * @param {number} [width]
 * @returns {Promise<{ buffer: Buffer; original: { width?: number; height?: number } }>}
 */
export function extractImageThumb(bufferOrFilePath: Buffer | string | import("stream").Readable, width?: number): Promise<{
    buffer: Buffer;
    original: {
        width?: number;
        height?: number;
    };
}>;
export function encodeBase64EncodedStringForUpload(b64: any): string;
/**
 * Generate a WhatsApp profile picture buffer from a buffer, URL or stream.
 * @param {{ url?: string | URL; stream?: import('stream').Readable } | Buffer} mediaUpload
 * @returns {Promise<{ img: Buffer }>}
 */
export function generateProfilePicture(mediaUpload: {
    url?: string | URL;
    stream?: import("stream").Readable;
} | Buffer): Promise<{
    img: Buffer;
}>;
/** gets the SHA256 of the given media message */
export function mediaMessageSHA256B64(message: any): string;
/**
 * Convert a Buffer to a Readable stream
 * @param {Buffer} buffer
 * @returns {import('stream').Readable}
 */
/**
 * Convert a Buffer to a readable stream.
 * @param {Buffer} buffer
 * @returns {import('stream').Readable}
 */
export function toReadable(buffer: Buffer): import("stream").Readable;
/**
 * Consume a readable stream and return a Buffer
 * @param {AsyncIterable<Buffer>|import('stream').Readable} stream
 * @returns {Promise<Buffer>}
 */
/**
 * Convert a readable stream into a Buffer.
 * @param {AsyncIterable<Buffer>|import('stream').Readable} stream
 * @returns {Promise<Buffer>}
 */
export function toBuffer(stream: AsyncIterable<Buffer> | import("stream").Readable): Promise<Buffer>;
/**
 * Get a readable stream for a media item (buffer, readable, remote URL or file path)
 * @param {{ url?: string | URL; stream?: import('stream').Readable } | Buffer} item
 * @param {AnyObject} [opts]
 * @returns {Promise<{ stream: import('stream').Readable, type: string }>}
 */
/**
 * Normalize media input into a readable stream and a type tag.
 * @param {{ url?: string | URL; stream?: import('stream').Readable } | Buffer} item
 * @param {AnyObject} [opts]
 * @returns {Promise<StreamResult>}
 */
export function getStream(item: {
    url?: string | URL;
    stream?: import("stream").Readable;
} | Buffer, opts?: AnyObject): Promise<StreamResult>;
/**
 * Fetch a remote URL and return the response stream
 * @param {string|URL} url
 * @param {any} [options]
 * @returns {Promise<import('stream').Readable>}
 */
/**
 * Get a readable stream for a remote URL.
 * @param {string|URL} url
 * @param {AnyObject} [options]
 * @returns {Promise<import('stream').Readable>}
 */
export function getHttpStream(url: string | URL, options?: AnyObject): Promise<import("stream").Readable>;
/**
 * Prepare a media stream for upload: returns buffer/encWriteStream and metadata
 * @param {any} media
 * @param {string} mediaType
 * @param {{ logger?: any, saveOriginalFileIfRequired?: boolean, opts?: any }} [opts]
 */
/**
 * Prepare a media stream for upload, including metadata and temp file handling.
 * @param {Buffer|string|import('stream').Readable|AnyObject} media
 * @param {string} mediaType
 * @param {{ logger?: { debug?: (...args: any[]) => void; error?: (...args: any[]) => void }; saveOriginalFileIfRequired?: boolean; opts?: AnyObject }} [options]
 * @returns {Promise<PrepareStreamResult>}
 */
export function prepareStream(media: Buffer | string | import("stream").Readable | AnyObject, mediaType: string, { logger, saveOriginalFileIfRequired, opts }?: {
    logger?: {
        debug?: (...args: any[]) => void;
        error?: (...args: any[]) => void;
    };
    saveOriginalFileIfRequired?: boolean;
    opts?: AnyObject;
}): Promise<PrepareStreamResult>;
/**
 * Encrypt a media stream and return encryption metadata and an encrypted readable
 * @param {any} media
 * @param {string} mediaType
 * @param {{ logger?: any, saveOriginalFileIfRequired?: boolean, opts?: any }} [opts]
 */
/**
 * Encrypt a media payload and return an encrypted stream and metadata.
 * @param {Buffer|string|import('stream').Readable|AnyObject} media
 * @param {string} mediaType
 * @param {{ logger?: { debug?: (...args: any[]) => void; error?: (...args: any[]) => void }; saveOriginalFileIfRequired?: boolean; opts?: AnyObject }} [options]
 * @returns {Promise<PrepareStreamResult & { mediaKey: Buffer; mac: Buffer }>}
 */
export function encryptedStream(media: Buffer | string | import("stream").Readable | AnyObject, mediaType: string, { logger, saveOriginalFileIfRequired, opts }?: {
    logger?: {
        debug?: (...args: any[]) => void;
        error?: (...args: any[]) => void;
    };
    saveOriginalFileIfRequired?: boolean;
    opts?: AnyObject;
}): Promise<PrepareStreamResult & {
    mediaKey: Buffer;
    mac: Buffer;
}>;
export function getUrlFromDirectPath(directPath: any): string;
/**
 * Download and decrypt media content from a message.
 * @param {{ mediaKey: Buffer; directPath?: string; url?: string }} param0
 * @param {string} type
 * @param {{ startByte?: number; endByte?: number; options?: AnyObject }} [opts]
 * @returns {Promise<import('stream').Readable>}
 */
export function downloadContentFromMessage({ mediaKey, directPath, url }: {
    mediaKey: Buffer;
    directPath?: string;
    url?: string;
}, type: string, opts?: {
    startByte?: number;
    endByte?: number;
    options?: AnyObject;
}): Promise<import("stream").Readable>;
/**
 * Download and decrypt encrypted media content from WhatsApp.
 * @param {string} downloadUrl
 * @param {{ cipherKey: Buffer; iv: Buffer }} param1
 * @param {{ startByte?: number; endByte?: number; options?: AnyObject }} [param2]
 * @returns {Promise<import('stream').Readable>}
 */
export function downloadEncryptedContent(downloadUrl: string, { cipherKey, iv }: {
    cipherKey: Buffer;
    iv: Buffer;
}, { startByte, endByte, options }?: {
    startByte?: number;
    endByte?: number;
    options?: AnyObject;
}): Promise<import("stream").Readable>;
/**
 * Creates an uploader that uploads binary bodies to WhatsApp media hosts
 * @param {object} param0
 * @param {Function} refreshMediaConn
 */
/**
 * Create the media server upload helper used by WhatsApp media connection flows.
 * @param {{ customUploadHosts: Array<{ hostname: string; maxContentLengthBytes?: number }>; fetchAgent?: unknown; logger?: { debug?: (...args: any[]) => void; warn?: (...args: any[]) => void }; options?: AnyObject }} param0
 * @param {Function} refreshMediaConn
 * @returns {(stream: Buffer | import('stream').Readable, opts: MediaUploadOptions) => Promise<MediaUploadResult>}
 */
export function getWAUploadToServer({ customUploadHosts, fetchAgent, logger, options }: {
    customUploadHosts: Array<{
        hostname: string;
        maxContentLengthBytes?: number;
    }>;
    fetchAgent?: unknown;
    logger?: {
        debug?: (...args: any[]) => void;
        warn?: (...args: any[]) => void;
    };
    options?: AnyObject;
}, refreshMediaConn: Function): (stream: Buffer | import("stream").Readable, opts: MediaUploadOptions) => Promise<MediaUploadResult>;
/**
 * Encrypt a server-error media retry receipt
 * @param {any} key
 * @param {Buffer} mediaKey
 * @param {string} meId
 * @returns {Promise<any>}
 */
/**
 * Encrypt a media retry server error receipt.
 * @param {{ id: string; remoteJid?: string; fromMe?: boolean; participant?: string }} key
 * @param {Buffer} mediaKey
 * @param {string} meId
 * @returns {Promise<AnyObject>}
 */
export function encryptMediaRetryRequest(key: {
    id: string;
    remoteJid?: string;
    fromMe?: boolean;
    participant?: string;
}, mediaKey: Buffer, meId: string): Promise<AnyObject>;
/**
 * Decode a media retry XML/node into a structured event
 * @param {any} node
 * @returns {any}
 */
/**
 * Decode a media retry notification node into an event object.
 * @param {AnyObject} node
 * @returns {AnyObject}
 */
export function decodeMediaRetryNode(node: AnyObject): AnyObject;
/**
 * Decrypt media retry payload and parse MediaRetryNotification
 * @param {{ ciphertext: Buffer, iv: Buffer }} param0
 * @param {Buffer} mediaKey
 * @param {string} msgId
 * @returns {Promise<any>}
 */
/**
 * Decrypt the media retry payload and parse it as MediaRetryNotification.
 * @param {{ ciphertext: Buffer; iv: Buffer }} param0
 * @param {Buffer} mediaKey
 * @param {string} msgId
 * @returns {Promise<any>}
 */
export function decryptMediaRetryData({ ciphertext, iv }: {
    ciphertext: Buffer;
    iv: Buffer;
}, mediaKey: Buffer, msgId: string): Promise<any>;
/**
 * Map MediaRetryNotification result codes to HTTP status codes
 * @param {number} code
 * @returns {number}
 */
/**
 * Map a media retry result type to an HTTP status code.
 * @param {number} code
 * @returns {number}
 */
export function getStatusCodeForMediaRetry(code: number): number;
