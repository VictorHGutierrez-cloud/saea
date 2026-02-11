// ============================================
// SAEA - CENTRAL DATA FILE
// Updated with NEW pricing (Core R$9,70, Recruitment R$780/CNPJ) - 1.000 vidas
// ============================================

export const CLIENT = {
  name: 'Grupo SAEA',
  fullName: 'Sociedade Agostiniana de Educação e Assistência',
  segment: 'Educação - Rede de Colégios',
  employees: 2300,
  cnpjs: 27,
  units: ['Sede', 'Mendel (~800+)', 'São José'],
  location: 'São Paulo - Zona Leste',
  hrTeam: ['Thays (Geral)', 'Fabiana (Sede)', 'Marisa (São José)', 'Stephanie (Mendel)'],
  president: 'Padre José',
}

// ---- REAL PROPOSAL DATA ----
export const PROPOSAL = {
  date: '25/10/2025',
  cnpj: '39.352.598/0098',
  plans: [
    {
      name: 'Employee Platform / Core',
      modules: 'Base Factorial, Pesquisas, Gestão de Treinamentos',
      listPrice: 9.70,
      qty: 1000,
      discount: 0,
      subtotal: 9700.00,
      period: '2026-01-10 a 2026-10-10',
      months: 9,
    },
    {
      name: 'Recrutamento (Unlimited)',
      modules: 'ATS, Banco de Talentos, Página de Carreiras',
      listPrice: 780.00,
      qty: 5,
      discount: 0,
      subtotal: 3900.00,
      period: '2026-01-10 a 2026-10-10',
      months: 9,
    },
  ],
  onboarding: {
    name: 'Sessão Onboarding',
    hours: 10,
    total: 10000,
    start: '2025-10-06',
  },
}

export const INVESTMENT = {
  monthly: 13600.00, // 1.000 vidas × R$9,70 + 5 CNPJs × R$780
  onboarding: 10000,
  listPricePerEmployee: 9.70,
  effectivePricePerEmployee: 9.70, // Preço final, sem desconto
  discount: '0%',
  recruitmentModule: 3900.00, // 5 CNPJs × R$780
  priceProtection: '9 meses',
  contractMonths: 9,
  employeesCovered: 1000, // Vidas contratadas
}

// ---- SAVINGS (recalculated for R$13,600/month investment - 1.000 vidas) ----
export const SAVINGS = [
  {
    id: 'catho',
    label: 'Eliminação do Portal Catho',
    monthly: 1400,
    description: 'Portal de recrutamento Catho não será mais necessário (confirmado: R$1.400/mês).',
    calculation: 'Custo direto eliminado. Confirmado em reunião com Thays.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'triagem',
    label: 'Automação da Triagem de CVs',
    monthly: 5000,
    description: 'IA lê currículos e traz correspondência automática. Antes: 100+ CVs/dia x 5min cada, um a um.',
    calculation: '7,3h/dia economizadas x R$32/hora x 22 dias úteis.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'comunicacao',
    label: 'Automação de Comunicações',
    monthly: 4000,
    description: 'Templates em massa substituem WhatsApp individual. Retorno automático a 100% dos candidatos.',
    calculation: '200 contatos/dia × comunicação individual eliminada. 4 pessoas × 3h/dia economizadas.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'produtividade',
    label: 'Produtividade da Equipe de RH',
    monthly: 6000,
    description: 'Equipe de 4 profissionais redireciona ~30% do tempo de tarefas manuais para atividades estratégicas.',
    calculation: '4 FTEs × R$5.000 salário (com encargos ~R$8.550) × 30% tempo redireccionado ÷ 2 (conservador).',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'vagas',
    label: 'Redução do Custo de Vagas Abertas',
    monthly: 8000,
    description: 'De 4 meses para 45 dias. 80+ reposições/ano + vagas correntes. Menos horas extras, menos sobrecarga.',
    calculation: '100 posições/ano × 75 dias economizados × custo diário de produtividade perdida.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'documentos',
    label: 'Gestão Documental e Assinatura Eletrônica',
    monthly: 5500,
    description: 'Banco de horas, contratos, termos para 900+ colaboradores digitalizados. Assinatura eletrônica ilimitada inclusa.',
    calculation: 'Eliminação de impressão + valor de ferramenta standalone (DocuSign ~R$3.500 para 2.300 colaboradores).',
    phase: 2,
    color: 'secondary',
  },
  {
    id: 'compliance',
    label: 'Compliance e Redução de Risco Jurídico',
    monthly: 2000,
    description: 'LGPD automatizado, registros digitais assinados, evidências para processos trabalhistas.',
    calculation: 'Redução de passivo jurídico. 1 processo evitado/ano = R$24.000 economia.',
    phase: 3,
    color: 'danger',
  },
]

