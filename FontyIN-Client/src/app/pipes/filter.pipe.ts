// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    let loggedInUser = 1;
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toString().toLowerCase();
    console.log(searchText);

    return items.filter(it => {
      let user = it.user.id == loggedInUser ? it.friend: it.user;
      // if(loggedInUser)
      let fullName = user.firstName + ' ' + user.lastName;
      console.log(fullName);
      return fullName.toString().toLowerCase().indexOf(searchText) == 0;
    });
  }
}