import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Review } from 'src/app/model/review';
import { User } from 'src/app/model/user';
import { ReviewService } from 'src/app/services/review.service';

export interface DialogData {
  stars: number;
  rating: number;
  tempRating: number;
  starsDescriptions: string[];
  comment: string;
  userRating: number;
  review?: Review;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: ReviewService) {}

  reviews: Review[] = [];
  review: Review;
  ngOnInit(): void {
    this.service.getListReviews().subscribe(reviews => (this.reviews = reviews));
    this.service.getReview(1, 1).subscribe((review: Review) => {
      this.review = review;
    });
  }
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Felt Just OK', 'Liked it', 'Loved it'];
  stars: number[] = [5, 4, 3, 2, 1];
  rating: number = 5;
  tempRating: number = this.rating;
  rateDescriptions: string = this.starsDescriptions[this.tempRating - 1];

  onHover(star) {
    this.tempRating = 0;
    console.log(this.reviews);
    this.rateDescriptions = this.starsDescriptions[star - 1];
  }

  onHoverEnd() {
    this.rateDescriptions = this.starsDescriptions[this.rating - 1];
    this.tempRating = this.rating;
  }

  openDialog(rating) {
    const dialogRef = this.dialog.open(AddReviewDialog, {
      data: {
        stars: this.stars,
        rating,
        tempRating: rating,
        starsDescriptions: this.starsDescriptions,
        review: this.review ? this.review : { description: '', rating: rating }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      const review: Review = {
        rating: result.rating,
        description: result.description,
        client: { idClient: 1 },
        product: { idproduit: 1 }
      };

      if (result.id) {
        this.service.update(result).subscribe((item: Review) => {
          this.reviews.forEach((item, i) => {
            if (item.id == result.id) {
              this.reviews[i].rating = review.rating;
              this.reviews[i].description = review.description;
            }
          });
          this.review = item;
        });
      } else {
        this.service.addNewReview(review).subscribe((item: Review) => {
          this.reviews.push(item);
          this.review = item;
        });
      }
    });
  }
}

@Component({
  selector: 'add-review-dialog',
  templateUrl: 'add-review-dialog.html',
  styleUrls: ['./review.component.scss']
})
export class AddReviewDialog {
  constructor(public dialogRef: MatDialogRef<AddReviewDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Just OK', 'Liked it', 'Loved it'];
  onCancelClick(): void {
    this.dialogRef.close();
  }
  comment: string = this.data.review?.description;
  showError: boolean;
  tempRating: number = this.data.rating;
  review = this.data.review;
  rateDescriptions: string = this.data.starsDescriptions[this.tempRating - 1];
  onStarHover(star) {
    this.rateDescriptions = this.data.starsDescriptions[star - 1];
    this.tempRating = star;
  }

  onEndHover() {
    this.rateDescriptions = this.data.starsDescriptions[this.data.tempRating - 1];
    this.tempRating = this.data.tempRating;
  }

  onClick(star) {
    this.review.rating = star;
    console.log(this.review.rating);
    this.rateDescriptions = this.data.starsDescriptions[star - 1];
  }

  // addReview() {
  //   if (this.tempRating === 0) {
  //     this.showError = true;
  //   } else {
  //     console.log(this.comment);
  //     this.dialogRef.close();
  //   }
  // }
}
