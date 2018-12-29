import { Injectable }                  from '@angular/core';
import { Subject }                     from 'rxjs';
import { NgxuxMatVerticalToolbarItem } from './ngxux-mat-vertical-toolbar-item';

/**
 *
 * Service used to interact with the vertical toolbar.
 *
 */
@Injectable({
    providedIn: 'root'
})
export class NgxuxMatVerticalToolbarService {

    /**
     * Menu items.
     */
    public leftMenuItems: Array<NgxuxMatVerticalToolbarItem> = [];

    /**
     * Observable for menu item click events.
     */
    public click$: Subject<NgxuxMatVerticalToolbarItem> = new Subject();

    /**
     * Internal function used to propogate click events to the observable.
     */
    public onClick(menuItem: NgxuxMatVerticalToolbarItem): void {

        this.click$.next(menuItem);

    }

}
