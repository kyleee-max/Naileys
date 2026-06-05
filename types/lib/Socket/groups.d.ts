export const __esModule: boolean;
/**
 * Create a groups socket which augments the base chats socket with group
 * related helpers (querying metadata, creating groups, updating participants, etc).
 * @param {import('../Types').BaileysConfig} config
 * @returns {import('./chats').ChatsSocket & { groupQuery: Function, groupMetadata: Function }}
 */
export function makeGroupsSocket(config: import("../Types").BaileysConfig): import("./chats").ChatsSocket & {
    groupQuery: Function;
    groupMetadata: Function;
};
/**
 * Extract useful group metadata from the returned binary node
 * @param {any} result
 * @returns {import('../Types').GroupMetadata}
 */
export function extractGroupMetadata(result: any): import("../Types").GroupMetadata;
