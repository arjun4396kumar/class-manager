import { IsOptional, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ClassroomCreateRequest {

    @IsString()
    name:string

    @IsNotEmpty()
    @IsNumber()
    created_by:number

    @IsNotEmpty()
    timing:Date

    @IsNotEmpty()
    number_of_students:[]
}


export class ClassroomUpdateRequest {


    @IsString()
    @IsOptional()
    name:string

    @IsNotEmpty()
    @IsOptional()
    timing:Date

    @IsNotEmpty()
    @IsOptional()
    number_of_students:[]
}

