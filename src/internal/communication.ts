import { MessageRequest } from './interfaces';

export class Communication {
  private static readonly handlers: Record<string, Function> = {};
  private static readonly callbacks: Record<number, Function> = {};

  private static readonly parentMessageQueue: MessageRequest[] = [];
  private static readonly childMessageQueue: MessageRequest[] = [];

  private static nextMessageId: number = 0;

  public static get parentOrigin(): string {
    throw new Error('Not implemented');
  }

  public static get parentWindow(): Window {
    throw new Error('Not implemented');
  }

  public static get childOrigin(): string {
    throw new Error('Not implemented');
  }

  public static get childWindow(): Window {
    throw new Error('Not implemented');
  }

  public static registerHandler(name: string, handler: Function): void {
    Communication.handlers[name] = handler;
  }

  public static sendMessageRequestToParent(args: any[], callback: Function): void {
    const messageId = Communication.nextMessageId++;
    Communication.callbacks[messageId] = callback;
  }
}
