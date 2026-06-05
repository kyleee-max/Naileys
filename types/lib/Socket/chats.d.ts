export const __esModule: boolean;
/**
 * Creates the chats socket which handles messaging, privacy, profile and
 * history sync related features.
 * @param {import('../Types').BaileysConfig} config
 * @returns {import('./usync').USyncSocket & { fetchPrivacySettings: Function }}
 */
export function makeChatsSocket(config: import("../Types").BaileysConfig): import("./usync").USyncSocket & {
    fetchPrivacySettings: Function;
};
