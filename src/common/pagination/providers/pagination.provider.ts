import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Model } from 'mongoose';

@Injectable()
export class PaginationProvider {
  public async paginateQuery<T>(
    paginationQuery: PaginationQueryDto,
    model: Model<T>,
    query?: { author: string },
  ) {
    let results = model
      .find(query)
      .populate('tags')
      .populate('author')
      .limit(paginationQuery.limit)
      .skip(paginationQuery.limit * (paginationQuery.page - 1))
      .exec();

      return results;
  }
}
