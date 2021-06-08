import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { RayModel } from '../models/ray.model'
import { RayService } from '../services/ray.service'

@Component({
  selector: 'app-ray-list',
  templateUrl: './ray-list.component.html',
  styleUrls: ['./ray-list.component.css'],
})
export class RayListComponent implements OnInit {
  rays: Array<RayModel> = []
  public dataSource: MatTableDataSource<RayModel>
  notification: string = ''
  constructor(private readonly rayService: RayService) {}
  public displayedColumns: string[] = [
    'rayId',
    'rayName',
    'categories',
    'createdAt',
    'updatedAt',
    'capacity',
    'totalproduct',
    'rayonImg',
    'rayDescription',
    'action',
  ]
  ngOnInit(): void {
    this.loadRays()
    this.getNotificationRays()
  }
  isEdit = -1

  updateModel: RayModel = {
    capacity: 0,
    rayDescription: '',
    totalproduct: 0,
    rayName: '',
  }
  async loadRays() {
    try {
      const results: any = await this.rayService.loadRays()
      this.rays = results
      this.dataSource = new MatTableDataSource(this.rays)
    } catch (error) {
      console.log({ error })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  async onDelete(id) {
    try {
      await this.rayService.deleteRays(id)
      this.loadRays()
    } catch (error) {
      console.log({ error })
    }
  }

  async getNotificationRays() {
    try {
      const result: any = await this.rayService.notificationRays()
      this.notification = result
      console.log({ result })
    } catch (error) {
      console.log({ error })
    }
  }

  async onUpdate(ray: RayModel) {
    this.isEdit = ray.rayId
    this.updateModel = {
      capacity: ray.capacity,
      rayDescription: ray.rayDescription,
      totalproduct: ray.totalproduct,
      rayName: ray.rayName,
    }
  }

  async onUpdateRay(ray: RayModel) {
    try {
      await this.rayService.updateRays(this.isEdit, ray)
      this.isEdit = -1
      this.loadRays()
    } catch (error) {
      console.log({ error })
    }
  }
}
