# useApi

### Types
```ts
import { RequestOptionsInit } from 'umi-request'
export interface UseApiOptions extends RequestOptionsInit {
  url: MaybeRef<string>
  method?: FetchMethod
  data?: MaybeRef<any>
  params?: MaybeRef<Recordable | URLSearchParams>
  showErrorType?: 'Message' | 'Dialog' | 'Notification'
}

export interface UseApiConfig<T = Nullable<Recordable>> {
  immediate?: boolean
  redo?: boolean
  initialData?: T
  throwErr?: boolean
  debounce?: number
}

export interface UseApiReturnType<T> {
  data: Ref<UnwrapRef<T | null>>
  loading: Ref<UnwrapRef<boolean>>
  finished: Ref<UnwrapRef<boolean>>
  error: Ref<UnwrapRef<unknown>>
  executor: ComputedRef<(args?: RequestOptionsInit) => Promise<T>>
}

export function useApi<T extends Recordable>(
  options: UseApiOptions,
  config?: UseApiConfig<T>
): UseApiReturnType<T> 
```