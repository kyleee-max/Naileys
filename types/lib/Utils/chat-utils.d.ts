export const __esModule: boolean;
export type LTState = {
    version: number;
    hash: Buffer;
    indexValueMap: Record<string, {
        valueMac: Buffer;
    }>;
};
export type SyncdPatchParams = {
    type: string;
    index: unknown;
    syncAction: unknown;
    apiVersion: number;
    operation: number;
};
export type AppStateKeyFetcher = (keyId: string) => Promise<unknown>;
export type MutationCallback = (data: unknown) => void;
export type AnyObject = Record<string, unknown>;
/**
 * Encode a syncd patch with a given state and app state key.
 * @param {SyncdPatchParams} params
 * @param {string} myAppStateKeyId
 * @param {LTState} state
 * @param {AppStateKeyFetcher} getAppStateSyncKey
 * @returns {Promise<{ patch: unknown, state: LTState }>}
 */
export function encodeSyncdPatch({ type, index, syncAction, apiVersion, operation }: SyncdPatchParams, myAppStateKeyId: string, state: LTState, getAppStateSyncKey: AppStateKeyFetcher): Promise<{
    patch: unknown;
    state: LTState;
}>;
/**
 * Decode one or more SyncdMutation records and run the callback for each one.
 * @param {unknown[]} msgMutations
 * @param {LTState} initialState
 * @param {AppStateKeyFetcher} getAppStateSyncKey
 * @param {MutationCallback} onMutation
 * @param {boolean} validateMacs
 * @returns {Promise<LTState>}
 */
export function decodeSyncdMutations(msgMutations: unknown[], initialState: LTState, getAppStateSyncKey: AppStateKeyFetcher, onMutation: MutationCallback, validateMacs: boolean): Promise<LTState>;
/**
 * Decode a SyncdPatch and return the derived state.
 * @param {unknown} msg
 * @param {string} name
 * @param {LTState} initialState
 * @param {AppStateKeyFetcher} getAppStateSyncKey
 * @param {MutationCallback} onMutation
 * @param {boolean} validateMacs
 * @returns {Promise<LTState>}
 */
export function decodeSyncdPatch(msg: unknown, name: string, initialState: LTState, getAppStateSyncKey: AppStateKeyFetcher, onMutation: MutationCallback, validateMacs: boolean): Promise<LTState>;
/**
 * Extract Syncd patches and snapshot metadata from a binary node result.
 * @param {unknown} result
 * @param {unknown} options
 * @returns {Promise<Record<string, { patches: unknown[], hasMorePatches: boolean, snapshot?: unknown }>>}
 */
export function extractSyncdPatches(result: unknown, options: unknown): Promise<Record<string, {
    patches: unknown[];
    hasMorePatches: boolean;
    snapshot?: unknown;
}>>;
/**
 * Download external blob reference data from WhatsApp.
 * @param {AnyObject} blob
 * @param {AnyObject} options
 * @returns {Promise<Buffer>}
 */
export function downloadExternalBlob(blob: AnyObject, options: AnyObject): Promise<Buffer>;
/**
 * Download and decode an external patch referenced by WhatsApp.
 * @param {AnyObject} blob
 * @param {AnyObject} options
 * @returns {Promise<AnyObject>}
 */
export function downloadExternalPatch(blob: AnyObject, options: AnyObject): Promise<AnyObject>;
/**
 * Decode a SyncdSnapshot and return the decoded state and mutation map.
 * @param {string} name
 * @param {AnyObject} snapshot
 * @param {AppStateKeyFetcher} getAppStateSyncKey
 * @param {number | undefined} minimumVersionNumber
 * @param {boolean} [validateMacs=true]
 * @returns {Promise<{ state: LTState; mutationMap: Record<string, unknown> }>}
 */
export function decodeSyncdSnapshot(name: string, snapshot: AnyObject, getAppStateSyncKey: AppStateKeyFetcher, minimumVersionNumber: number | undefined, validateMacs?: boolean): Promise<{
    state: LTState;
    mutationMap: Record<string, unknown>;
}>;
/**
 * Decode a list of syncd patches into state.
 * @param {string} name
 * @param {AnyObject[]} syncds
 * @param {LTState} initial
 * @param {AppStateKeyFetcher} getAppStateSyncKey
 * @param {AnyObject} options
 * @param {number | undefined} minimumVersionNumber
 * @param {AnyObject} logger
 * @param {boolean} [validateMacs=true]
 * @returns {Promise<{ state: LTState; mutationMap: Record<string, unknown> }>}
 */
export function decodePatches(name: string, syncds: AnyObject[], initial: LTState, getAppStateSyncKey: AppStateKeyFetcher, options: AnyObject, minimumVersionNumber: number | undefined, logger: AnyObject, validateMacs?: boolean): Promise<{
    state: LTState;
    mutationMap: Record<string, unknown>;
}>;
/**
 * Convert a chat modification object into a sync patch.
 * @param {AnyObject} mod
 * @param {string} jid
 * @returns {AnyObject}
 */
export function chatModificationToAppPatch(mod: AnyObject, jid: string): AnyObject;
/**
 * Process a WhatsApp sync action and emit the appropriate updates.
 * @param {AnyObject} syncAction
 * @param {import('events').EventEmitter} ev
 * @param {AnyObject} me
 * @param {AnyObject} initialSyncOpts
 * @param {AnyObject} logger
 */
export function processSyncAction(syncAction: AnyObject, ev: import("events").EventEmitter, me: AnyObject, initialSyncOpts: AnyObject, logger: AnyObject): void;
