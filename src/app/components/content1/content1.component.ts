import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Content1ModalComponent } from './content1-modal/content1-modal.component';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.scss']
})
export class Content1Component implements OnInit, OnDestroy {
  private onDestroy = new Subject<void>();

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(Content1ModalComponent, {
      data: {
        // title: (isNew ? 'Create ' : 'Edit ') + 'User',
        // isNew: isNew,
        // user: data
      },
      autoFocus: false,
      width: '800px',
      panelClass: 'plantillaModal',
      disableClose: true
    })

    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy)).subscribe(async (data) => {
      if ( data?.hasChanges ) {
        
      }
    })
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
