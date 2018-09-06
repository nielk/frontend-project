import { ThunkDispatch } from 'redux-thunk';

import memoizeOne from 'memoize-one';

import { State } from '../state';

/**
 * Base Action type
 */
export interface Action<T extends string> {
  type: T;
}

/**
 * Action with a payload
 */
export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

/**
 * Action with a payload (can be empty object!) and a meta
 */
export interface ActionWithMeta<T extends string, P, U> extends ActionWithPayload<T, P> {
  meta: U;
}

/**
 * Definition for a thunk action
 */
export type ThunkAction<T extends string, P, U> = (
  dispath: ThunkDispatch<any, any, any>,
  getState: () => State
) => Promise<ActionWithPayload<T, P> | ActionWithMeta<T, P, U>>;

/**
 * Creates an action with type and optionnaly payload and meta
 * @note This is super tricky, so some type castings are inevitable! So sorry for this
 * Examples:
 *  create simple action
 * @example
 * // create simple action
 * createAction('HELLO_WORLD')
 * @example
 * // create action with payload
 * createAction('HELLO_WORLD', { foo: 'bar' })
 * @example
 * // create action with meta
 * createAction('HELLO_WORLD', { foo: 'bar' }, { baz: 'qux' })
 * @example
 * // create a thunk action
 * createAction(async(dispatch, getState) => {
 *   ...
 *   return dispatch({ type: 'SUCCESS' })
 * })
 */
export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P, U>(type: T, payload: P, meta: U): ActionWithMeta<T, P, U>;
export function createAction<T extends string, P, U>(
  type: ThunkAction<T, P, U>
): ReturnType<ThunkAction<T, P, U>>;
export function createAction<T extends string, P, U>(type: T | ThunkAction<T, P, U>, payload?: P, meta?: U) {
  if (typeof type === 'function') {
    return memoizeOne(type) as any;
  }
  if (typeof payload === 'undefined') {
    return { type };
  }
  if (typeof meta === 'undefined') {
    return { type, payload };
  }
  return { type, payload, meta };
}

/**
 * Helper type
 */
type Filter<T, U> = T extends U ? T : never;

/**
 * Allows to obtain action types from ActionCreatorMapObject
 */
export type ActionsUnion<A extends { [index: string]: any }> = Filter<ReturnType<A[keyof A]>, Action<any>>;

/**
 * Allow to infer ThunkActions
 */
export type ActionReturn<T> = T extends ThunkAction<infer U, infer V, any>
  ? Promise<ActionWithPayload<U, V>>
  : never;

/**
 * Allows to pick a type from ActionMap
 * Ex: TypeofAction<'setFirstname', typeof UserActions>
 */
export type TypeofAction<T extends keyof U, U extends { [index: string]: any }> = U[T] extends ((
  // tslint:disable-next-line:no-unused
  t1: infer T1,
  // tslint:disable-next-line:no-unused
  t2: infer T2,
  // tslint:disable-next-line:no-unused
  t3: infer T3,
  // tslint:disable-next-line:no-unused
  t4: infer T4
) => Promise<any>)
  ? ((t1?: T1, t2?: T2, t3?: T3, t4?: T4) => ReturnType<U[T]>)
  : ReturnType<U[T]>;
