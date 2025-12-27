interface APIResponse{
    id: number
    node_id: string
    html_url: string
}
export interface User extends APIResponse{
    login: string
    avatar_url: string
}

export interface Repo extends APIResponse{
    name: string
    owner: User
    description: string
}