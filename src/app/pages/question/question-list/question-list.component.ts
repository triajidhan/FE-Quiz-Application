import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"
import { MatTableDataSource } from "@angular/material/table"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { Question } from "src/app/interface/question"
import { QuestionService } from "src/app/service/question.service"
import { PATH } from "src/app/utils/routing-path"

@Component({
    selector: 'question-list',
    templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['no', 'question', 'answerKey']
    dataSource!: MatTableDataSource<Question>
    data: any[] = []
    addQuestionPath = PATH.ADD_QUESTION

    @ViewChild(MatPaginator) paginator!: MatPaginator
    @ViewChild(MatSort) sort!: MatSort

    private getUserListSubscription?: Subscription

    constructor(
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit(): void {
        this.getUserListSubscription = this.questionService.getAll().subscribe(result => {
            this.data = result.data
            this.dataSource = new MatTableDataSource(result.data)
        })
    }

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator
        // this.dataSource.sort = this.sort
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value
        this.dataSource.filter = filterValue.trim().toLowerCase()

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage()
        }
    }

    onView(id: string) {
        this.router.navigate([PATH.EDIT_QUESTION, id])
    }

    ngOnDestroy(): void {
        this.getUserListSubscription?.unsubscribe()
    }
}
