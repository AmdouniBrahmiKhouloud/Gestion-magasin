import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  stars: number;
  rating: number;
  tempRating: number;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  stars: number[] = [5, 4, 3, 2, 1];
  rating: number = 5;
  tempRating: number = this.rating;

  openDialog(rating) {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
        stars: this.stars,
        rating,
        tempRating: rating
      }
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./review.component.scss']
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
