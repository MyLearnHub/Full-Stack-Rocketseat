export const SERVICES = {
  installation: "Instalação de Rede",
  dataRecovery: "Recuperação de Dados",
  hardwareMaintenance: "Manutenção de Hardware",
  softwareSupport: "Suporte de Software",
} as const;

export const SERVICES_KEYS = Object.keys(SERVICES) as Array<
  keyof typeof SERVICES
>;
