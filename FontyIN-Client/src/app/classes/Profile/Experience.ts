

enum EmplymentType {
    FullTime,
    PartTime,
    FreeLancer
}

export class Experience{
    constructor( 
        public id: number,
        public  profileId: number,
        public  title: string,
        public  company:string,
        public  employmentType : string,
        public  locationId: number,
        public  startDateExperience: string,
        public  endDateExperience: string,
        public  descriptionExperience: string,
      ) {  }
}