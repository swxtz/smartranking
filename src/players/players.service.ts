import { Injectable, Logger } from "@nestjs/common";
import { CreatePlayerDTO } from "./dtos/create-player.dto";
import { IPlayer } from "./interfaces/players.interface";
import { v4 as uuid } from "uuid";

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);
  private players: IPlayer[] = [];

  async createUpdatePlayer(createPlayerDTO: CreatePlayerDTO): Promise<void> {
    await this.createPlayer(createPlayerDTO);
  }

  private createPlayer(createPlayerDTO: CreatePlayerDTO): void {
    const { name, email, phoneNumber } = createPlayerDTO;

    const player: IPlayer = {
      _id: uuid(),
      name,
      email,
      phoneNumber,
      ranking: "A",
      positionRanking: Math.floor(Math.random() * 100),
      urlPhotoPlayer: "https://github.com/swxtz.png",
    };
    this.players.push(player);
    this.logger.log(`createPlayer: ${JSON.stringify(player)}`);
  }

  async getPlayers(): Promise<IPlayer[]> {
    return await this.players;
  }
}
