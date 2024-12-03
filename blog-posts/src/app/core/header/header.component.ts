import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged

  }

  get username(): string {
    console.log(this.userService.user?.username)
    return this.userService.user?.username || '';
  }

  constructor(private userService: UserService, private router: Router) { }


  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login'])

    });
  }

}
