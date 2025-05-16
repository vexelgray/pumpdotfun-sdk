import { BuyEvent, CompleteEvent, CreateConfigEvent, CreateEvent, CreatePoolEvent, DepositEvent, DisableEvent, SellEvent, SetParamsEvent, TradeEvent, UpdateAdminEvent, UpdateFeeConfigEvent, ExtendAccountEvent, WithdrawEvent } from "./types.js";
export declare function toCreateEvent(event: CreateEvent): CreateEvent;
export declare function toCompleteEvent(event: CompleteEvent): CompleteEvent;
export declare function toTradeEvent(event: TradeEvent): TradeEvent;
export declare function toSetParamsEvent(event: SetParamsEvent): SetParamsEvent;
export declare function toBuyEvent(event: BuyEvent): BuyEvent;
export declare function toCreateConfigEvent(event: CreateConfigEvent): CreateConfigEvent;
export declare function toCreatePoolEvent(event: CreatePoolEvent): CreatePoolEvent;
export declare function toDepositEvent(event: DepositEvent): DepositEvent;
export declare function toDisableEvent(event: DisableEvent): DisableEvent;
export declare function toExtendAccountEvent(event: ExtendAccountEvent): ExtendAccountEvent;
export declare function toUpdateAdminEvent(event: UpdateAdminEvent): UpdateAdminEvent;
export declare function toUpdateFeeConfigEvent(event: UpdateFeeConfigEvent): UpdateFeeConfigEvent;
export declare function toWithdrawEvent(event: WithdrawEvent): WithdrawEvent;
export declare function toSellEvent(event: SellEvent): SellEvent;
//# sourceMappingURL=events.d.ts.map