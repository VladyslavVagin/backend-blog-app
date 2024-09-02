import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Model } from 'mongoose';
import { REQUEST } from '@nestjs/core';
import { Paginated } from '../interfaces/paginated.interface';

@Injectable()
export class PaginationProvider {
constructor(
  /** Injecting request  */
  @Inject(REQUEST)
  private readonly request: Request,
) {}

  public async paginateQuery<T>(
    paginationQuery: PaginationQueryDto,
    model: Model<T>,
    query?: { author: string },
  ): Promise<Paginated<T>> {
    let results = model
      .find(query)
      .populate('tags')
      .populate('author')
      .limit(paginationQuery.limit)
      .skip(paginationQuery.limit * (paginationQuery.page - 1))
      .exec();

      // Creating requests URL
      const baseUrl = this.request.protocol + '://' + this.request.headers.host + '/';
      const newUrl = new URL(this.request.url, baseUrl);

      // Calculating page number
      const totalItems = await model.countDocuments(query);
      const totalPages = Math.ceil(totalItems / paginationQuery.limit);
      const nextPage = paginationQuery.page === totalPages ? paginationQuery.page : paginationQuery.page + 1;
      const previousPage = paginationQuery.page === 1 ? paginationQuery.page : paginationQuery.page - 1;

      // Create final response
      const finalResponse: Paginated<T> = {
        data: await results,
        meta: {
          itemsPerPage: paginationQuery.limit,
          totalItems,
          currentPage: paginationQuery.page,
          totalPages,
        },
        links: {
          first: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}&page=1`,
          previous: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}&page=${previousPage}`,
          next: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}&page=${nextPage}`,
          last: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}&page=${totalPages}`,
          current: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}&page=${paginationQuery.page}`,
        },
      };

      return finalResponse;
  }
}
