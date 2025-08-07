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

export async function sendEmail(data: EmailFormData): Promise<{ success: boolean; error?: string }> {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
            },
        })

        const content = `
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Asunto: ${data.subject}
Mensaje:
${data.message}
`

        await transporter.sendMail({
            from: `"${data.name}" <${data.email}>`,
            to: process.env.EMAIL_TO!,
            subject: `Nuevo mensaje: ${data.subject}`,
            text: content,
        })

        return { success: true }
    } catch (error: any) {
        console.error("Email error:", error)
        return { success: false, error: error.message }
    }
}
