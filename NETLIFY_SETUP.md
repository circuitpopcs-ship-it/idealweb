# Configuração do Formulário com Netlify Functions e Brevo

## Como Funciona

O formulário de contato usa **Netlify Functions** para enviar emails de forma segura via **Brevo SMTP**. Isso permite usar seu email profissional `contato@idealweb.com.br` com total profissionalismo.

## Passo a Passo para Configurar

### 1. Obter Credenciais SMTP do Brevo

1. Acesse sua conta Brevo: https://app.brevo.com
2. Vá para **Settings → SMTP & API**
3. Na seção **SMTP**, você verá:
   - **SMTP Server**: smtp-relay.brevo.com
   - **Port**: 587
   - **Login**: seu email ou chave SMTP
   - **Password**: sua senha SMTP

4. Se não tiver credenciais SMTP geradas:
   - Clique em **Generate SMTP key**
   - Copie o **Login** e **Password** gerados

### 2. Configure as Variáveis de Ambiente no Netlify

1. Acesse seu site no Netlify
2. Vá para **Site Settings → Build & Deploy → Environment**
3. Clique em **Edit Variables**
4. Adicione as seguintes variáveis:
   - **BREVO_SMTP_USER**: seu login SMTP do Brevo (geralmente seu email)
   - **BREVO_SMTP_PASSWORD**: sua senha SMTP do Brevo

### 3. Faça Deploy

1. Faça push do código para seu repositório GitHub
2. Conecte o repositório ao Netlify (se ainda não fez)
3. Netlify vai fazer deploy automaticamente
4. As Netlify Functions serão criadas automaticamente

### 4. Teste o Formulário

1. Acesse seu site no Netlify
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Você deve receber um email em **contato@idealweb.com.br**

## Estrutura de Arquivos

```
netlify/
  functions/
    send-email.ts    ← Função que envia os emails via Brevo
netlify.toml         ← Configuração do Netlify
```

## O que Acontece Quando Alguém Envia o Formulário

1. O frontend envia os dados para `/.netlify/functions/send-email`
2. A função Netlify recebe os dados
3. Usa suas credenciais Brevo SMTP para enviar um email para **contato@idealweb.com.br**
4. Também envia um email de confirmação para o lead usando seu email profissional
5. Retorna uma mensagem de sucesso para o usuário

## Vantagens de Usar Brevo

✅ **Email Profissional** - Usa seu domínio `contato@idealweb.com.br`  
✅ **Rastreamento** - Veja quando emails são abertos e clicados  
✅ **Confiabilidade** - Brevo é especialista em entrega de emails  
✅ **Integração** - Você já usa Brevo, então é tudo integrado  
✅ **Segurança** - Credenciais seguras via Netlify Environment Variables  

## Troubleshooting

### "Erro ao enviar mensagem"

**Possíveis causas:**

1. **Variáveis de ambiente não configuradas** - Verifique se BREVO_SMTP_USER e BREVO_SMTP_PASSWORD estão definidas no Netlify
2. **Credenciais incorretas** - Certifique-se de copiar corretamente do Brevo
3. **Email não verificado no Brevo** - Verifique se `contato@idealweb.com.br` está verificado no Brevo

### "Acesso negado ao Brevo"

Se receber erro de autenticação:

1. Verifique as credenciais SMTP no Brevo
2. Gere novas credenciais se necessário
3. Atualize as variáveis no Netlify

### Email não chega

1. Verifique a pasta de Spam
2. Verifique os logs do Brevo em **Transactional → Logs**
3. Confirme que o email está verificado no Brevo

## Notas Importantes

- As Netlify Functions são **gratuitas** até 125.000 invocações/mês
- Brevo oferece **300 emails/dia grátis** (plano gratuito)
- Os dados do formulário são enviados com segurança via HTTPS
- Você pode rastrear todos os emails no painel Brevo

## Próximos Passos

1. **Automatizar respostas** - Configure templates automáticos no Brevo
2. **Adicionar à lista de contatos** - Integre com sua lista de contatos Brevo
3. **Rastreamento de conversão** - Configure pixels de rastreamento

## Suporte

Se tiver problemas:

1. Verifique os logs da Netlify Function em **Site Settings → Functions**
2. Verifique os logs do Brevo em **Transactional → Logs**
3. Confirme que as variáveis de ambiente estão corretas
4. Teste as credenciais SMTP diretamente no Brevo
