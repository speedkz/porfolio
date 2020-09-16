import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as UsersActions from '../actions/user.actions';
import { AuthenticationService } from 'app/core/services/auth.serivce';

@Injectable()
export class UsersEffect {
  constructor(
    private actions: Actions,
    private authService: AuthenticationService
  ) {
  }

  /**
   * Get users from Server
   * @type {Observable<any>}
   */
  @Effect()
  getUsers: Observable<UsersActions.UsersActionsAll> =
    this.actions
      .pipe(
        ofType<UsersActions.GetUsers>(UsersActions.GET_USERS),
        switchMap((action) => {
          return this.authService.login()
            .then(function (response) {
              // handle success
              return new UsersActions.GetUsersSuccess(response.data);
            })
            .catch(function (error) {
              // handle error
              return new UsersActions.GetUsersFailed(error);
            })
        }
        ));
}
