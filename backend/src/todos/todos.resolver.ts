// todos.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from './models/todo.model';

import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  async todos() {
    return this.todosService.findAll();
  }
}
