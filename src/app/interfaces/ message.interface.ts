export class Message {
  constructor(
    public readonly timestamp: number,
    public readonly name: string,
    public readonly text: string
  ) {}
}