export const TOTAL_SAVING_MONTHLY = SAVINGS.reduce((a, s) => a + s.monthly, 0) // 31900 (removido avaliação de desempenho -R$3.000)

export const ROI = (() => {
  const netMonthly = TOTAL_SAVING_MONTHLY - INVESTMENT.monthly // 18300.00
  const annualInvest = INVESTMENT.monthly * 12 + INVESTMENT.onboarding // 173200.00
  const annualSavings = TOTAL_SAVING_MONTHLY * 12 // 382800
  const annualROI = ((annualSavings - annualInvest) / annualInvest * 100).toFixed(1) // ~120.9

  const invest24 = INVESTMENT.monthly * 24 + INVESTMENT.onboarding // 336400.00
  const savings24 = (() => {
    // ramp-up: 1m=catho, 2-3=recruitment, 4-6=+onboard, 7+=all (sem avaliação de desempenho)
    let s = 1400 + 28400 * 2 + 33900 * 3 + TOTAL_SAVING_MONTHLY * 18
    return s
  })()
  const net24 = savings24 - invest24

  // payback calculation
  let cumI = INVESTMENT.onboarding, cumS = 0, payback = 0
  for (let m = 1; m <= 24; m++) {
    cumI += INVESTMENT.monthly
    cumS += savingsAtMonth(m)
    if (cumS >= cumI && payback === 0) payback = m
  }

  return {
    netMonthly: Math.round(netMonthly),
    annualROI,
    paybackMonths: payback || 5,
    net12: Math.round(annualSavings - annualInvest),
    net24: Math.round(net24),
    totalSavings24: Math.round(savings24),
    totalInvest24: Math.round(invest24),
  }
})()

export const PAIN_POINTS = [
  {
    icon: '1',
    title: 'Triagem 100% Manual',
    quote: '"Entro um por um, separo quem é professor de história, quem é de geografia..."',
    detail: 'Cada currículo era aberto, lido e classificado individualmente do e-mail.',
  },
  {
    icon: '2',
    title: 'Sem Retorno aos Candidatos',
    quote: '"Eu não consigo dar retorno para todos... não é maldade, é porque não sabemos nem onde está o currículo."',
    detail: 'Candidatos ficavam sem resposta por semanas ou meses.',
  },
  {
    icon: '3',
    title: 'Sem Processos Formais',
    quote: '"A gente não tem processo nenhum. É do zero."',
    detail: 'Sem descrição de vagas, sem fluxo de aprovação, sem padronização.',
  },
  {
    icon: '4',
    title: 'Assinaturas Manuais (900+ pessoas)',
    quote: '"Eu ainda assino banco de horas e folhas de ponto mensal de 900 colaboradores."',
    detail: 'Toda documentação era impressa, assinada fisicamente e armazenada.',
  },
  {
    icon: '5',
    title: 'Comunicação Descentralizada',
    quote: '"Mando pelo WhatsApp, às vezes esqueço, o candidato não respondeu, já perdi que ele respondeu."',
    detail: 'Todo contato com candidatos via WhatsApp pessoal, sem rastreamento.',
  },
  {
    icon: '6',
    title: '80 Demissões + 80 Reposições / Ano',
    quote: '"Nós temos programadas 80 demissões. Com 80 demissões, temos 80 reposições."',
    detail: 'Volume massivo de contratações processado manualmente.',
  },
]

export const VOLUME_DATA = {
  labels: ['CVs recebidos\n(7 dias)', 'E-mails/dia', 'Meses p/ fechar\nvaga', 'Demissões\nprogramadas', 'Assinaturas\nmanuais/mês'],
  values: [1564, 200, 4, 80, 900],
  units: ['currículos', 'e-mails', 'meses', 'demissões', 'assinaturas'],
}

