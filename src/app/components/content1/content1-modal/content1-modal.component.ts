import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-content1-modal',
  templateUrl: './content1-modal.component.html',
  styleUrls: ['./content1-modal.component.scss']
})
export class Content1ModalComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();
  private hasChanges = false;
  public isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<Content1ModalComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  showSpinner() {
    this.isLoading = !this.isLoading
  }

  showToast(mensaje: string, style: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      panelClass: [style],
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  closeModal(): void {
    this.dialogRef.close({ hasChanges: this.hasChanges });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}
