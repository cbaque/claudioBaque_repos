import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {

  constructor(
    @InjectRepository(Organization)
    private readonly organizationReposity: Repository<Organization>
  ) {
  }

  async create(createOrganizationDto: CreateOrganizationDto) {
    try {

      const organization =  this.organizationReposity.create(createOrganizationDto);
      await this.organizationReposity.save(organization);

      return organization;
      
    } catch (error) {

      throw new BadRequestException(error)
      
    }
  }

  findAll() {
    return this.organizationReposity.find({});
  }

  async findOne(id_organization: number) {
    const organization = await this.organizationReposity.findOneBy({id_organization});
    if ( !organization )
      throw new NotFoundException('Organizacion no encontrada.');

    return organization;
  }

  async update(id_organization: number, updateOrganizationDto: UpdateOrganizationDto) {
    const organization = await this.organizationReposity.preload({
      id_organization: id_organization,
      ...updateOrganizationDto
    });

    if ( !organization )
      throw new NotFoundException('Organizacion no encontrada.');       

    try {   

      await this.organizationReposity.save(organization);
      return organization;
      
    } catch (error) {

      throw new InternalServerErrorException(error)
      
    }
  }

  async remove(id_organization: number) {

    const organization = await this.findOne(id_organization);
    await this.organizationReposity.remove( organization );
    
  }
}
