export interface Mutant {
  code: number;
  status: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: any;
  };
}

export interface Result {
  comics: {
    available: number;
    collectionURI: string;
    description: string;
  };
  events: {
    available: number;
    collectionURI: string;
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
    returned: number;
  };
  id: number;
  modified: Date;
  name: string;
  resourceURI: string;
  series: {
    available: number;
    collectionURI: string;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [
      {
        name: string;
        resourceURI: string;
        type: string;
      }
    ];
    returned: number;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: [
    {
      type: string;
      url: string;
    }
  ];
}
