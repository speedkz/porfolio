import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as AuthActions from '../actions/auth.actions';
import { AuthenticationService } from 'app/core/services/auth.serivce';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  /**
   * Get users from Server
   * @type {Observable<any>}
   */
  @Effect()
  login: Observable<AuthActions.AuthsActionsAll> =
    this.actions
      .pipe(
        ofType<AuthActions.Login>(AuthActions.LOGIN),
        switchMap((action) => {
          return this.authService.login()
            .then(function (response) {
              // handle success
              return new AuthActions.LoginSuccess(response.data);
            })
            .catch(function (error) {
              // handle error
              return new AuthActions.LoginFailed(error);
            })
        }
        ));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActions.LOGIN_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/');
    })
  );
}
