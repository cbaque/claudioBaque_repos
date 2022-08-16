import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ParseIntPipe, HttpStatus, StreamableFile, Header, Response } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { CsvParser } from 'nest-csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import { Response as responseExpress } from 'express';

@Controller('repository')
export class RepositoryController {
  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly csvParser: CsvParser
    ) {}

  @Post()
  create(@Body() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoryService.create(createRepositoryDto);
  }

  @Get()
  findAll() {
    return this.repositoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: responseExpress ) {
    const data = await this.repositoryService.findOne(id);
    
    return res.status(HttpStatus.OK).json({
      'repositories': data
    });
  }


  @Get('csv/:id')
  async getFile(@Param('id', ParseIntPipe) id: number, @Response({ passthrough: true }) res )   {
    
      res.set({
        'Content-Type': 'text/plain'
      });

      const files = await this.repositoryService.genarateCSV(id);

      try {

        
        const file = path.join(__dirname, 'repositories.csv');

        const writeStream = fs.createWriteStream(file, 'utf8');
        writeStream.write(files);

        const readStream = fs.createReadStream(file, 'utf8')
        return new StreamableFile(readStream);
        
      } catch (error) {
        console.log(error) 
      }
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
