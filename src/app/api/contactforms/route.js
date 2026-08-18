import { NextResponse } from 'next/server';
import pool from '@/lib/db';

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contactforms (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      father_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      course_admission VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export async function GET(request) {
  try {
    await ensureTable();
    const result = await pool.query('SELECT * FROM contactforms ORDER BY created_at DESC;');
    return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, fatherName, email, courseAdmission } = body;

    if (!name || !fatherName || !email || !courseAdmission) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await ensureTable();
    const query = `
      INSERT INTO contactforms (name, father_name, email, course_admission)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const result = await pool.query(query, [name, fatherName, email, courseAdmission]);
    return NextResponse.json({ message: 'Created successfully', data: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, fatherName, email, courseAdmission } = body;
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    await ensureTable();
    const query = `
      UPDATE contactforms 
      SET name = $1, father_name = $2, email = $3, course_admission = $4
      WHERE id = $5
      RETURNING *;
    `;
    const result = await pool.query(query, [name, fatherName, email, courseAdmission, id]);

    if (result.rows.length === 0) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ message: 'Updated successfully', data: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    await ensureTable();
    const result = await pool.query('DELETE FROM contactforms WHERE id = $1 RETURNING *;', [id]);
    if (result.rows.length === 0) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ message: 'Deleted successfully', data: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}