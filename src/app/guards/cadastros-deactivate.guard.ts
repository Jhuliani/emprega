/*import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { IformCanDeactivate } from './iform-candeactivate'
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class CadastrosDeactivateGuard {

        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');

            //return component.podeMudarRota ? component.podeMudarRota() : true;

            return component.podeDesativar ? component.podeDesativar() : true;
    }
}
*/
