import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  stars: number;
  rating: number;
  tempRating: number;
  starsDescriptions: string[];
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  starsDescriptions: string[] = ['Hated it', "Didn't like it", 'Just OK', 'Liked it', 'Loved it'];
  stars: number[] = [5, 4, 3, 2, 1];
  rating: number = 5;
  tempRating: number = this.rating;
  rateDescriptions: string = this.starsDescriptions[this.tempRating - 1];

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
}
