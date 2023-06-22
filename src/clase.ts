class Person {
    name: string
    job?: string
  
    constructor(name: string, job?: string) {
      this.name = name
      this.job = job
    }
    static show(){
      console.log(this.name)
    }
  }
  
  class Employ extends Person {
    salary: number
  
    constructor(name: string, salary: number, job?: string) {
      super(name, job)
      this.salary = salary
    }
  }
  
  const employee = new Employ("Anton", 2000);