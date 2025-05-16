import { PublicKey } from '@solana/web3.js';

function toCreateEvent(event) {
    return {
        name: event.name,
        symbol: event.symbol,
        uri: event.uri,
        mint: new PublicKey(event.mint),
        bondingCurve: new PublicKey(event.bondingCurve),
        user: new PublicKey(event.user),
    };
}
function toCompleteEvent(event) {
    return {
        user: new PublicKey(event.user),
        mint: new PublicKey(event.mint),
        bondingCurve: new PublicKey(event.bondingCurve),
        timestamp: Number(event.timestamp),
    };
}
function toTradeEvent(event) {
    return {
        mint: new PublicKey(event.mint),
        solAmount: BigInt(event.solAmount),
        tokenAmount: BigInt(event.tokenAmount),
        isBuy: event.isBuy,
        user: new PublicKey(event.user),
        timestamp: Number(event.timestamp),
        virtualSolReserves: BigInt(event.virtualSolReserves),
        virtualTokenReserves: BigInt(event.virtualTokenReserves),
        realSolReserves: BigInt(event.realSolReserves),
        realTokenReserves: BigInt(event.realTokenReserves),
    };
}
function toSetParamsEvent(event) {
    return {
        feeRecipient: new PublicKey(event.feeRecipient),
        initialVirtualTokenReserves: BigInt(event.initialVirtualTokenReserves),
        initialVirtualSolReserves: BigInt(event.initialVirtualSolReserves),
        initialRealTokenReserves: BigInt(event.initialRealTokenReserves),
        tokenTotalSupply: BigInt(event.tokenTotalSupply),
        feeBasisPoints: BigInt(event.feeBasisPoints),
    };
}
function toBuyEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        baseAmountOut: BigInt(event.baseAmountOut),
        maxQuoteAmountIn: BigInt(event.maxQuoteAmountIn),
        userBaseTokenReserves: BigInt(event.userBaseTokenReserves),
        userQuoteTokenReserves: BigInt(event.userQuoteTokenReserves),
        poolBaseTokenReserves: BigInt(event.poolBaseTokenReserves),
        poolQuoteTokenReserves: BigInt(event.poolQuoteTokenReserves),
        quoteAmountIn: BigInt(event.quoteAmountIn),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        lpFee: BigInt(event.lpFee),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFee: BigInt(event.protocolFee),
        quoteAmountInWithLpFee: BigInt(event.quoteAmountInWithLpFee),
        userQuoteAmountIn: BigInt(event.userQuoteAmountIn),
        pool: new PublicKey(event.pool),
        user: new PublicKey(event.user),
        userBaseTokenAccount: new PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new PublicKey(event.userQuoteTokenAccount),
        protocolFeeRecipient: new PublicKey(event.protocolFeeRecipient),
        protocolFeeRecipientTokenAccount: new PublicKey(event.protocolFeeRecipientTokenAccount),
    };
}
function toCreateConfigEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new PublicKey(event.admin),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFeeRecipients: event.protocolFeeRecipients.map((recipient) => new PublicKey(recipient)),
    };
}
function toCreatePoolEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        index: Number(event.index),
        creator: new PublicKey(event.creator),
        baseMint: new PublicKey(event.baseMint),
        quoteMint: new PublicKey(event.quoteMint),
        baseMintDecimals: Number(event.baseMintDecimals),
        quoteMintDecimals: Number(event.quoteMintDecimals),
        baseAmountIn: BigInt(event.baseAmountIn),
        quoteAmountIn: BigInt(event.quoteAmountIn),
        poolBaseAmount: BigInt(event.poolBaseAmount),
        poolQuoteAmount: BigInt(event.poolQuoteAmount),
        minimumLiquidity: BigInt(event.minimumLiquidity),
        initialLiquidity: BigInt(event.initialLiquidity),
        lpTokenAmountOut: BigInt(event.lpTokenAmountOut),
        poolBump: Number(event.poolBump),
        pool: new PublicKey(event.pool),
        lpMint: new PublicKey(event.lpMint),
        userBaseTokenAccount: new PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new PublicKey(event.userQuoteTokenAccount),
    };
}
function toDepositEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        lpTokenAmountOut: BigInt(event.lpTokenAmountOut),
        maxBaseAmountIn: BigInt(event.maxBaseAmountIn),
        maxQuoteAmountIn: BigInt(event.maxQuoteAmountIn),
        userBaseTokenReserves: BigInt(event.userBaseTokenReserves),
        userQuoteTokenReserves: BigInt(event.userQuoteTokenReserves),
        poolBaseTokenReserves: BigInt(event.poolBaseTokenReserves),
        poolQuoteTokenReserves: BigInt(event.poolQuoteTokenReserves),
        baseAmountIn: BigInt(event.baseAmountIn),
        quoteAmountIn: BigInt(event.quoteAmountIn),
        lpMintSupply: BigInt(event.lpMintSupply),
        pool: new PublicKey(event.pool),
        user: new PublicKey(event.user),
        userBaseTokenAccount: new PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new PublicKey(event.userQuoteTokenAccount),
        userPoolTokenAccount: new PublicKey(event.userPoolTokenAccount),
    };
}
function toDisableEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new PublicKey(event.admin),
        disableCreatePool: event.disableCreatePool,
        disableDeposit: event.disableDeposit,
        disableWithdraw: event.disableWithdraw,
        disableBuy: event.disableBuy,
        disableSell: event.disableSell,
    };
}
function toExtendAccountEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        account: new PublicKey(event.account),
        user: new PublicKey(event.user),
        currentSize: BigInt(event.currentSize),
        newSize: BigInt(event.newSize),
    };
}
function toUpdateAdminEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new PublicKey(event.admin),
        newAdmin: new PublicKey(event.newAdmin),
    };
}
function toUpdateFeeConfigEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new PublicKey(event.admin),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFeeRecipients: event.protocolFeeRecipients.map((recipient) => new PublicKey(recipient)),
    };
}
function toWithdrawEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        lpTokenAmountIn: BigInt(event.lpTokenAmountIn),
        minBaseAmountOut: BigInt(event.minBaseAmountOut),
        minQuoteAmountOut: BigInt(event.minQuoteAmountOut),
        userBaseTokenReserves: BigInt(event.userBaseTokenReserves),
        userQuoteTokenReserves: BigInt(event.userQuoteTokenReserves),
        poolBaseTokenReserves: BigInt(event.poolBaseTokenReserves),
        poolQuoteTokenReserves: BigInt(event.poolQuoteTokenReserves),
        baseAmountOut: BigInt(event.baseAmountOut),
        quoteAmountOut: BigInt(event.quoteAmountOut),
        lpMintSupply: BigInt(event.lpMintSupply),
        pool: new PublicKey(event.pool),
        user: new PublicKey(event.user),
        userBaseTokenAccount: new PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new PublicKey(event.userQuoteTokenAccount),
        userPoolTokenAccount: new PublicKey(event.userPoolTokenAccount),
    };
}
function toSellEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        baseAmountIn: BigInt(event.baseAmountIn),
        minQuoteAmountOut: BigInt(event.minQuoteAmountOut),
        userBaseTokenReserves: BigInt(event.userBaseTokenReserves),
        userQuoteTokenReserves: BigInt(event.userQuoteTokenReserves),
        poolBaseTokenReserves: BigInt(event.poolBaseTokenReserves),
        poolQuoteTokenReserves: BigInt(event.poolQuoteTokenReserves),
        quoteAmountOut: BigInt(event.quoteAmountOut),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        lpFee: BigInt(event.lpFee),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFee: BigInt(event.protocolFee),
        quoteAmountOutWithoutLpFee: BigInt(event.quoteAmountOutWithoutLpFee),
        userQuoteAmountOut: BigInt(event.userQuoteAmountOut),
        pool: new PublicKey(event.pool),
        user: new PublicKey(event.user),
        userBaseTokenAccount: new PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new PublicKey(event.userQuoteTokenAccount),
        protocolFeeRecipient: new PublicKey(event.protocolFeeRecipient),
        protocolFeeRecipientTokenAccount: new PublicKey(event.protocolFeeRecipientTokenAccount),
    };
}

export { toBuyEvent, toCompleteEvent, toCreateConfigEvent, toCreateEvent, toCreatePoolEvent, toDepositEvent, toDisableEvent, toExtendAccountEvent, toSellEvent, toSetParamsEvent, toTradeEvent, toUpdateAdminEvent, toUpdateFeeConfigEvent, toWithdrawEvent };
//# sourceMappingURL=events.mjs.map
