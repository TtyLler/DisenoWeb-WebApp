export interface Usuarios {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Datum[];
    support:     Support;
}

export interface Datum {
    id:         boolean;
    first_name: string;
    last_name:  string;
    mesa:     number;
}

export interface Support {
    url:  string;
    text: string;
}
