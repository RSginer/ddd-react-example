import { UpdateCarRepository } from "../repository/UpdateCarRepository";

export class UpdateCarService {
    constructor(
        public carUpdatter: UpdateCarRepository
    ) {}
}