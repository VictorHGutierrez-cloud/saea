# ⚡ GUIA RÁPIDO - COMO CRIAR UM NOVO PROJETO

Este guia rápido mostra os passos essenciais para criar um novo projeto de cliente usando o framework.

---

## 🎯 PASSO A PASSO (5 MINUTOS)

### 1️⃣ Criar Estrutura de Pastas (1 minuto)

```bash
# Criar pasta do cliente
mkdir CLIENTES/[NOME_CLIENTE]

# Criar subpastas
cd CLIENTES/[NOME_CLIENTE]
mkdir 00_Transcricoes
mkdir 01_Propostas_Comerciais
mkdir 02_Scope_of_Work
mkdir 03_Documentos_Word
mkdir 04_Referencias
mkdir 05_Dados_Extraidos
mkdir 06_Site_Interativo
```

**OU** simplesmente copie a estrutura de um cliente existente!

---

### 2️⃣ Adicionar Transcrições (1 minuto)

- Coloque todos os arquivos de transcrição na pasta `00_Transcricoes/`
- Nomeie de forma clara: `transcricao_reuniao_01.txt`, `transcricao_reuniao_02.txt`, etc.

---

### 3️⃣ Extrair Dados (10-15 minutos)

1. Abra: `00_FRAMEWORK/TEMPLATE_EXTRACAO_DADOS.md`
2. Copie o conteúdo
3. Crie: `CLIENTES/[NOME_CLIENTE]/05_Dados_Extraidos/DADOS_EXTRAIDOS.md`
4. Cole o template e preencha com base nas transcrições

**DICA:** Leia as transcrições e vá preenchendo o template. Este será seu "mapa" para criar todos os outros documentos.

---

### 4️⃣ Criar README do Cliente (5 minutos)

1. Abra: `00_FRAMEWORK/TEMPLATE_README_CLIENTE.md`
2. Copie o conteúdo
3. Crie: `CLIENTES/[NOME_CLIENTE]/README.md`
4. Preencha com os dados extraídos no passo anterior

---

### 5️⃣ Criar Documentos (varia conforme necessidade)

Use os dados em `05_Dados_Extraidos/DADOS_EXTRAIDOS.md` para criar:

- **Propostas Comerciais** → pasta `01_Propostas_Comerciais/`
- **Scope of Work** → pasta `02_Scope_of_Work/`
- **Documentos Word** → pasta `03_Documentos_Word/`
- **Site Interativo** (opcional) → pasta `06_Site_Interativo/`

---

## 📋 CHECKLIST RÁPIDO

Antes de considerar o projeto completo, verifique:

- [ ] Transcrições estão organizadas
- [ ] Dados foram extraídos e estão em `05_Dados_Extraidos/`
- [ ] README do cliente foi criado
- [ ] Pelo menos uma proposta comercial foi criada
- [ ] Pelo menos um SOW foi criado
- [ ] Números financeiros foram validados
- [ ] Cronograma está coerente

---

## 🆘 PRECISA DE AJUDA?

1. **Como extrair dados?** → Veja `TEMPLATE_EXTRACAO_DADOS.md`
2. **Como criar README?** → Veja `TEMPLATE_README_CLIENTE.md`
3. **O que verificar?** → Veja `CHECKLIST_PROJETO.md`
4. **Exemplo completo?** → Veja um projeto existente em `CLIENTES/`

---

## 💡 DICAS IMPORTANTES

1. **Sempre comece extraindo os dados** - Isso evita erros e inconsistências
2. **Use o README como índice** - Ele ajuda a navegar pelo projeto depois
3. **Mantenha nomenclatura consistente** - Facilita encontrar arquivos depois
4. **Valide números financeiros** - Um erro aqui pode comprometer tudo
5. **Referencie as transcrições** - Anote de onde veio cada informação

---

**Tempo Total Estimado:** 20-30 minutos para estrutura básica + tempo para criar documentos específicos

