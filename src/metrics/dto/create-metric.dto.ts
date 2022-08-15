import { IsIn, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Double } from "typeorm";

export class CreateMetricDto {

    @IsNumber()
    id_repository: number;

    @IsNumber()
    coverage: number;

    @IsNumber()
    bugs: number;

    @IsNumber()
    vulnerabilities: number;

    @IsNumber()
    hotspot: number;

    @IsNumber()
    code_smells: number;


}
