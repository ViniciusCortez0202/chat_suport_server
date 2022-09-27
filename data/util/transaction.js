import { promisify } from 'util';
import connection from "../connection.js";


export default async function transaction(data, func) {

    const transaction = promisify(connection.beginTransaction).bind(connection);
    const commit = promisify(connection.commit).bind(connection);
    const rollBack = promisify(connection.rollback).bind(connection);

    try {
        await transaction()
        await func(data);
        await commit()
    } catch (error) {
        await rollBack();
        throw error;
    }
}