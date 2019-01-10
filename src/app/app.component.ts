import { Component }                      from '@angular/core';
import { NgxuxMatDialogService }          from '../../projects/ngxux-mat-dialog/src/lib/ngxux-mat-dialog.service';
import { TableColumn }                    from '../../projects/ngxux-mat-table/src/lib/table-column';
import { NgxuxMatToolbarItem }            from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar-item';
import { NgxuxMatToolbarService }         from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar.service';
import { NgxuxMatVerticalToolbarItem }    from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar-item';
import { NgxuxMatVerticalToolbarService } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public columns: Array<TableColumn> = [ {

        key: 'name',
        label: 'Name'

    }, {

        key: 'id',
        label: 'ID'

    } ];

    public data: Array<any> = [

        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },
        { name: 'asdf', id: '123' },

    ];

    public constructor(private ngxuxMatVerticalToolbarService: NgxuxMatVerticalToolbarService,
                       private ngxuxMatDialogService: NgxuxMatDialogService,
                       private ngxuxMatToolbarService: NgxuxMatToolbarService) {

        ngxuxMatToolbarService.menuItems = [

            new NgxuxMatToolbarItem({ icon: 'home', path: '/home', tooltip: 'Go home!', color: '#fff', hoverColor: 'red' }),
            new NgxuxMatToolbarItem({ icon: 'settings', path: '/settings', tooltip: 'Go settings!' }),

        ];

        ngxuxMatVerticalToolbarService.leftMenuItems = [

            new NgxuxMatVerticalToolbarItem({ icon: 'home', path: '/home', tooltip: 'Go home!' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'settings', path: '/settings', tooltip: 'Go settings!' }),

        ];

        ngxuxMatVerticalToolbarService.click$.subscribe((item: NgxuxMatVerticalToolbarItem) => {

            console.log(item);

        });

        // ngxuxMatDialogService.open(TestDialogComponent, new NgxuxMatDialogSettings({
        //
        //     id: 'test',
        //     title: 'Testing Dialog',
        //
        //     width: '200px',
        //     height: '200px',
        //
        //     backShow: true,
        //     nextShow: true,
        //     nextLabel: 'Save!'
        //
        // }));

    }

    public rowClicked(e: any): void {

        console.log(e);

    }

}
