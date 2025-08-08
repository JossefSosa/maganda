// app/actions/sendEmail.ts
'use server'

import nodemailer from "nodemailer"

export type EmailFormData = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

function generateEmailHTML(data: EmailFormData): string {
    return `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Nuevo mensaje</title>
  <style>
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#222;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:24px;">
        <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="padding:20px 24px;background:#111827;color:#fff;">
              <h1 style="margin:0;font-size:18px;">Nuevo mensaje</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 8px;font-size:14px;"><strong>Nombre:</strong> ${data.name}</p>
              <p style="margin:0 0 8px;font-size:14px;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin:0 0 8px;font-size:14px;"><strong>Teléfono:</strong> ${data.phone}</p>
              <p style="margin:0 0 8px;font-size:14px;"><strong>Asunto:</strong> ${data.subject}</p>
              <hr style="border:none;border-top:1px solid #eef2f7;margin:12px 0;">
              <p style="margin:0;font-size:14px;white-space:pre-wrap;color:#374151;"><strong>Mensaje:</strong><br>${data.message}</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 24px;background:#f8fafc;color:#6b7280;font-size:13px;">
              <p style="margin:0;">Este mensaje fue enviado desde el formulario de contacto.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

export async function sendEmail(data: EmailFormData): Promise<{ success: boolean; error?: string }> {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
            },
        })

        console.log('data.subject :', data.subject);
        console.log('data :', data);
        await transporter.sendMail({
            from: `"${data.name}" <${data.email}>`,
            to: process.env.EMAIL_TO!,
            subject: `Nuevo mensaje: ${data.subject}`,
            text: `
        Nombre: ${data.name}
        Email: ${data.email}
        Teléfono: ${data.phone}
        Asunto: ${data.subject}
        ${data.message}
                    `,
            html: generateEmailHTML(data),
        })

        return { success: true }
    } catch (error: any) {
        console.error("Email error:", error)
        return { success: false, error: error.message }
    }
}
