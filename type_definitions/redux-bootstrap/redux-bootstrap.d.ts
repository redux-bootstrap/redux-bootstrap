// Type definitions for react-bootstrap v1.0.0
// Project: https://github.com/remojansen/redux-bootstrap
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />
/// <reference path="../react-router-redux/react-router-redux.d.ts" />

declare module "redux-bootstrap" {

    interface BoostrapOptions {
        routes: JSX.Element;
        reducers: ReducersOption;
        createHistory?: HistoryModule.CreateHistory<HistoryModule.History>;
        historyOptions?: HistoryModule.HistoryOptions;
        middlewares?: Redux.Middleware[];
        initialState?: any;
        container?: string;
    }

    interface BootstrapResult {
        store: Redux.Store;
        history: ReactRouterRedux.ReactRouterReduxHistory;
        root: JSX.Element;
    }

    interface ReducersOption {
        [index: string]: Redux.Reducer;
    }

    export function bootstrap(options: BoostrapOptions): BootstrapResult;
}
