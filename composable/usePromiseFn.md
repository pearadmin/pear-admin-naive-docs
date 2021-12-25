# useApi

### Types
```ts

export type FetchData = Recordable

export interface UsePromiseConfig {
  immediate?: boolean
  redo?: boolean
}

export interface UsePromiseFnReturn<T> {
  loading: Ref<boolean>
  data: Ref<Nullable<UnwrapRef<T>>>
  finished: Ref<boolean>
  error: Ref<unknown>
  executor: () => void
}

export default function usePromiseFn<T>(
  fn: (...args: any) => Promise<UnwrapRef<T>>,
  fetchData?: Nullable<MaybeRef<FetchData>>,
  config?: UsePromiseConfig
): UsePromiseFnReturn<T>
```