import { Injectable } from '@angular/core'
import { User } from './user.model'

@Injectable()
export class UserService {
  private user: User = new User()

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  public getUser(): User {
    return this.user
  }

  public getUserEmail(): string {
    return this.user.email
  }

  public getUserId(): number {
    return this.user.id
  }

  public getUserName(): string {
    return this.user.name
  }

  public setUser(user: User): void {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }
}
