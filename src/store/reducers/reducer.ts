import { Action } from '../actions/action';

export type Reducer<T, P extends Action<string>> = (state: Readonly<T>, action: P) => Readonly<T>;
