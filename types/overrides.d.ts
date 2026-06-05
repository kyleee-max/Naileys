// Core minimal overrides to improve type inference for key APIs
/** Binary node representing a WA protocol node */
interface BinaryNode {
  tag: string;
  attrs: Record<string, string>;
  content?: (Buffer | string | BinaryNode)[] | Buffer | string;
}

/** Simplified WA message structure */
interface WAMessageKey {
  remoteJid?: string;
  fromMe?: boolean;
  id?: string;
  participant?: string;
}

interface WAMessage {
  key?: WAMessageKey;
  message?: any; // detailed message types live in WAProto
  pushName?: string;
  status?: number;
}

interface AuthState {
  creds: {
    me?: { id?: string } & Record<string, any>;
  } & Record<string, any>;
  keys?: Record<string, any>;
}

interface MakeWASocketConfig {
  auth?: AuthState;
  printQRInTerminal?: boolean;
  browser?: [string, string, string];
  logger?: any;
}

/** Minimal socket interface used across the library */
interface WASocket {
  ev: {
    on: (event: string, listener: (...args: any[]) => void) => void;
    emit?: (event: string, ...args: any[]) => void;
  };
  authState?: AuthState;
  sendMessage(jid: string, content: any, options?: any): Promise<{ key: WAMessageKey }>; 
  query?: (node: BinaryNode) => Promise<BinaryNode>;
  logout?(): Promise<void>;
}

/** WA-USync types */
interface USyncUser {
  id?: string | number;
  lid?: string | number;
  phone?: string;
  personaId?: string | number;
  [k: string]: any;
}

interface USyncQueryResult {
  list: any[];
  sideList?: any[];
}

declare module 'naileys' {
  export function makeWASocket(config?: Partial<MakeWASocketConfig>): WASocket;
  export const proto: any;
  export type { WAMessage, WAMessageKey, BinaryNode, AuthState, USyncUser, USyncQueryResult };
  export default makeWASocket;
}

// Additional overrides to reduce `any` in generated declarations
type MediaType = 'image' | 'video' | 'audio' | 'sticker' | 'document' | 'product-catalog-image' | string;

interface MediaUploadResult {
  mediaUrl?: string;
  directPath?: string;
  handle?: string | undefined;
}

interface MediaUploadOptions {
  fileEncSha256B64?: string;
  mediaType?: MediaType;
  timeoutMs?: number;
}

type BufferLike = Buffer | Uint8Array;

/** A download stream returned by media download helpers */
type MediaDownloadStream = AsyncIterable<Buffer> | NodeJS.ReadableStream;

interface MediaRepository {
  decryptMessage(opts: { jid: string; type: string; ciphertext: BufferLike }): Promise<Buffer>;
  decryptGroupMessage(opts: { group: string; authorJid?: string; msg: BufferLike }): Promise<Buffer>;
  processSenderKeyDistributionMessage(opts: { authorJid?: string; item: any }): Promise<void>;
  /** generic get/set access for keys */
  keys?: { get: (key: string, ids?: string[]) => Promise<Record<string, any>> };
}

interface Logger {
  debug?(...args: any[]): void;
  info?(...args: any[]): void;
  warn?(...args: any[]): void;
  error?(...args: any[]): void;
  child?(meta: any): Logger;
}

// augment WASocket with common helpers seen across the project
interface WASocket {
  logger?: Logger;
  authState?: AuthState;
  signalRepository?: any;
  signalKey?: any;
  executeUSyncQuery?: (q: any) => Promise<USyncQueryResult>;
  upload?: (stream: NodeJS.ReadableStream | Buffer, opts?: MediaUploadOptions) => Promise<MediaUploadResult>;
  query?: (node: BinaryNode) => Promise<BinaryNode>;
}
