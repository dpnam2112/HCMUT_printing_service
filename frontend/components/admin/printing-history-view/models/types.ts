export type HistoryDataObject = {
    id: string;
    username: string;
    time: Date;
    location: {
        facility: string;
        building: string;
        room: string;
    };
    file_name:string;
    pages: number;
    size: number;
    copys:number
    type: string;
    //complete: boolean;
  };
export type SortType = {
    field:{
        asc: string,
        desc: string,
    };
};


export type HistoryViewProps = HistoryDataObject & {
    // isSelectedDelete?: boolean;
};
  