import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { BlogsModalComponent } from './blogs-modal/blogs-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  private onDestroy = new Subject<void>();
  
  blogs = [
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
    },
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      date: "September 2023",
      title: "This is the title of article #1",
      picture: "url",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionOne: "Title 1",
      textSectionOne: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.",
      titleSectionTwo: "Title 2",
      textSectionTwo: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
  ]

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModal(blog) {
    console.log(blog)

    const dialogRef = this.dialog.open(BlogsModalComponent, {
      data: {
        blog
      },
      autoFocus: false,
      width: '800px',
      height: '900px',
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
