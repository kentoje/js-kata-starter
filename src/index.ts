export interface AgendaEvent {
  id: string
  title: string
  date: string
  description: string
}

export interface IdGenerator {
  (): string
}

// export type IdGenerator = () => string

export function createAgendaEvent(
  generator: IdGenerator,
  title: string,
  date: string,
  description: string,
): AgendaEvent {
  return {
    id: generator(),
    title,
    date,
    description,
  }
}
