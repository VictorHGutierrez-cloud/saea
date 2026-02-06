// ============================================
// SAEA - CENTRAL DATA FILE
// All numbers, text, and configuration
// ============================================

export const CLIENT = {
  name: 'Grupo SAEA',
  fullName: 'Sociedade Agostiniana de Educação e Assistência',
  segment: 'Educação - Rede de Colégios',
  employees: 2500,
  cnpjs: 27,
  units: ['Sede', 'Mendel (~800+)', 'São José'],
  location: 'São Paulo - Zona Leste',
  hrTeam: ['Thays (Geral)', 'Fabiana (Sede)', 'Marisa (São José)', 'Stephanie (Mendel)'],
  president: 'Padre José',
}

export const INVESTMENT = {
  monthly: 15000,
  original: 20000,
  discount: '25%',
  priceProtection: '24 meses',
}

export const SAVINGS = [
  {
    id: 'cacato',
    label: 'Eliminação do Portal Catho',
    monthly: 1400,
    description: 'Portal de recrutamento que não será mais necessário (confirmado: R$1.400/mês).',
    calculation: 'Custo direto eliminado. Confirmado em reunião com Thays.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'triagem',
    label: 'Automação da Triagem de CVs',
    monthly: 5000,
    description: 'IA lê currículos e traz correspondência automática. Antes: 100 CVs/dia x 5min cada.',
    calculation: '7,3h/dia economizadas x R$32/hora x 22 dias úteis.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'comunicacao',
    label: 'Automação de Comunicações',
    monthly: 3200,
    description: 'Templates em massa substituem WhatsApp individual. Retorno automático a 100% dos candidatos.',
    calculation: 'Tempo de comunicação individual eliminado para ~200 contatos/dia.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'documentos',
    label: 'Gestão de Documentos Digitais',
    monthly: 2000,
    description: 'Banco de horas, contratos e termos para 900+ colaboradores digitalizados.',
    calculation: 'Eliminação de impressão, distribuição física e armazenamento.',
    phase: 2,
    color: 'secondary',
  },
  {
    id: 'vagas',
    label: 'Redução do Custo de Vagas Abertas',
    monthly: 5000,
    description: 'Tempo de fechamento reduzido de 4 meses para 45 dias. Menos perda de produtividade.',
    calculation: '50 posições/ano x 75 dias economizados x custo de produtividade perdida.',
    phase: 1,
    color: 'primary',
  },
  {
    id: 'assinatura',
    label: 'Assinatura Eletrônica Inclusa',
    monthly: 2500,
    description: 'Valor equivalente a ferramenta standalone (DocuSign) para 2.500 colaboradores.',
    calculation: 'Factorial inclui assinatura eletrônica ilimitada com validade jurídica.',
    phase: 2,
    color: 'secondary',
  },
  {
    id: 'compliance',
    label: 'Compliance e Redução de Risco Jurídico',
    monthly: 1500,
    description: 'LGPD automatizado, registros digitais assinados, evidências para processos trabalhistas.',
    calculation: 'Redução de passivo jurídico baseado em média de processos trabalhistas.',
    phase: 3,
    color: 'danger',
  },
]

export const TOTAL_SAVING_MONTHLY = SAVINGS.reduce((a, s) => a + s.monthly, 0) // 20600

export const ROI = {
  netMonthly: TOTAL_SAVING_MONTHLY - INVESTMENT.monthly, // 5600
  annualROI: ((TOTAL_SAVING_MONTHLY * 12 - INVESTMENT.monthly * 12) / (INVESTMENT.monthly * 12) * 100).toFixed(1), // 37.3
  paybackMonths: 8.7,
  net12: (TOTAL_SAVING_MONTHLY - INVESTMENT.monthly) * 12, // 67200
  net24: (TOTAL_SAVING_MONTHLY - INVESTMENT.monthly) * 24, // 134400
  totalSavings24: TOTAL_SAVING_MONTHLY * 24, // 494400
  totalInvest24: INVESTMENT.monthly * 24, // 360000
}

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
    saving: 14600,
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
    savingsNote: 'Catho (-R$1.400) + Triagem CV (-R$5.000) + Comunicação (-R$3.200) + Vagas mais rápidas (-R$5.000)',
  },
  {
    id: 2,
    title: 'Onboarding Digital',
    label: 'Fase 2',
    saving: 4500,
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
    savingsNote: 'Documentos (-R$2.000) + Assinatura eletrônica (-R$2.500)',
  },
  {
    id: 3,
    title: 'Avaliação e Desempenho',
    label: 'Fase 3',
    saving: 1500,
    color: '#FF355E',
    colorClass: 'brand-danger',
    timing: 'Mês 7-9',
    features: [
      'Avaliação de desempenho (piloto Mendel 800+)',
      'Pesquisas de pulso e clima organizacional',
      'Feedback contínuo com gestores',
      'Metas e objetivos por colaborador',
      'Compliance LGPD automatizado',
      'Relatórios de RH e Analytics',
    ],
    savingsNote: 'Compliance e risco jurídico (-R$1.500)',
  },
]

export const TIMELINE = [
  { month: '1', title: 'Kickoff e Configuração', desc: 'Criação das bases, CNPJs, locais de trabalho. Configuração da página de carreiras e integração com LinkedIn.', badge: 'Início da economia Catho: -R$1.400/mês', color: '#07A2AD' },
  { month: '2-3', title: 'Recrutamento Operacional', desc: 'Vagas publicadas, banco de talentos ativo, IA triando currículos, comunicação automatizada funcionando.', badge: 'Economia sobe para R$14.600/mês', color: '#07A2AD' },
  { month: '4-6', title: 'Onboarding Digital Ativo', desc: 'Trilhas de onboarding por cargo, assinatura eletrônica de contratos, coleta digital de documentos.', badge: 'Economia sobe para R$19.100/mês', color: '#FFB940' },
  { month: '7-9', title: 'Avaliação de Desempenho', desc: 'Primeiro ciclo de avaliação no Mendel (800+ colaboradores). Pesquisas de clima e feedback contínuo.', badge: 'Economia total: R$20.600/mês', color: '#FF355E' },
  { month: '~9', title: 'PAYBACK - Investimento Recuperado', desc: 'Todo o investimento acumulado foi recuperado pelas economias geradas. Daqui em diante: benefício líquido puro.', badge: null, color: '#07A2AD', isPayback: true },
  { month: '24', title: 'Resultado Final', desc: 'Economia líquida acumulada de R$134.400 além do investimento total. Sistema maduro, equipe treinada, processos otimizados.', badge: 'ROI total: 37,3%', color: '#07A2AD', isFinal: true },
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
export const fmt = (v) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })

// Build cumulative projection arrays
export function buildProjection() {
  const labels = ['Mês 0']
  const cumInvest = [0]
  const cumSavings = [0]

  function savingsAtMonth(m) {
    if (m <= 1) return 1400
    if (m <= 3) return 1400 + 5000 + 3200 + 5000
    if (m <= 6) return 1400 + 5000 + 3200 + 5000 + 2000 + 2500
    return TOTAL_SAVING_MONTHLY
  }

  for (let i = 1; i <= 24; i++) {
    labels.push('Mês ' + i)
    cumInvest.push(cumInvest[i - 1] + INVESTMENT.monthly)
    cumSavings.push(cumSavings[i - 1] + savingsAtMonth(i))
  }

  return { labels, cumInvest, cumSavings }
}
