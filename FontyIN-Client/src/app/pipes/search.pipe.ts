import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    // let loggedInUser = 1;
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toString().toLowerCase();
    console.log(searchText);

    // return items.filter(it => {
    //   let fullName = it.firstName + ' ' + it.lastName;
    //   console.log(fullName.toString().toLowerCase());
    //   return fullName.toString().toLowerCase().indexOf(searchText) == 0;
    // });

    let user = items.filter(it => {
        let fullName = it.firstName + ' ' + it.lastName;
        return fullName.toString().toLowerCase().indexOf(searchText) == 0;
      })
      console.log(user);
  }

}
