import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DangerousFeed, DepthNode, FishSpecies } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'https://localhost:7084/api'

  constructor(private http: HttpClient) {}

  getSpecies({ offset, size, depthStart, depthEnd, searchTerm } : { offset?: number, size?: number, depthStart: number, depthEnd: number, searchTerm?: string }): Observable<FishSpecies[]> {
    const url = `${this.BASE_URL}/species/search`

    let params = new HttpParams()
      .set('paging.size', size?.toString() ?? '50')
      .set('paging.offset', offset?.toString() ?? '0')
      .set('userId', 'no-user-id')
      .set('depthStartInMeter', depthStart.toString())
      .set('depthEndInMeter', depthEnd.toString())
    
    if(searchTerm)
      params = params.append('searchTerm', searchTerm)

    return this.http.get<{ Items: FishSpecies[], Paging: any }>(url, { params })
      .pipe(
        map(response => response.Items)
      )
  }

  getDangerousFeed({ size, occursAtFrom, occursAtTill } : { size?: number, occursAtFrom?: Date, occursAtTill?: Date }): Observable<DangerousFeed[]> {
    const url = `${this.BASE_URL}/dangerous-feed/search`

    // Convert Date objects to ISO string format
    const occuresAtFromISOString = occursAtFrom?.toISOString() ?? '2022-01-01T00:00:00'
    const occuresAtTillISOString = occursAtTill?.toISOString() ?? '2030-01-01T00:00:00'

    let params = new HttpParams()
      .set('paging.size', size?.toString() ?? '50')

    if(occuresAtFromISOString)
      params = params.append('occuresAtFrom', occuresAtFromISOString)
  
    if(occuresAtTillISOString)
      params = params.append('occuresAtTill', occuresAtTillISOString)

    return this.http.get<{ Items: DangerousFeed[], Paging: any }>(url, { params })
      .pipe(
        map(response => {
          const items: DangerousFeed[] = response.Items

          return items.map(item => ({
            ...item,
            OccuresAtFrom: new Date(item.OccuresAtFrom),
            OccuresAtTill: new Date(item.OccuresAtTill)
          }))
        })
      )
  }

  getDepthNodeStatistics(): Observable<DepthNode[]> {
    const url = `${this.BASE_URL}/analytic/depth`

    return this.http.get<DepthNode[]>(url)
  }

}

