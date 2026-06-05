export const __esModule: boolean;
/**
 * Create a newsletter socket which provides newsletter-specific APIs
 * (subscribe, fetch messages, react, follow/unfollow, metadata).
 * @param {import('../Types').BaileysConfig} config
 * @returns {import('./groups').GroupsSocket & { subscribeNewsletterUpdates: Function }}
 */
export function makeNewsletterSocket(config: import("../Types").BaileysConfig): import("./groups").GroupsSocket & {
    subscribeNewsletterUpdates: Function;
};
/**
 * Parse newsletter metadata from a w:mex response node
 * @param {any} node
 * @param {boolean} isCreate
 */
export function extractNewsletterMetadata(node: any, isCreate: boolean): {
    id: any;
    state: any;
    creation_time: number;
    name: any;
    nameTime: number;
    description: any;
    descriptionTime: number;
    invite: any;
    handle: any;
    picture: any;
    preview: any;
    reaction_codes: any;
    subscribers: number;
    verification: any;
    viewer_metadata: any;
};
