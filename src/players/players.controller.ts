import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreatePlayerDTO } from "./dtos/create-player.dto";
import { PlayersService } from "./players.service";
import { IPlayer } from "./interfaces/players.interface";

@Controller("players")
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createUpdatePlayer(@Body() createPlayerDTO: CreatePlayerDTO) {
    await this.playersService.createUpdatePlayer(createPlayerDTO);
  }

  @Get()
  async getPlayers(@Query("email") email: string): Promise<IPlayer[]> {
    if (email) {
      return await this.playersService.getPlayersByEmail(email);
    } else {
      return await this.playersService.getPlayers();
    }
  }
}
