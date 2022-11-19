import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

import { PokemonService } from '../services/pokemon.service';

@ApiTags('POKEMON')
@Controller('v1/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemons() {
    return this.pokemonService.getAllPokemons();
  }

  @Get('/:id')
  getByName(@Param('id') nameOrId: string) {
    return this.pokemonService.getByNameOrId(nameOrId);
  }

  @Get('ability/battle-armor')
  getSkills() {
    return this.pokemonService.getSkills();
  }
}
