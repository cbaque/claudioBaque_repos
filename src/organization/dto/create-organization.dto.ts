import { IsIn, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateOrganizationDto {
    
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status: number;
}
