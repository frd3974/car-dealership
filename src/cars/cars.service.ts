import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars:Car[] = [
    {
      id: uuid(),
      brand: 'ford',
      model: 'fiesta'
    },
    {
      id: uuid(),
      brand: 'porsche',
      model: '911 Turbo'
    }
  ];

  findAll(){
    return this.cars;
  }

  findOneById(id:string){
    const car = this.cars.find(item => item.id == id);
    if(!car){
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto){
    const newCar:Car = {...createCarDto, id: uuid()};
    this.cars.push(newCar);
    return newCar;
  }

  update(id:string, updateCarDto:UpdateCarDto){
    
  }
}
