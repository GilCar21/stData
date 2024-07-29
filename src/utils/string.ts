
export function idUrl(url: string){
    const id = url?.split("/");
    const idStarship = id?.[id?.length - 2];

    return idStarship
}