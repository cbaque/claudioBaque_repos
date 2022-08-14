import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { StatusRepositoriesService } from './status-repositories.service';

@Controller('status-repositories')
export class StatusRepositoriesController {
  constructor(private readonly statusRepositoriesService: StatusRepositoriesService) {}


  @Get()
  findAll() {
    return this.statusRepositoriesService.findAll();
  }
}
