// import { NextResponse } from 'next/server';
// import pool from '@/lib/db';

// // Security is handled via proxy/middleware layer
// const verifyAdmin = (request) => {
//   return true;
// };

// // GET: Fetch all admissions records from PostgreSQL
// export async function GET(request) {
//   if (!verifyAdmin(request)) {
//     return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
//   }

//   try {
//     const result = await pool.query('SELECT * FROM admissions ORDER BY created_at DESC;');
//     return NextResponse.json({ success: true, data: result.rows }, { status: 200 });
//   } catch (error) {
//     console.error('Admin fetch error:', error);
//     return NextResponse.json({ error: 'Internal Server Error: ' + error.message }, { status: 500 });
//   }
// }

// // POST: Manually create a new admission record from the admin panel
// export async function POST(request) {
//   if (!verifyAdmin(request)) {
//     return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
//   }

//   try {
//     const body = await request.json();
//     const { 
//       fullName, 
//       name, 
//       fatherName, 
//       email, 
//       phone, 
//       cnic, 
//       dob, 
//       gender, 
//       course, 
//       courseAdmission, 
//       qualification, 
//       address 
//     } = body;

//     const finalName = fullName || name;
//     const finalCourse = course || courseAdmission;

//     if (!finalName || !fatherName || !email || !finalCourse) {
//       return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
//     }

//     let query = '';
//     let values = [];

//     try {
//       query = `
//         INSERT INTO admissions (full_name, father_name, email, phone, cnic, dob, gender, course, qualification, address)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         RETURNING *;
//       `;
//       values = [finalName, fatherName, email, phone || null, cnic || null, dob || null, gender || null, finalCourse, qualification || null, address || null];
      
//       const result = await pool.query(query, values);
//       return NextResponse.json({ success: true, message: 'Created successfully', data: result.rows[0] }, { status: 201 });

//     } catch (err) {
//       query = `
//         INSERT INTO admissions (name, father_name, email, phone, cnic, dob, gender, course_admission, qualification, address)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         RETURNING *;
//       `;
//       values = [finalName, fatherName, email, phone || null, cnic || null, dob || null, gender || null, finalCourse, qualification || null, address || null];

//       const fallbackResult = await pool.query(query, values);
//       return NextResponse.json({ success: true, message: 'Created successfully', data: fallbackResult.rows[0] }, { status: 201 });
//     }

//   } catch (error) {
//     console.error('Admin create error:', error);
//     return NextResponse.json({ error: 'Internal Server Error: ' + error.message }, { status: 500 });
//   }
// }

// // PUT: Update an existing admission record
// export async function PUT(request) {
//   if (!verifyAdmin(request)) {
//     return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
//   }

//   try {
//     const body = await request.json();
//     const { 
//       id, 
//       fullName, 
//       name, 
//       fatherName, 
//       email, 
//       phone, 
//       cnic, 
//       dob, 
//       gender, 
//       course, 
//       courseAdmission, 
//       qualification, 
//       address 
//     } = body;

//     if (!id) {
//       return NextResponse.json({ error: 'Record ID is required for updating.' }, { status: 400 });
//     }

//     const finalName = fullName || name;
//     const finalCourse = course || courseAdmission;

//     const query = `
//       UPDATE admissions 
//       SET 
//         full_name = COALESCE($1, full_name),
//         name = COALESCE($1, name),
//         father_name = COALESCE($2, father_name),
//         email = COALESCE($3, email),
//         phone = COALESCE($4, phone),
//         cnic = COALESCE($5, cnic),
//         dob = COALESCE($6, dob),
//         gender = COALESCE($7, gender),
//         course = COALESCE($8, course),
//         course_admission = COALESCE($8, course_admission),
//         qualification = COALESCE($9, qualification),
//         address = COALESCE($10, address)
//       WHERE id = $11
//       RETURNING *;
//     `;
    
//     const values = [
//       finalName || null, 
//       fatherName || null, 
//       email || null, 
//       phone || null, 
//       cnic || null, 
//       dob || null, 
//       gender || null, 
//       finalCourse || null, 
//       qualification || null, 
//       address || null, 
//       id
//     ];

//     const result = await pool.query(query, values);

//     if (result.rows.length === 0) {
//       return NextResponse.json({ error: 'Admission record not found.' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Updated successfully', data: result.rows[0] }, { status: 200 });

//   } catch (error) {
//     console.error('Admin update error:', error);
//     return NextResponse.json({ error: 'Internal Server Error: ' + error.message }, { status: 500 });
//   }
// }

// // DELETE: Remove an admission record by ID
// export async function DELETE(request) {
//   if (!verifyAdmin(request)) {
//     return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
//   }

//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json({ error: 'Record ID is required.' }, { status: 400 });
//     }

//     const result = await pool.query('DELETE FROM admissions WHERE id = $1 RETURNING *;', [id]);

//     if (result.rows.length === 0) {
//       return NextResponse.json({ error: 'Admission record not found.' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Deleted successfully!' }, { status: 200 });

//   } catch (error) {
//     console.error('Admin delete error:', error);
//     return NextResponse.json({ error: 'Internal Server Error: ' + error.message }, { status: 500 });
//   }
// }