interface Vehicle{
    specification():string;
}

class Car implements Vehicle{

    private model:string;
    private year:number;
    private mileage:string;
    private color:string;

    constructor(model,year,mileage,color){
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }

    public getModel():string{
        return this.model;
    }
    public setModel(model):void{
        this.model = model;
    }

    public  getYear():number{
        return this.year;
    }
    public setYear(year):void{
        this.year = year;
    }

    public getMileage():string{
        return this.mileage;
    }
    public setMileage(mileage):void{
        this.mileage = mileage;
    }

    public getColor():string{
        return this.color;
    }
    public setColor(color):void{
        this.color = color;
    }

    public specification():string{
        let spec = `Model : ${this.getModel()} 
                    Year : ${this.getYear()} 
                    Mileage : ${this.getMileage()} 
                    Color : ${this.getColor()}
                    `;
        return spec;
    }
}

let car = new Car('Benz',2018,'10kmpl','black');
let details = car.specification();
console.log(details);