import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly API_URL = 'http://test-demo.aemenersol.com/api'
    private readonly TOKEN_KEY = 'auth_token'
    private http = inject(HttpClient)
    private router = inject(Router)

   /**
   * login to API
   * @param username - email user
   * @param password - password user
   * @returns Observable thats containts token (string)
   */
    login(username: string, password: string): Observable<string>{
        return this.http.post(
            `${this.API_URL}/account/login`,
            {username, password},
            {responseType: 'text'}
        ).pipe(
            // save token to local storage
            tap((token: string) => {
                const cleanToken = token.replace(/^"|"$/g, '');
                this.saveToken(cleanToken)
            })
        )
    }

    /**
     * Save token to local storage
     */
    saveToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    /**
     * Get token from local storage
     * @return token string or null if token not exist
     */
    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    /**
     * Check if user is logged in (there is a token?)
     * @returns true if token exist
     */
    isLoggedIn(): boolean {
        return !!this.getToken(); // !! converts string|null to boolean
    }

    /**
     * Logout — delete token and redirect to login page
     */
    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/login']);
    }
}