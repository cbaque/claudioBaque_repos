import { PartialType } from '@nestjs/mapped-types';
import { CreateRepositoryStatusDto } from './create-repository-status.dto';

export class UpdateRepositoryStatusDto extends PartialType(CreateRepositoryStatusDto) {}
