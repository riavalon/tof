export class mockAuthService {
  public isAuthorized: boolean
  public user: any

  constructor() {
    this.isAuthorized = false
    this.user = { username: 'admin' }
  }

  authenticate(): boolean {
    return this.isAuthorized
  }

  login() {
    this.isAuthorized = true
  }

  logout() {
    this.isAuthorized = false
  }

  getUser(): Object {
    return this.isAuthorized ? this.user : {}
  }
}