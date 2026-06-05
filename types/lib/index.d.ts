export const __esModule: boolean;
export const proto: any;
export type WASocketFactory = (config: Partial<MakeWASocketConfig & {
    auth?: AuthState;
}>) => import("./Socket").WASocket;
export type WASocket = import("./Types").WASocket;