export const PHASES = [
  {
    id: 1,
    title: 'Recrutamento e Seleção',
    label: 'Fase 1',
    saving: 28400,
    color: '#07A2AD',
    colorClass: 'brand-primary',
    timing: 'Mês 1-3',
    features: [
      'ATS centralizado para todas as unidades',
      'Banco de Talentos com IA (triagem automática)',
      'Página de Carreiras personalizada',
      'Integração LinkedIn + 25 portais',
      'Templates de comunicação em massa',
      'Fluxo de requisição e aprovação de vagas',
      'Dashboard de KPIs (tempo de contratação, funil)',
      'Vagas ilimitadas, sem custo adicional',
    ],
    savingsNote: 'Catho (-R$1.400) + Triagem CV (-R$5.000) + Comunicação (-R$4.000) + Produtividade RH (-R$6.000) + Vagas rápidas (-R$8.000) + Recrutamento fixo (-R$4.000)',
  },
  {
    id: 2,
    title: 'Onboarding Digital',
    label: 'Fase 2',
    saving: 5500,
    color: '#FFB940',
    colorClass: 'brand-secondary',
    timing: 'Mês 4-6',
    features: [
      'Trilhas de onboarding por tipo de cargo',
      'Coleta digital de documentos pré-admissão',
      'Assinatura eletrônica de contratos (ilimitada)',
      'Controle de período de experiência',
      'Banco de horas digital com assinatura',
      'Portal do colaborador (intranet)',
      'Vídeos de treinamento integrados',
    ],
    savingsNote: 'Gestão documental + Assinatura eletrônica (-R$5.500)',
  },
  {
    id: 3,
    title: 'Compliance e Analytics',
    label: 'Fase 3',
    saving: 2000,
    color: '#FF355E',
    colorClass: 'brand-danger',
    timing: 'Mês 7-9',
    features: [
      'Pesquisas de pulso e clima organizacional',
      'Compliance LGPD automatizado',
      'Relatórios de RH e Analytics',
      'Gestão de Treinamentos',
    ],
    savingsNote: 'Compliance (-R$2.000)',
  },
]

export const TIMELINE = [
  { month: '1', title: 'Kickoff e Configuração', desc: 'Criação das bases, CNPJs, locais de trabalho. Configuração da página de carreiras e integração com LinkedIn.', badge: 'Início da economia Catho: -R$1.400/mês', color: '#07A2AD' },
  { month: '2-3', title: 'Recrutamento Operacional', desc: 'Vagas publicadas, banco de talentos ativo, IA triando currículos, comunicação automatizada funcionando.', badge: 'Economia sobe para R$28.400/mês', color: '#07A2AD' },
  { month: '4-6', title: 'Onboarding Digital Ativo', desc: 'Trilhas de onboarding por cargo, assinatura eletrônica de contratos, coleta digital de documentos.', badge: 'Economia sobe para R$33.900/mês', color: '#FFB940' },
  { month: '7-9', title: 'Compliance e Analytics', desc: 'Compliance LGPD automatizado, pesquisas de clima e relatórios de RH em produção.', badge: 'Economia total: R$31.900/mês', color: '#FF355E' },
  { month: '~7', title: 'PAYBACK - Retorno Alcançado', desc: 'Todos os custos acumulados (incluindo onboarding) foram recuperados pelas economias geradas.', badge: null, color: '#07A2AD', isPayback: true },
  { month: '24', title: 'Resultado em 24 Meses', desc: `Economia líquida acumulada de ${fmt(ROI.net24)} além dos custos totais. Sistema maduro, equipe treinada.`, badge: `ROI total: ${ROI.annualROI}%`, color: '#07A2AD', isFinal: true },
]

export const SOLUTION_BENEFITS = [
  { icon: '🤖', title: 'IA para Triagem', desc: 'Leitura automática de currículos e correspondência inteligente com vagas' },
  { icon: '📱', title: 'Página de Carreiras', desc: 'Link profissional sem necessidade de login para candidatos' },
  { icon: '🔗', title: '25+ Portais Integrados', desc: 'LinkedIn, Indeed, InfoJobs e outros automaticamente' },
  { icon: '📧', title: 'Comunicação Automatizada', desc: 'E-mails e WhatsApp integrados com templates personalizados' },
  { icon: '📊', title: 'Dashboard de Indicadores', desc: 'Tempo de contratação, origem de candidatos e KPIs em tempo real' },
  { icon: '🏢', title: 'Multi-CNPJ (27 empresas)', desc: 'Gestão centralizada com acesso cruzado entre unidades' },
  { icon: '✅', title: 'Fluxo de Aprovação', desc: 'Requisição de vagas com aprovação formal antes da publicação' },
  { icon: '🔒', title: 'LGPD Compliance', desc: 'Gestão de consentimento e renovação automática a cada 6 meses' },
]

// Utility: format BRL
export function fmt(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// Phase ramp-up savings function
export function savingsAtMonth(m) {
  if (m <= 1) return 1400 // Month 1: only Catho
  if (m <= 3) return 28400 // Months 2-3: Recruitment fully active
  if (m <= 6) return 33900 // Months 4-6: +Onboarding
  return TOTAL_SAVING_MONTHLY // Month 7+: All modules
}

// Build cumulative projection arrays
export function buildProjection() {
  const labels = ['Mês 0']
  const cumInvest = [INVESTMENT.onboarding] // starts with onboarding cost
  const cumSavings = [0]

  for (let i = 1; i <= 24; i++) {
    labels.push('Mês ' + i)
    cumInvest.push(cumInvest[i - 1] + INVESTMENT.monthly)
    cumSavings.push(cumSavings[i - 1] + savingsAtMonth(i))
  }

  return { labels, cumInvest, cumSavings }
}
