import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Response } from 'express';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Post()
  create(@Body() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoryService.create(createRepositoryDto);
  }

  @Get()
  findAll() {
    return this.repositoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response ) {
    const data = await this.repositoryService.findOne(id);
    
    return res.status(HttpStatus.OK).json({
      'repositories': data
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepositoryDto: UpdateRepositoryDto) {
    return this.repositoryService.update(+id, updateRepositoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repositoryService.remove(+id);
  }
}
