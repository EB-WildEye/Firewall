// define the structure of firewall rules & centralizes all custom data types
export type RuleMode = 'blacklist' | 'whitelist';

export interface Rule {
  id: number;
  value: string | number;
  active: boolean;
}

export interface Rules {
  ips: {
    blacklist: Rule[];
    whitelist: Rule[];
  };
  urls: {
    blacklist: Rule[];
    whitelist: Rule[];
  };
  ports: {
    blacklist: Rule[];
    whitelist: Rule[];
  };
}