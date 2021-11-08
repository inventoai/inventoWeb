export class Employee {
    _id: string;
    userName: string;
    mobileNumber: string;
    emailId: string;
    department: string;
    businessLocation: string;
    employeeId: string;
    state: string;
    city: string;
    address: string
    avtar: string;
    active: boolean;
}

export class AppUsers {
    _id: string;
    username: string;
    password: string;
    roles: string;
    active: boolean;
}

export class WebUsers {
    _id: string;
    userName: string;
    mobile: string;
    password: string;
    emailId: string;
    departmentType: string;
    location: string;
    employeeId: string;
    state: string;
    city: string;
    address: string;
    roles: string;
    photo: string;
    active: boolean;
}