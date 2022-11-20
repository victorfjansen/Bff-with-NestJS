import { CovidModule } from './modules/covid/covid.module';
import { Module } from '@nestjs/common';

import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [PokemonModule, CovidModule],
})
export class AppModule {}
