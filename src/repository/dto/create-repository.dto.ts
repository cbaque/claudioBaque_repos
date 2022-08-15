import { IsIn, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateRepositoryDto {
    
    @IsNumber()
    id_tribe: number;

    @IsString()
    @MaxLength(50)
    name: string;

    @IsString()
    @IsIn(['E','D','A'])
    state: string; 

    @IsOptional()
    create_time: Date; 

    @IsOptional()
    status: string;     


}
