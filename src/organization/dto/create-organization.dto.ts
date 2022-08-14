import { IsIn, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateOrganizationDto {
    
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNumber()
    @IsPositive()
    @IsIn([0,1])
    status: number;
}
