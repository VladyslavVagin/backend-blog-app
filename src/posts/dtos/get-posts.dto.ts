import { IsDate, IsOptional } from "class-validator";
import { ApiPropertyOptional, IntersectionType } from "@nestjs/swagger";
import { PaginationQueryDto } from "src/common/pagination/dtos/pagination-query.dto";

class GetPostsBaseDto {
    @ApiPropertyOptional()
    @IsDate()
    @IsOptional()
    startDate?: Date;

    @ApiPropertyOptional()
    @IsDate()
    @IsOptional()
    endDate?: Date;
}

export class GetPostsDto extends IntersectionType(GetPostsBaseDto, PaginationQueryDto) {}