/*
Composite pattern lets clients treat the individual objects in a uniform manner.

RW
Every organization is composed of employees.
Each of the employees has the same features i.e. has a salary, has some responsibilities,
may or may not report to someone, may or may not have some subordinates etc.

*/
interface IEmployee {
    GetSalary(): number;
    GetRole(): string;
    GetName(): string;
}

class Developer implements IEmployee {
    private _name: string;
    private _salary: number;
    private _role = "developer";

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }
    GetSalary(): number {
        return this._salary;
    }
    GetRole(): string {
        return this._role;
    }
    GetName(): string {
        return this._name;
    }
}

class Designer implements IEmployee {
    private _name: string;
    private _salary: number;
    private _role = "designer";

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }
    GetSalary(): number {
        return this._salary;
    }
    GetRole(): string {
        return this._role;
    }
    GetName(): string {
        return this._name;
    }
}

class Organization {
    protected _employees: Array<IEmployee> = [];

    AddEmployee(employee: IEmployee): void {
        this._employees.push(employee);
    }

    GetNetSalaries(): number {
        return this._employees.reduce((accumulator: number, currentValue: IEmployee) => accumulator + currentValue.GetSalary(), 0);
    }
}

const developer = new Developer("John", 5000);
const developer2 = new Developer("John", 300);

const designer = new Designer("Arya", 5000);

const organization = new Organization();
organization.AddEmployee(developer);
organization.AddEmployee(developer2);

organization.AddEmployee(designer);
console.log(organization.GetNetSalaries())
