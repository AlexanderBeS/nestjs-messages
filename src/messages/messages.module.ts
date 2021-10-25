import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesRepository} from "./messages.repository";
import { MessagesService } from "./messages.service";

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}
