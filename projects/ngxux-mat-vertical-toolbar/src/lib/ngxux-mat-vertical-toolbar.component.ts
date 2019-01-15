import { Component }                      from '@angular/core';
import { NgxuxMatVerticalToolbarItem }    from './ngxux-mat-vertical-toolbar-item';
import { NgxuxMatVerticalToolbarService } from './ngxux-mat-vertical-toolbar.service';

/**
 * Vertical Navigation Component
 *
 */
@Component({

    selector: 'ngxux-mat-vertical-toolbar',
    template: `

        <div class="ngxux-admin-vertical-toolbar wrapper">

            <div class="top">

                <div (click)="ngxuxMatVerticalToolbarService.onClick(TOP_MENU_ITEM)"
                     class="item">

                    <mat-icon class="icon">menu</mat-icon>

                </div>

            </div>

            <div class="middle">

                <div *ngFor="let item of ngxuxMatVerticalToolbarService.leftMenuItems"
                     (click)="ngxuxMatVerticalToolbarService.onClick(item)"
                     class="item"
                     routerLinkActive="active"
                     [matTooltip]="item.tooltip"
                     [routerLink]="[ item.path ]">

                    <mat-icon class="icon">{{ item.icon }}</mat-icon>

                </div>

            </div>

            <div class="bottom">

                <div (click)="ngxuxMatVerticalToolbarService.onClick(BOTTOM_MENU_ITEM)"
                     class="item">

                    <mat-icon class="icon">exit_to_app</mat-icon>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ './nxgx-mat-vertical-toolbar.component.scss' ]

})
export class NgxuxMatVerticalToolbarComponent {

    public TOP_MENU_ITEM: NgxuxMatVerticalToolbarItem = new NgxuxMatVerticalToolbarItem({

        icon: 'home',
        path: '/home'

    });

    public BOTTOM_MENU_ITEM: NgxuxMatVerticalToolbarItem = new NgxuxMatVerticalToolbarItem({

        icon: 'logout',
        path: '/logout'

    });

    public constructor(public ngxuxMatVerticalToolbarService: NgxuxMatVerticalToolbarService) {

    }

}
