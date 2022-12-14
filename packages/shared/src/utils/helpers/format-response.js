import { getUnsupportedContracts } from '../constants';
import { getSymbolDisplayName } from './active-symbols';
import { getMarketInformation } from './market-underlying';

const isUnSupportedContract = portfolio_pos =>
    !!getUnsupportedContracts()[portfolio_pos.contract_type] || // check unsupported contract type
    !!portfolio_pos.is_forward_starting; // for forward start contracts

export const formatPortfolioPosition = (portfolio_pos, active_symbols = [], indicative) => {
    const purchase = parseFloat(portfolio_pos.buy_price);
    const payout = parseFloat(portfolio_pos.payout);
    const display_name = getSymbolDisplayName(active_symbols, getMarketInformation(portfolio_pos.shortcode).underlying);
    const transaction_id =
        portfolio_pos.transaction_id || (portfolio_pos.transaction_ids && portfolio_pos.transaction_ids.buy);

    return {
        contract_info: portfolio_pos,
        details: portfolio_pos.longcode.replace(/\n/g, '<br />'),
        display_name,
        id: portfolio_pos.contract_id,
        indicative: isNaN(indicative) || !indicative ? 0 : indicative,
        payout,
        purchase,
        reference: +transaction_id,
        type: portfolio_pos.contract_type,
        is_unsupported: isUnSupportedContract(portfolio_pos),
        contract_update: portfolio_pos.limit_order,
    };
};
