import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  // Apenas POST é permitido
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' }),
    };
  }

  try {
    const { name, email, phone, company, service } = JSON.parse(event.body || '{}');

    // Validação básica
    if (!name || !email || !service) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios faltando' }),
      };
    }

    // Configurar o transporte de email usando Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASSWORD,
      },
    });

    // Email para você (proprietário)
    const mailOptions = {
      from: 'contato@idealweb.com.br',
      to: 'contato@idealweb.com.br',
      subject: `Novo Lead - ${name}`,
      html: `
        <h2>Novo Lead Recebido!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
        <p><strong>Serviço de Interesse:</strong> ${service}</p>
        <hr>
        <p>Responda diretamente para: ${email}</p>
      `,
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    // Email de confirmação para o lead
    const confirmationEmail = {
      from: 'contato@idealweb.com.br',
      to: email,
      subject: 'Recebemos sua mensagem - IdealWeb',
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Olá ${name},</p>
        <p>Recebemos sua mensagem com sucesso. Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.</p>
        <p><strong>Detalhes da sua solicitação:</strong></p>
        <ul>
          <li><strong>Serviço:</strong> ${service}</li>
          <li><strong>Empresa:</strong> ${company || 'Não informada'}</li>
          <li><strong>Telefone:</strong> ${phone || 'Não informado'}</li>
        </ul>
        <p>Qualquer dúvida, responda este email.</p>
        <br>
        <p>Atenciosamente,<br><strong>Equipe IdealWeb</strong></p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email enviado com sucesso!' }),
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar email' }),
    };
  }
};

export { handler };
