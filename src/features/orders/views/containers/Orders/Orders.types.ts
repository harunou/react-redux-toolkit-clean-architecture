import type { OrderEntityId } from "../../../types"

export interface Presenter {
  orderIds: OrderEntityId[]
  isLoading: boolean
  totalItemsQuantity: number
}

export interface Controller {
  moduleStarted(): void
  moduleDestroyed(): void
}