export interface RayModel {
  createdAt?: Date
  updatedAt?: Date
  totalproduct: number
  rayonImg?: any
  capacity: number
  rayName: string
  rayId?: number
  rayDescription: string
}

export interface StockModel {
  id?: number
  amount: number
  entry_date: string
  exit_date: string
}

export interface ProductModel {
  brand: string
  codebar: string
  createdAt: Date
  price: number
  productDescription: string
  productId: number
  productImg: number
  productName: string
  quantity: number
  rayon: null
  remisePrice: number
  sold: number
  stock: StockModel
  updatedAt: Date
}
