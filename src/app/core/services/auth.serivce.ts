import axios from './axios.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    login() {
        axios.get('test')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}