import { Injectable } from '@angular/core';
import { createClient , Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 'a1x20ltxn3pq',
    accessToken: 'qXIj2qJnJ5PesmflJGsiegx8B2v_nWB8NTRCWVnrwX8'
  })

  getAllEntries() {
   const promise = this.client.getEntries()
   return from(promise)
    
  }
}
