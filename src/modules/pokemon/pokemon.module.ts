import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
