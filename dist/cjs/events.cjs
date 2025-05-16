'use strict';

var web3_js = require('@solana/web3.js');

function toCreateEvent(event) {
    return {
        name: event.name,
        symbol: event.symbol,
        uri: event.uri,
        mint: new web3_js.PublicKey(event.mint),
        bondingCurve: new web3_js.PublicKey(event.bondingCurve),
        user: new web3_js.PublicKey(event.user),
    };
}
function toCompleteEvent(event) {
    return {
        user: new web3_js.PublicKey(event.user),
        mint: new web3_js.PublicKey(event.mint),
        bondingCurve: new web3_js.PublicKey(event.bondingCurve),
        timestamp: Number(event.timestamp),
    };
}
function toTradeEvent(event) {
    return {
        mint: new web3_js.PublicKey(event.mint),
        solAmount: BigInt(event.solAmount),
        tokenAmount: BigInt(event.tokenAmount),
        isBuy: event.isBuy,
        user: new web3_js.PublicKey(event.user),
        timestamp: Number(event.timestamp),
        virtualSolReserves: BigInt(event.virtualSolReserves),
        virtualTokenReserves: BigInt(event.virtualTokenReserves),
        realSolReserves: BigInt(event.realSolReserves),
        realTokenReserves: BigInt(event.realTokenReserves),
    };
}
function toSetParamsEvent(event) {
    return {
        feeRecipient: new web3_js.PublicKey(event.feeRecipient),
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
        pool: new web3_js.PublicKey(event.pool),
        user: new web3_js.PublicKey(event.user),
        userBaseTokenAccount: new web3_js.PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new web3_js.PublicKey(event.userQuoteTokenAccount),
        protocolFeeRecipient: new web3_js.PublicKey(event.protocolFeeRecipient),
        protocolFeeRecipientTokenAccount: new web3_js.PublicKey(event.protocolFeeRecipientTokenAccount),
    };
}
function toCreateConfigEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new web3_js.PublicKey(event.admin),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFeeRecipients: event.protocolFeeRecipients.map((recipient) => new web3_js.PublicKey(recipient)),
    };
}
function toCreatePoolEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        index: Number(event.index),
        creator: new web3_js.PublicKey(event.creator),
        baseMint: new web3_js.PublicKey(event.baseMint),
        quoteMint: new web3_js.PublicKey(event.quoteMint),
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
        pool: new web3_js.PublicKey(event.pool),
        lpMint: new web3_js.PublicKey(event.lpMint),
        userBaseTokenAccount: new web3_js.PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new web3_js.PublicKey(event.userQuoteTokenAccount),
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
        pool: new web3_js.PublicKey(event.pool),
        user: new web3_js.PublicKey(event.user),
        userBaseTokenAccount: new web3_js.PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new web3_js.PublicKey(event.userQuoteTokenAccount),
        userPoolTokenAccount: new web3_js.PublicKey(event.userPoolTokenAccount),
    };
}
function toDisableEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new web3_js.PublicKey(event.admin),
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
        account: new web3_js.PublicKey(event.account),
        user: new web3_js.PublicKey(event.user),
        currentSize: BigInt(event.currentSize),
        newSize: BigInt(event.newSize),
    };
}
function toUpdateAdminEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new web3_js.PublicKey(event.admin),
        newAdmin: new web3_js.PublicKey(event.newAdmin),
    };
}
function toUpdateFeeConfigEvent(event) {
    return {
        timestamp: Number(event.timestamp),
        admin: new web3_js.PublicKey(event.admin),
        lpFeeBasisPoints: BigInt(event.lpFeeBasisPoints),
        protocolFeeBasisPoints: BigInt(event.protocolFeeBasisPoints),
        protocolFeeRecipients: event.protocolFeeRecipients.map((recipient) => new web3_js.PublicKey(recipient)),
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
        pool: new web3_js.PublicKey(event.pool),
        user: new web3_js.PublicKey(event.user),
        userBaseTokenAccount: new web3_js.PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new web3_js.PublicKey(event.userQuoteTokenAccount),
        userPoolTokenAccount: new web3_js.PublicKey(event.userPoolTokenAccount),
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
        pool: new web3_js.PublicKey(event.pool),
        user: new web3_js.PublicKey(event.user),
        userBaseTokenAccount: new web3_js.PublicKey(event.userBaseTokenAccount),
        userQuoteTokenAccount: new web3_js.PublicKey(event.userQuoteTokenAccount),
        protocolFeeRecipient: new web3_js.PublicKey(event.protocolFeeRecipient),
        protocolFeeRecipientTokenAccount: new web3_js.PublicKey(event.protocolFeeRecipientTokenAccount),
    };
}

exports.toBuyEvent = toBuyEvent;
exports.toCompleteEvent = toCompleteEvent;
exports.toCreateConfigEvent = toCreateConfigEvent;
exports.toCreateEvent = toCreateEvent;
exports.toCreatePoolEvent = toCreatePoolEvent;
exports.toDepositEvent = toDepositEvent;
exports.toDisableEvent = toDisableEvent;
exports.toExtendAccountEvent = toExtendAccountEvent;
exports.toSellEvent = toSellEvent;
exports.toSetParamsEvent = toSetParamsEvent;
exports.toTradeEvent = toTradeEvent;
exports.toUpdateAdminEvent = toUpdateAdminEvent;
exports.toUpdateFeeConfigEvent = toUpdateFeeConfigEvent;
exports.toWithdrawEvent = toWithdrawEvent;
//# sourceMappingURL=events.cjs.map
