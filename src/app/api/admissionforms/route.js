import { NextResponse } from 'next/server';
import pool from '@/lib/db';

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admissionforms (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255),
      name VARCHAR(255),
      father_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      cnic VARCHAR(50),
      dob DATE,
      gender VARCHAR(50),
      course VARCHAR(255),
      course_admission VARCHAR(255),
      qualification VARCHAR(255),
      address TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export async function GET(request) {
  try {
    await ensureTable();
    const result = await pool.query('SELECT * FROM admissionforms ORDER BY created_at DESC;');
    return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, name, fatherName, email, phone, cnic, dob, gender, course, courseAdmission, qualification, address } = body;
    const finalName = fullName || name;
    const finalCourse = course || courseAdmission;

    if (!finalName || !fatherName || !email || !finalCourse) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    await ensureTable();
    const query = `
      INSERT INTO admissionforms (full_name, father_name, email, phone, cnic, dob, gender, course, qualification, address)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `;
    const values = [finalName, fatherName, email, phone || null, cnic || null, dob || null, gender || null, finalCourse, qualification || null, address || null];
    const result = await pool.query(query, values);
    return NextResponse.json({ message: 'Created successfully', data: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, fullName, name, fatherName, email, phone, cnic, dob, gender, course, courseAdmission, qualification, address } = body;
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    const finalName = fullName || name;
    const finalCourse = course || courseAdmission;

    await ensureTable();
    const query = `
      UPDATE admissionforms 
      SET full_name = $1, name = $1, father_name = $2, email = $3, phone = $4, cnic = $5, dob = $6, gender = $7, course = $8, course_admission = $8, qualification = $9, address = $10
      WHERE id = $11
      RETURNING *;
    `;
    const values = [finalName, fatherName, email, phone || null, cnic || null, dob || null, gender || null, finalCourse, qualification || null, address || null, id];
    const result = await pool.query(query, values);

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
    const result = await pool.query('DELETE FROM admissionforms WHERE id = $1 RETURNING *;', [id]);
    if (result.rows.length === 0) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ message: 'Deleted successfully', data: result.rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}