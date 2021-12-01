import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  stars: number;
  rating: number;
  tempRating: number;
  starsDescriptions: string[];
  comment: string;
  userRating: number;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Felt Just OK', 'Liked it', 'Loved it'];
  stars: number[] = [5, 4, 3, 2, 1];
  rating: number = 5;
  tempRating: number = this.rating;
  rateDescriptions: string = this.starsDescriptions[this.tempRating - 1];

  reviews = [
    {
      user: 'test',
      rating: 3,
      description:
        'Many production companies in plastics processing in Germany have been experiencing a shortage of talented and motivated process mechanics for years. Only a few small and medium-sized companies actively use the talent pool from other EU countries. Many process mechanics in other EU countries would like to continue their careers in Germany. Small and medium-sized teams in particular offer such talents a warm atmosphere and the chance to feel at home.'
    },
    {
      user: 'test',
      rating: 3,
      description:
        'Many production companies in plastics processing in Germany have been experiencing a shortage of talented and motivated process mechanics for years. Only a few small and medium-sized companies actively use the talent pool from other EU countries. Many process mechanics in other EU countries would like to continue their careers in Germany. Small and medium-sized teams in particular offer such talents a warm atmosphere and the chance to feel at home.'
    }
  ];

  onHover(star) {
    this.tempRating = 0;
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
        starsDescriptions: this.starsDescriptions
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('All the data', result);
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
  comment: string;
  showError: boolean;

  tempRating: number = this.data.tempRating;
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
    this.data.tempRating = star;
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
