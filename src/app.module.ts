import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot(dataSourceOptions), CoffeeRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
