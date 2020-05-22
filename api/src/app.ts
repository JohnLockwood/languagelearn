import "reflect-metadata";
import {ObjectType, Field, ID, Mutation, Query, Resolver, ArgsType, InputType, Int, Arg, Args, buildTypeDefsAndResolvers} from "type-graphql"
import {Length, MaxLength, ArrayMaxSize, Min, Max} from "class-validator";
import { GraphQLServer} from "graphql-yoga";
import {connect} from "./entities/Connector";
import { isTypeSystemDefinitionNode } from "graphql";

@ObjectType()
class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}

@InputType()
class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}

@ArgsType()
class RecipesArgs {
  @Field(type => Int)
  @Min(0)
  skip: number = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take: number = 25;
}

class RecipeService {
  findById = (id: string) : Promise<Recipe> => {
    return Promise.resolve({id: id, title: "Another fake recipe title", creationDate:  new Date(Date.now()), ingredients: ["An egg"]})
  }
  findAll = (args: RecipesArgs) : Recipe[] => {
    return [{id: "99", title: "A fake recipe title", creationDate:  new Date(Date.now()), ingredients: ["An egg"]}];
    
  }
  removeById = (id: string) => {

  }

  addNew = (data: NewRecipeInput) => {
    return this.findById("99")
  }
}

class RecipeNotFoundError {
    constructor(id: String) {

    }
}

@Resolver(Recipe)
class RecipeResolver {
  recipeService: RecipeService;

  constructor() {
    this.recipeService = new RecipeService();
  }

  @Query(returns => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }
    return recipe;
  }

  @Query(returns => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }

  @Mutation(returns => Recipe)
  // @Authorized()
  addRecipe(
    @Arg("newRecipeData") newRecipeData: NewRecipeInput,
    // @Ctx("user") user: User,
  ): Promise<Recipe> {
    return this.recipeService.addNew(newRecipeData);
  }

  @Mutation(returns => Boolean)
  // @Authorized(Roles.Admin)
  async removeRecipe(@Arg("id") id: string) {
    try {
      // await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  }
}

// const getSchema = async () => {
//   const schema = await buildSchema({
//     resolvers: [RecipeResolver],
//     emitSchemaFile: true,
//   });
//   return schema;

// }

// let schema = getSchema();

const getTypeDefsAndResolvers  = async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [RecipeResolver],
  });
  return {typeDefs, resolvers};  
}

function startServer() {
  console.log("Getting resolvers.");
  getTypeDefsAndResolvers().then((resp) => {
    const server = new GraphQLServer(resp);
    connect()
      .then( () => {
        console.log("Listening on port 4000...");
        server.start();
      })
      .catch((err) => {
        console.log("Unable to start server, error = " + err);
        process.exit(-1);  
      })

  });
}

startServer();
