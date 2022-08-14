import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusRepositoryDto } from './create-status-repository.dto';

export class UpdateStatusRepositoryDto extends PartialType(CreateStatusRepositoryDto) {}
