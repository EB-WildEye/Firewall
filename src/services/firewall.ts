import { Rule, RuleMode, Rules } from '../interfaces/firewall';

// TODO: replace to data base insted of array

const rules: Rules = {
  ips: { blacklist: [], whitelist: [] },
  urls: { blacklist: [], whitelist: [] },
  ports: { blacklist: [], whitelist: [] },
};

let nextId: number = 1;

// should be async function when actually connect to db
export function addRules(type: 'ips' | 'urls' | 'ports', values: (string | number)[], mode: RuleMode) {
  const newRules: Rule[] = values.map((value: string | number) => ({
    id: nextId++,
    value,
    active: true,
  }));
  rules[type][mode].push(...newRules);
  return { type, mode, values, status: 'success' };
}

export function removeRules(type: 'ips' | 'urls' | 'ports', values: (string | number)[], mode: RuleMode) {
  const ruleSet: Rule[] = rules[type][mode];
  rules[type][mode] = ruleSet.filter((rule: Rule) => !values.includes(rule.value));
  return { type, mode, values, status: 'success' };
}

export function getAllRules(): Rules {
  return rules;
}

export function toggleRuleStatus(updatedData: {
  ips?: { ids: number[], mode: RuleMode, active: boolean };
  urls?: { ids: number[], mode: RuleMode, active: boolean };
  ports?: { ids: number[], mode: RuleMode, active: boolean };
}) {
  const updatedRules: Rule[] = [];

  for (const type of ['ips', 'urls', 'ports'] as ('ips' | 'urls' | 'ports')[]) {
    const data = updatedData[type];
    if (data && data.ids && data.mode) {
      const ruleSet: Rule[] = rules[type][data.mode];
      for (const id of data.ids) {
        const rule: Rule | undefined = ruleSet.find((r: Rule) => r.id === id);
        if (rule) {
          rule.active = data.active;
          updatedRules.push(rule);
        }
      }
    }
  }

  return updatedRules;
}