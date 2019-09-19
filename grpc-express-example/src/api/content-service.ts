
export class ContentService {

    getContent(name: string) {
        return `I will serve content of ${name ? name : "[PLS GIVE QUERY LIKE name='emre']"}`;
    }

}
