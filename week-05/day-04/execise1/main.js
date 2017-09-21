function Person(name, age) {
    if (typeof name !== 'string') {
        throw new Error('Name must be string!');
    } else {
        this.name = name;
    }
    if (typeof age !== 'number') {
        throw new Error('Age must be integer!');
    } else {
        this.age = age;
    }
}

function Employee(name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier) {
    Person.call(this, name, age);
    if (typeof salary !== 'number' || salary < 0) {
        throw new Error('Salary must be positive number!');
    } else {
        this.salary = salary;
    }
    this.department = department || 'unknown';
    this.hiredAt = hiredAt || createTime(new Date());
    this.leftAt = leftAt || null;
    if (status === 'active' || status === 'fired' || status === 'quit') {
        this.status = status;
    } else {
        throw new Error('Status must be active or fired or quit');
    }
    this.maxSalaryMultiplier = maxSalaryMultiplier || 1;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getInfo = function () {
    if (this.leftAt !== null) {
        return this.name + '(' + this.age + ') at ' + this.department + ' for ' + this.salary + ' usd since ' + this.hiredAt + ' to ' + this.leftAt;
    } else {
        return this.name + '(' + this.age + ') at ' + this.department + ' for ' + this.salary + ' usd since ' + this.hiredAt;
    }
}
Employee.prototype.quit = function (isFired) {
    if (this.status === 'quit' || this.status === 'fired') {
        if (isFired) {
            this.status = 'fired';
        } else {
            this.status = 'quit';
        }
        this.leftAt = createTime(new Date());
    } else {
        throw new Error('Quit or fired only!');
    }
}
Employee.prototype.increaseSalaryBy = function (newSalary) {
    if (typeof newSalary !== 'boolean' || newSalary < 0) {
        throw new Error('Salary should be positive number!');
    } else if (newSalary > this.salary * this.maxSalaryMultiplier) {
        throw new Error('New salary is bigger than allowed!');
    } else {
        this.salary = newSalary;
    }
}

function Developer(name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier, level) {
    Employee.call(this, name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
    if (level === 'junior' || level === 'medior' || level === 'senior' || level === 'architect') {
        this.level = level;
    } else {
        throw new Error('Level must be junior or medior or senior or architect!');
    }
    this.maxSalaryMultiplier = 1.05;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.changeLevel = function (newLevel) {
    this.level = newLevel;
}

function Director(name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier) {
    Employee.call(this, name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
    this.maxSalaryMultiplier = 1.05;
}

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Director;

Director.prototype.fireEmployee = function (employeeToFire) {
    if (!employeeToFire instanceof Employee) {
        throw new Error('This one to fire is not an Employee!');
    } else {
        employeeToFire.quit(true);
        return true;
    }
}
Director.prototype.promoteDeveloper = function (developerToPromote, newLevel) {
    if (developerToPromote instanceof Developer) {
        throw new Error('This one to fire is not a Developer!');
    } else {
        if (developerToPromote.level === newLevel) {
            return false;
        } else {
            developerToPromote.level = newLevel;
            return true;
        }
    }
}

function createTime(time) {
    return time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate();
}
