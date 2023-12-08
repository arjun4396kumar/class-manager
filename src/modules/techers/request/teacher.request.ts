import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TeacherCreateRequest {

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
    subject_expert:string

    @IsNotEmpty()
    @IsNumber()
    user_type:number
}


export class TeacherUpdateRequest {

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
    subject_expert:string
}

