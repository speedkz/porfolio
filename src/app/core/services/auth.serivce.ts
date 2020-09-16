import axios from './axios.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    login() {
        return axios.get('test')
    }
}