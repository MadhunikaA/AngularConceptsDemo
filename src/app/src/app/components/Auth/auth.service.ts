import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private router: Router, private http: HttpClient) { }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    login(user: User) {
        if (user.userName !== "" && user.password !== "") {
            // return this.http.post<any>(`/users/authenticate`, user)
                // .pipe(map(user => {
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                //     this.currentUserSubject.next(user);
                    this.loggedIn.next(true);
                    this.router.navigate(["/dashboard"]);
                //     return user;
                // }));
        }
    }
    logout() {
        this.loggedIn.next(false);
        this.router.navigate(["/"]);
    }
}
