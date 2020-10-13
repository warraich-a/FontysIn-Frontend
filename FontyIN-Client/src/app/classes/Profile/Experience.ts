

enum EmplymentType {
    FullTime,
    PartTime,
    FreeLancer
}

export class Experience{
    id: number;
    profileId: number;
    title: string;
    company:string;
    employmentType : string;
    locationId: number;
    startYear: Date;
    endYear: Date;
    description: string;

}