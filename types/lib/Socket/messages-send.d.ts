export const __esModule: boolean;
export type AuthState = import("../Types").AuthState;
export type Logger = import("../Types").Logger;
export type WAMessage = import("../Types").WAMessage;
export type USyncQuery = import("../WAUSync").USyncQuery;
/**
 * @typedef {import('../Types').AuthState} AuthState
 * @typedef {import('../Types').Logger} Logger
 * @typedef {import('../Types').WAMessage} WAMessage
 * @typedef {import('../WAUSync').USyncQuery} USyncQuery
 *
 * @param {object} config
 * @param {Logger} [config.logger]
 * @param {number} [config.linkPreviewImageThumbnailWidth]
 * @param {boolean} [config.generateHighQualityLinkPreview]
 * @param {object} [config.options]
 * @param {function} [config.patchMessageBeforeSending]
 * @returns {import('./newsletter').NewsletterSocket & { authState: AuthState }}
 */
export function makeMessagesSocket(config: {
    logger?: Logger;
    linkPreviewImageThumbnailWidth?: number;
    generateHighQualityLinkPreview?: boolean;
    options?: object;
    patchMessageBeforeSending?: Function;
}): import("./newsletter").NewsletterSocket & {
    authState: AuthState;
};
