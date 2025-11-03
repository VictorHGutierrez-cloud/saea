# 🚀 FRAMEWORK ESCALÁVEL PARA PROJETOS FACTORIAL

## 📋 VISÃO GERAL

Este framework foi criado para padronizar e escalar a criação de propostas comerciais e documentos de projeto para qualquer cliente que implemente Factorial HR. 

**Ponto de Partida:** Transcrições de conversas por IA com o cliente.

**Resultado:** Documentação completa e profissional pronta para apresentação.

---

## 📁 ESTRUTURA DO FRAMEWORK

```
00_FRAMEWORK/                    # Templates e guias reutilizáveis
├── README_FRAMEWORK.md          # Este arquivo - guia principal
├── TEMPLATE_EXTRACAO_DADOS.md   # Template para extrair dados das transcrições
├── TEMPLATE_README_CLIENTE.md    # Template para README de cada cliente
└── CHECKLIST_PROJETO.md         # Checklist para garantir completude

CLIENTES/                        # Pasta para todos os projetos de clientes
├── [NOME_CLIENTE]/              # Pasta individual por cliente
│   ├── 00_Transcricoes/          # Transcrições das conversas por IA
│   ├── 01_Propostas_Comerciais/  # Propostas comerciais (PDFs)
│   ├── 02_Scope_of_Work/        # Documentos SOW (PDFs)
│   ├── 03_Documentos_Word/      # Documentos Word finais
│   ├── 04_Referencias/           # Referências e módulos Factorial
│   ├── 05_Dados_Extraidos/      # Dados estruturados extraídos das transcrições
│   ├── 06_Site_Interativo/      # Site HTML interativo (se aplicável)
│   └── README.md                 # README específico do cliente
```

---

## 🎯 COMO USAR ESTE FRAMEWORK

### PASSO 1: Criar Nova Pasta do Cliente

1. Vá para a pasta `CLIENTES/`
2. Crie uma nova pasta com o nome do cliente: `CLIENTES/[NOME_CLIENTE]/`
3. Crie todas as subpastas necessárias seguindo a estrutura acima

### PASSO 2: Inserir Transcrições

1. Coloque todas as transcrições de conversas por IA na pasta `00_Transcricoes/`
2. Nomeie os arquivos de forma descritiva: `transcricao_reuniao_01.txt`, `transcricao_reuniao_02.txt`, etc.

### PASSO 3: Extrair Dados das Transcrições

1. Abra o arquivo `00_FRAMEWORK/TEMPLATE_EXTRACAO_DADOS.md`
2. Crie uma cópia para o cliente: `05_Dados_Extraidos/DADOS_EXTRAIDOS.md`
3. Preencha o template com base nas transcrições
4. **Este documento será sua fonte de verdade** para criar todos os outros documentos

### PASSO 4: Criar Documentos

Use os dados extraídos para criar:
- **Propostas Comerciais** (na pasta `01_Propostas_Comerciais/`)
- **Scope of Work** (na pasta `02_Scope_of_Work/`)
- **Documentos Word Executivos** (na pasta `03_Documentos_Word/`)
- **Site Interativo** (se necessário, na pasta `06_Site_Interativo/`)

### PASSO 5: Criar README do Cliente

1. Copie `00_FRAMEWORK/TEMPLATE_README_CLIENTE.md`
2. Cole na pasta do cliente como `README.md`
3. Preencha com os dados específicos do projeto

---

## 📊 DADOS ESSENCIAIS A EXTRAIR DAS TRANSCRIÇÕES

1. **Informações do Cliente**
   - Nome da empresa
   - Contato principal
   - Setor/segmento

2. **Informações de Escala**
   - Número atual de colaboradores
   - Projeção futura (se houver crescimento)
   - Múltiplas entidades legais? (sim/não)

3. **Situação Atual**
   - Sistema atual de RH
   - Custos atuais (implementação + mensalidade)
   - Desafios/pain points mencionados

4. **Solução Proposta**
   - Módulos Factorial a serem implementados
   - Custo de implementação
   - Custo mensal (por vida ou fixo)
   - Descontos negociados
   - Prazo de proteção de preço

5. **Cronograma**
   - Data de fechamento do contrato
   - Data de migração inicial
   - Datas de marcos importantes
   - Go-live planejado

6. **Diferenciais e Benefícios**
   - Economia projetada
   - % de redução de custos
   - Benefícios específicos mencionados

---

## ✅ CHECKLIST ANTES DE FINALIZAR UM PROJETO

Use o arquivo `00_FRAMEWORK/CHECKLIST_PROJETO.md` para garantir que todos os documentos estão completos e consistentes.

---

## 🔄 MANTENDO CONSISTÊNCIA

- **Nomenclatura:** Sempre use o padrão `[Tipo]_[Cliente]_[Descricao].[extensão]`
- **Estrutura:** Mantenha a mesma estrutura de pastas para todos os clientes
- **Dados:** Sempre extraia dados para `05_Dados_Extraidos/` antes de criar documentos
- **Referências:** Use `04_Referencias/` para módulos e informações da Factorial

---

## 📞 SUPORTE

Se tiver dúvidas sobre como usar este framework, consulte:
1. Este README
2. `TEMPLATE_EXTRACAO_DADOS.md` - Para entender como extrair dados
3. `TEMPLATE_README_CLIENTE.md` - Para ver um exemplo de README de cliente
4. Um projeto de cliente existente como referência

