export interface IServices {
  lien:string,
  nom: string,
  version:string,
  description: string,
  miniature:string
}
export interface ServerResponse {
  data: ServerData

}
interface ServerData {
  data:{
    data:IServices[]
    isLoading:boolean
    error:boolean
    status:number
  }
}