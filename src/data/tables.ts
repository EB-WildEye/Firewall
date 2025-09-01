import pool from '../config/db';

// IPs
const createIpTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS ips (
            id SERIAL PRIMARY KEY,
            ip VARCHAR(45) NOT NULL UNIQUE,
            is_blacklisted BOOLEAN NOT NULL DEFAULT FALSE,
            is_whitelisted BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log('-~- IP table is created or already exists -~-');
    await pool.query(query);
};

// Ports
const createPortTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS ports (
            id SERIAL PRIMARY KEY,
            port_number INT NOT NULL UNIQUE,
            is_blacklisted BOOLEAN NOT NULL DEFAULT FALSE,
            is_whitelisted BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log('-~- Port table is created or already exists -~-');
    await pool.query(query);
};

// URLs
const createURLTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS urls (
            id SERIAL PRIMARY KEY,
            url VARCHAR(2048) NOT NULL UNIQUE,
            is_blacklisted BOOLEAN NOT NULL DEFAULT FALSE,
            is_whitelisted BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log('-~- URL table is created or already exists -~-');
    await pool.query(query);
};

// Rules 
const createRulesTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS rules (
        id SERIAL PRIMARY KEY,
        rule_set JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    console.log('-~- Rules table is created or already exists -~-');
    await pool.query(query);
};

// create all tables
export const createAllTables = async () => {
    try {
        await createIpTable();
        await createPortTable();
        await createURLTable();
        await createRulesTable();
        console.log('-~- All tables created successfully -~-');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};    

