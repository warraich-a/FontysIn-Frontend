import { constructor } from 'process';

export class Education{
    constructor( 
        public id: number,
        public   profileId: number,
        public  school: string,
        public  startYearEducation: string,
        public  endYearEducation: string,
        public   degreeEducation: string,
        public   fieldStudy: string,
        public   descriptionEducation: string,
      ) {  }
}


