import { Connection } from "@solana/web3.js";
import { PumpSwap } from "./IDL/index.js";
import { Program, Provider } from "@coral-xyz/anchor";
import { PumpSwapEventType } from "./types.js";
export declare class PumpSwapSDK {
    readonly program: Program<PumpSwap>;
    readonly connection: Connection;
    constructor(provider?: Provider);
    addEventListener<T extends PumpSwapEventType>(eventType: T, callback: (event: any, slot: number, signature: string) => void): number;
    removeEventListener(eventId: number): void;
}
//# sourceMappingURL=pumpswap.d.ts.map