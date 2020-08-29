import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'startup';
  onoff = "on";
  apionoff;

  constructor(private http: HttpClient,private api: ApiService) { }

  ngOnInit(){
    this.getData()
  }

  async getData() {
    await this.api.getSocketData().subscribe(async (result: any) => {
      this.apionoff = result.on
    });
  }

  on(){
    this.onoff = "on"
    this.http.post<any>('http://157.245.193.153:2000/onoff', { on: true }).subscribe(data => {
            this.title = data;
    })
  }

  off(){
    this.onoff = "off"
    this.http.post<any>('http://157.245.193.153:2000/onoff', { on: false }).subscribe(data => {
            this.title = data;
    })
  }
}
