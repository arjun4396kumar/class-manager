import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class StudentsCreateRequest {

    @IsString()
    @IsNotEmpty()
    first_name:string

    @IsNotEmpty()
    @IsString()
    last_name:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsOptional()
    @IsString()
    phone:string

    @IsNotEmpty()
    @IsString()
    address:string

    @IsNotEmpty()
    @IsNumber()
    user_type:number
}


export class StudentsUpdateRequest {

    @IsString()
    @IsNotEmpty()
    first_name:string

    @IsNotEmpty()
    @IsString()
    last_name:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsOptional()
    @IsString()
    phone:string

    @IsNotEmpty()
    @IsString()
    address:string
}

