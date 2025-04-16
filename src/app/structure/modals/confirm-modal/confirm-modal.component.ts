import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();
  private hasChanges = false;
  public isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  showSpinner() {
    this.isLoading = !this.isLoading
  }
  
  closeModal(isLogout ?): void {
    this.dialogRef.close({ hasChanges: isLogout });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
