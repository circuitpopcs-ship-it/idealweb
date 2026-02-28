import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message?: string;
}

// Configurar o transporte de email
// Você pode usar Gmail, SendGrid, ou outro serviço
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const handler: Handler = async (event) => {
  // Apenas POST é permitido
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse do corpo da requisição
    const data: FormData = JSON.parse(event.body || '{}');

    // Validação básica
    if (!data.name || !data.email || !data.service) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios faltando' }),
      };
    }

    // Email para o administrador
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'idealwebmkt@gmail.com',
      subject: `Novo contato de ${data.name}`,
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        <p><strong>Serviço de Interesse:</strong> ${data.service}</p>
        ${data.message ? `<p><strong>Mensagem:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    };

    // Email de confirmação para o cliente
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Recebemos sua mensagem - IdealWeb',
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Olá ${data.name},</p>
        <p>Recebemos sua mensagem com sucesso. Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.</p>
        <p>Enquanto isso, fique à vontade para nos contatar pelo telefone: <strong>(11) 99999-9999</strong></p>
        <p>Atenciosamente,<br>Equipe IdealWeb</p>
      `,
    };

    // Enviar ambos os emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email enviado com sucesso!' 
      }),
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erro ao enviar email',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }),
    };
  }
};

export { handler };
