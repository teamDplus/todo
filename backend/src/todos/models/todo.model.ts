// todos/models/todo.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id!: number;          // <- ! を付ける

  @Field()
  title!: string;

  @Field()
  completed!: boolean;
}
