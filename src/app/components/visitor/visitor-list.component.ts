import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractListComponent } from 'src/app/common/components/abstract-list.component';
import { Visitor } from 'src/app/models/visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-visitor-list',
    templateUrl: './visitor-list.component.html',
})
export class VisitorListComponent extends AbstractListComponent<Visitor> implements OnInit {
    pageSize = 10;

    labels: any = {};
    values: any = {};

    constructor(router: Router, private visitorService: VisitorService) {
        super(router, visitorService, 'visitors');

        this.labels['name'] = 'name';
        this.labels['vatnumber'] = 'vatnumber';
    }
    ngOnInit(): void {
        console.log('VISITORS', this.model);

    }

    getId(): string {
        return this.element!.uuid;
    }

    preLoaddata(): void {
        this.service.search.orderBy = 'name ASC';
        super.preLoaddata();
    }

    reload(datatable: Table): void {
        super.reload(datatable);
    }

    reset(datatable: Table): void {
        super.reset(datatable);
    }
}
