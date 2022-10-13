import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { getLanguage } from '@deriv/translations';
import { routes, WS } from '@deriv/shared';
import { Loading } from '@deriv/components';
import P2P from '@deriv/p2p';
import { connect } from 'Stores/connect';
import { get, init, timePromise } from 'Utils/server_time';
import { TClientStore, TCommonStore, TNotificationStore, TRootStore, TUiStore } from 'Types';

type TLocalCurrencyConfig = {
    currency: string;
    decimal_places: number;
};

type TP2PCashierProps = RouteComponentProps & {
    addNotificationMessage: TNotificationStore['addNotificationMessage'];
    balance: TClientStore['balance'];
    currency: TClientStore['currency'];
    current_focus: TUiStore['current_focus'];
    filterNotificationMessages: TNotificationStore['filterNotificationMessages'];
    history: History;
    is_dark_mode_on: TUiStore['is_dark_mode_on'];
    is_logging_in: TClientStore['is_logging_in'];
    is_mobile: TUiStore['is_mobile'];
    is_virtual: TClientStore['is_virtual'];
    local_currency_config: TLocalCurrencyConfig;
    location: {
        search: string;
        hash: string;
    };
    loginid: TClientStore['loginid'];
    Notifications: TUiStore['notification_messages_ui'];
    platform: TCommonStore['platform'];
    refreshNotifications: TNotificationStore['refreshNotifications'];
    removeNotificationByKey: TNotificationStore['removeNotificationByKey'];
    removeNotificationMessage: TNotificationStore['removeNotificationMessage'];
    residence: TClientStore['residence'];
    setCurrentFocus: TUiStore['setCurrentFocus'];
    // TODO: replace setNotificationCount and setOnRemount types when cashier.general_store will be typed
    setNotificationCount: (value: number) => void;
    setOnRemount: (func: () => void) => void;
};

/* P2P will use the same websocket connection as Deriv/Binary, we need to pass it as a prop */
const P2PCashier = ({
    addNotificationMessage,
    currency,
    current_focus,
    filterNotificationMessages,
    history,
    is_dark_mode_on,
    is_logging_in,
    is_mobile,
    is_virtual,
    local_currency_config,
    location,
    loginid,
    Notifications,
    platform,
    refreshNotifications,
    removeNotificationByKey,
    removeNotificationMessage,
    residence,
    setNotificationCount,
    setCurrentFocus,
    balance,
    setOnRemount,
}: TP2PCashierProps) => {
    const [order_id, setOrderId] = React.useState<string | null>(null);
    const [action_param, setActionParam] = React.useState<string | null>();
    const [code_param, setCodeParam] = React.useState<string | null>();

    const server_time = {
        get,
        init,
        timePromise,
    };

    const setQueryOrder = React.useCallback(
        (input_order_id: string | null) => {
            const current_query_params = new URLSearchParams(location.search);

            if (is_mobile) {
                current_query_params.delete('action');
                current_query_params.delete('code');
            }

            if (current_query_params.has('order_id') || current_query_params.has('order')) {
                current_query_params.delete('order');
                current_query_params.delete('order_id');
            }

            if (input_order_id) {
                current_query_params.append('order', input_order_id);
            }

            if (!input_order_id) {
                history.replace({
                    search: '',
                    hash: location.hash,
                });

                setOrderId(null);
            } else if (order_id !== input_order_id) {
                // Changing query params
                history.push({
                    pathname: routes.cashier_p2p,
                    search: current_query_params.toString(),
                    hash: location.hash,
                });

                setOrderId(input_order_id);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [history, location.hash, location.search]
    );

    React.useEffect(() => {
        const url_params = new URLSearchParams(location.search);
        let passed_order_id;

        setActionParam(url_params.get('action'));
        if (is_mobile) {
            setCodeParam(localStorage.getItem('verification_code.p2p_order_confirm'));
        } else if (!code_param) {
            if (url_params.has('code')) {
                setCodeParam(url_params.get('code'));
            } else if (localStorage.getItem('verification_code.p2p_order_confirm')) {
                setCodeParam(localStorage.getItem('verification_code.p2p_order_confirm'));
            }
        }

        // Different emails give us different params (order / order_id),
        // don't remove order_id since it's consistent for mobile and web for 2FA
        if (url_params.has('order_id')) {
            passed_order_id = url_params.get('order_id');
        } else if (url_params.has('order')) {
            passed_order_id = url_params.get('order');
        }

        if (passed_order_id) {
            setQueryOrder(passed_order_id);
        }

        return () => setQueryOrder(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setQueryOrder]);

    if (is_logging_in) {
        return <Loading is_fullscreen />;
    }

    return (
        <P2P
            addNotificationMessage={addNotificationMessage}
            balance={balance}
            client={{ currency, local_currency_config, is_virtual, residence, loginid }}
            current_focus={current_focus}
            filterNotificationMessages={filterNotificationMessages}
            history={history}
            is_dark_mode_on={is_dark_mode_on}
            is_mobile={is_mobile}
            lang={getLanguage()}
            modal_root_id='modal_root'
            order_id={order_id}
            platform={platform}
            Notifications={Notifications}
            poi_url={routes.proof_of_identity}
            refreshNotifications={refreshNotifications}
            removeNotificationByKey={removeNotificationByKey}
            removeNotificationMessage={removeNotificationMessage}
            server_time={server_time}
            setCurrentFocus={setCurrentFocus}
            setNotificationCount={setNotificationCount}
            setOrderId={setQueryOrder}
            setOnRemount={setOnRemount}
            should_show_verification={/verification/.test(location.hash)}
            verification_action={action_param}
            verification_code={code_param}
            websocket_api={WS}
        />
    );
};

export default connect(({ client, common, modules, notifications, ui }: TRootStore) => ({
    addNotificationMessage: notifications.addNotificationMessage,
    balance: client.balance,
    currency: client.currency,
    filterNotificationMessages: notifications.filterNotificationMessages,
    local_currency_config: client.local_currency_config,
    loginid: client.loginid,
    is_dark_mode_on: ui.is_dark_mode_on,
    is_logging_in: client.is_logging_in,
    is_virtual: client.is_virtual,
    Notifications: ui.notification_messages_ui,
    platform: common.platform,
    refreshNotifications: notifications.refreshNotifications,
    removeNotificationByKey: notifications.removeNotificationByKey,
    removeNotificationMessage: notifications.removeNotificationMessage,
    residence: client.residence,
    setNotificationCount: modules.cashier.general_store.setNotificationCount,
    setOnRemount: modules.cashier.general_store.setOnRemount,
    is_mobile: ui.is_mobile,
    setCurrentFocus: ui.setCurrentFocus,
    current_focus: ui.current_focus,
}))(withRouter(P2PCashier));