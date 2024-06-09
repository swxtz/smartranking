import { Body, Controller, Get, Post } from "@nestjs/common";
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
  async getPlayers(): Promise<IPlayer[]> {
    return await this.playersService.getPlayers();
  }
}
