export interface GameCommand<
  ParameterType extends Record<string, any>,
  ReturnType extends any = void
> {
  commandName: string;
  parameters: ParameterType;
}
