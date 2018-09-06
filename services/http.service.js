export const HTTPMethod = {
    'GET': 0,
    'POST': 1
}

export class HTTP {
    static get(URL) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest()

            request.onload = () => resolve(request.response)
            request.onerror = (err) => reject(err)

            request.open(HTTPMethod.GET, URL)
            request.send()
        })
    }

    static post(URL, body) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest()

            request.onload = () => resolve(request.response)
            request.onerror = (err) => reject(err)

            request.open(HTTPMethod.GET, URL)
            request.send(body)
        })
    }
}

