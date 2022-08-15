import { IsIn, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTribeDto {

    @IsNumber()
    id_organization: number;

    @IsString()
    @MaxLength(50)
    name: string;

    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status: number;    

}
