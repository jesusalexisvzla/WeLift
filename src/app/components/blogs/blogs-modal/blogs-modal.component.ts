import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-blogs-modal',
  templateUrl: './blogs-modal.component.html',
  styleUrls: ['./blogs-modal.component.scss']
})
export class BlogsModalComponent implements OnInit, OnDestroy {
  @Input() public data;
  onDestroy = new Subject<void>();

  private hasChanges = false;
  public isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<BlogsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dataIn: { blog: any }
  ) { }

  ngOnInit(): void {
    console.log('Received data:', this.dataIn.blog);
  }

  closeModal(): void {
    this.dialogRef.close({ hasChanges: this.hasChanges });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
