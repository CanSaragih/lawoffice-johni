import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { CreateEmailResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, subject, message } = body;

    const data: CreateEmailResponse = await resend.emails.send({
      from: "Law Office Jhoni Purba <no-reply@jhonipurba.com>",
      to: "pengacara.jhonipurba@gmail.com",
      subject: `Pesan baru dari ${name} - ${subject}`,
      html: `
                <h2>Pesan Baru dari Form Kontak</h2>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subjek:</strong> ${subject}</p>
                <p><strong>Pesan:</strong></p>
                <p>${message}</p>
                `,
    });

    if (data.error) {
      return NextResponse.json(
        { success: false, error: data.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
