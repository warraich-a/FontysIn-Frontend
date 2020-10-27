export class User {
    id: number;
    firstName: string; 
    lastName: string; 
    email: string;; 
    password: string;; 
    phoneNumbar: string;; 
    addressId: number;
    locationId: number;
    departmentId: number; 
    userNumber: string;; 
    img: string;; 
    //UserType userType;
    constructor(
        public id: number,
        public userPhoneNumber: string,
    ) {  }

}