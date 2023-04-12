export type ListItem = {
    id: string
    title: string
    completed: boolean
}

export const initContext = {
    list: [] as ListItem[],
    setList: (list: ListItem[]) => {},
    title: '',
    setTitle: (title: string): void => {},
    handleDelete: (id: string): void => {},
    setUpdate: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ): void => {},
    handleSubmit: (event: React.FormEvent<HTMLFormElement>): void => {},
}
