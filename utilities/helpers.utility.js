export class Helpers {

    static generateId() {
        function chunk() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return chunk()+'-'+chunk()+'-'+chunk()+'-'+chunk()+'-'+chunk()+'-'+new Date().getTime()
    }

}