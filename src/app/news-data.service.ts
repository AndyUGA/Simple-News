import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class NewsDataService {
  public test: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getDataByCategory(type: string) {
    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&category=" + type + "&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e";
    return this.http.get(apiURL);
  }

  getDataByKeyword(type: string) {
    let apiURL = "https://newsapi.org/v2/everything?q=" + type + "&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e";

    return this.http.get(apiURL);
  }

  ngOnInit() {}
}
