import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { RayModel, StockModel } from '../models/ray.model'

@Injectable({
  providedIn: 'root',
})
export class RayService {
  baseUrl = environment.apiBaseUrl
  rayUrl = `${this.baseUrl}/rayon`
  productUrl = `${this.baseUrl}/product`
  stockUrl = `${this.baseUrl}/stock`
  constructor(private readonly https: HttpClient) {}

  saveRays(model: RayModel) {
    const url = `${this.rayUrl}/addRay`
    return this.https.post(url, model).toPromise()
  }

  updateRays(id, model: RayModel) {
    const url = `${this.rayUrl}/update/${id}`
    return this.https.put(url, model).toPromise()
  }

  notificationRays() {
    const url = `${this.rayUrl}/notif`
    return this.https.get(url, { responseType: 'text' }).toPromise()
  }

  loadRays() {
    const url = `${this.rayUrl}/showRay`
    return this.https.get(url).toPromise()
  }

  deleteRays(id) {
    const url = `${this.rayUrl}/deleteRay/${id}`
    return this.https.delete(url).toPromise()
  }

  saveStock(model: StockModel) {
    const url = `${this.stockUrl}/addStock`
    return this.https.post(url, model).toPromise()
  }

  loadStock() {
    const url = `${this.stockUrl}/getAllStocks`
    return this.https.get(url).toPromise()
  }

  deleteStock(id) {
    const url = `${this.stockUrl}/deleteStock/${id}`
    return this.https.delete(url).toPromise()
  }

  bestProducts() {
    const url = `${this.productUrl}/getbestproductbyrayon`
    return this.https.put(url, {}).toPromise()
  }

  promotionProducts() {
    const url = `${this.productUrl}/Promotion`
    return this.https.put(url, {}, { responseType: 'text' }).toPromise()
  }

  sendMail() {
    const url = `${this.stockUrl}/sendMail`
    return this.https.post(url, {}).toPromise()
  }
}
