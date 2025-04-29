import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

interface JwtResp { token: string; }
interface Credentials { username: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly TOKEN_KEY = 'jwt';   // chiave in localStorage

  constructor(private http: HttpClient, private router: Router) {}

  /* ---------- chiamate API ---------- */

  login(creds: Credentials) {
    return this.http
      .post<JwtResp>('/api/auth/login', creds)
      .pipe(tap(r => this.storeToken(r.token)));
  }

  register(creds: Credentials) {
    return this.http.post('/api/auth/register', creds)
  }

  /* ---------- utilità ---------- */

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

  // ---- accesso al token e ai claim ----

  /** Token JWT corrente (o null). */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /** true se il token esiste. */
  isLogged(): boolean {
    return this.getToken() !== null;
  }

  /** Username (claim "sub"); stringa vuota se non presente/valido. */
  getUsername(): string {
    const payload = this.decodePayload();
    return payload?.sub ?? '';
  }

  /** Array dei ruoli (claim "roles"); array vuoto se non presente/valido. */
  getRoles(): string[] {
    const payload = this.decodePayload();
    const roles: string | undefined = payload?.roles;
    return roles ? roles.split(',') : [];
  }

  /* ---------- helper privati ---------- */

  private storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Ritorna il payload JSON del JWT, oppure null se assente/malformato.
   * Non effettua alcuna verifica di firma.
   */
  private decodePayload(): any | null {
    const token = this.getToken();
    if (!token) return null;

    const parts = token.split('.');
    if (parts.length !== 3) return null;

    try {
      // base64url → base64
      const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const json = atob(base64);
      return JSON.parse(json);
    } catch {
      return null;
    }
  }
}
