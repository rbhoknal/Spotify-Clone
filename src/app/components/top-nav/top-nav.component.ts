import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from 'src/app/services/searchbar.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private sb: SearchbarService) { }

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    console.log(inputElement);
    this.inputFilterRes.emit(inputElement.value);
  }
}
