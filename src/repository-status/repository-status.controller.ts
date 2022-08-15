import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { RepositoryStatusService } from './repository-status.service';
import { CreateRepositoryStatusDto } from './dto/create-repository-status.dto';
import { UpdateRepositoryStatusDto } from './dto/update-repository-status.dto';
import { Response } from 'express';

@Controller('repository-status')
export class RepositoryStatusController {
  constructor(private readonly repositoryStatusService: RepositoryStatusService) {}

  @Post()
  create(@Body() createRepositoryStatusDto: CreateRepositoryStatusDto) {
    return this.repositoryStatusService.create(createRepositoryStatusDto);
  }

  @Get()
  findAll( @Res() res: Response ) {
    let data = this.repositoryStatusService.findAll();

    return res.status(HttpStatus.OK).json({
      'repositories': data
    });    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositoryStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepositoryStatusDto: UpdateRepositoryStatusDto) {
    return this.repositoryStatusService.update(+id, updateRepositoryStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repositoryStatusService.remove(+id);
  }
}
