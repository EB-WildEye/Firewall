import pool from '../config/db';

export const addIpService = async (ips: string[], mode: 'blacklist' | 'whitelist') => {
   const query = `
       INSERT INTO ips (ip, is_blacklisted, is_whitelisted)
       VALUES ($1, $2, $3)
       RETURNING *;
   `;
   const values = [ips, mode === 'blacklist', mode === 'whitelist'];
   const result = await pool.query(query, values);
   return result.rows;
}