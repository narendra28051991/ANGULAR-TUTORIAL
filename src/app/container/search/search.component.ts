import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = ''

  @Output()
  updatedSearchText: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchInput') searchInput: ElementRef

  updateSearchText() {
    this.searchText = this.searchInput.nativeElement.value.trim().toLowerCase()
    this.updatedSearchText.emit(this.searchText)
  }
}
