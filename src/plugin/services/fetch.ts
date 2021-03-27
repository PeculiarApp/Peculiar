export async function fetchIcon(type: string, name:string) {
    let response = await fetchFromBackend("icon", "GET", "text", {
        "Icon-Type": type,
        "Icon-Name": name
    })
}

async function fetchFromBackend(path:string, method: string, type:string, headers: HeadersInit) {
    let reqHeaders: HeadersInit = {
        "Access-Control-Request-Method": method.toUpperCase(),
        "":"",
        ...headers
    }

    let response =  await fetch(`http://127.0.0.1:3000/${path}`, {
        method: method.toUpperCase(),
        headers: reqHeaders
    })

    if (type === "text")
        return response.text();
    
    if (type === "json")
        return response.json();
}