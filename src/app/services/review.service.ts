import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = environment.url + 'reviews';

  constructor(private http: HttpClient) {}

  getListReviews() {
    return this.http.get<Review[]>(this.url);
  }

  getReviewsByProduct() {
    return this.http.get<Review>(`${this.url}/1`);
  }
}
