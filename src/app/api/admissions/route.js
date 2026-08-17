import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, fatherName, email, courseAdmission } = body;

    // Validate fields
    if (!name || !fatherName || !email || !courseAdmission) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Automatically create the table if it doesn't exist yet
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        father_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        course_admission VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert query into PostgreSQL
    const query = `
      INSERT INTO admissions (name, father_name, email, course_admission)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, fatherName, email, courseAdmission];

    const result = await pool.query(query, values);

    return NextResponse.json(
      { message: 'Application submitted successfully', data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database insertion error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM admissions ORDER BY created_at DESC;');
    return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
  } catch (error) {
    console.error('Database fetch error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}