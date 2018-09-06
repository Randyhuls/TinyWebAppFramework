export const HTTPMethod = {
    'GET': 0,
    'POST': 1
}

export class HTTP {

    static get(URL) {
        return HTTP.request(HTTPMethod.GET, URL)
    }

    static post(URL, body) {
        return HTTP.request(HTTPMethod.POST, URL, body)
    }

    static request(method, URL, body, headers) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest()

            request.onload = () => resolve(request.response)
            request.onerror = (err) => reject(err)

            if (headers) {
                headers.forEach((header) => {
                    for (prop in header) request.setRequestHeader(prop, header[prop])
                })
            }

            request.open(method, URL)
            request.send(body)
        })
    }
}
