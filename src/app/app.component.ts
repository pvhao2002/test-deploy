import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-Deploy';

  constructor(private http: HttpClient) {
  }

  test() {
    this.http.get("/api/test")
      .subscribe((res: any) => {
        console.log(res);
        alert(res);
      });
    // this.http.get("http://localhost:8080/api/test")
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     alert(res);
    //   });
  }
}
