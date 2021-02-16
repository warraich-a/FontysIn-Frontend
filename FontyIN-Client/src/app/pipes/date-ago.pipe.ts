import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log("VALUE " + value);

        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if(seconds > 86400) { // bigger than a day
                value = moment(value).format('ll');

                return value;
            }
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) 
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }

}
