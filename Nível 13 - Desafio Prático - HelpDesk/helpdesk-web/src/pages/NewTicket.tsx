import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Title } from "../components/Title";
import { SERVICES, SERVICES_KEYS } from "../utils/services";
import { Button } from "../components/Button";

export function NewTicket() {
  const [service, setService] = useState("");

  return (
    <div className="w-full">
      <div className="mb-4 xl:mb-6 mx-auto max-w-[800px]">
        <Title>Meus chamados</Title>
      </div>

      <div className="w-full max-w-[800px] mx-auto flex gap-5 flex-col xl:flex-row xl:gap-6">
        <div className="max-w-[480px] w-full p-5 border border-gray-100 rounded-[10px] flex gap-6 flex-col xl:p-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-bold text-gray-300">Informações</h2>
            <p className="text-xs text-gray-200">
              Configure os dias e horários em que você está disponível para
              atender chamados
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <Input
              name="title"
              required
              legend="Título"
              placeholder="Digite um título para o chamado"
            />
            <Textarea
              name="description"
              required
              legend="Descrição"
              placeholder="Descreva o que está acontecendo"
            />
            <Select
              legend="Categoria de serviço"
              value={service}
              onChange={(v) => setService(v)}
              items={SERVICES_KEYS.map((service) => ({
                value: service,
                label: SERVICES[service],
              }))}
            />
          </form>
        </div>

        <div className="w-full p-5 flex flex-col gap-5 border border-gray-100 rounded-[10px] h-min xl:max-w-[296px] xl:p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-bold text-gray-300">Resumo</h2>
            <p className="text-xs text-gray-200">Valores e detalhes</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xs font-bold text-gray-400">
                Categoria de serviço
              </h3>
              <p className="text-sm">Erro de rede</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xs font-bold text-gray-400">Custo inicial</h3>
              <p className="text-lg font-bold">
                <span className="text-xs mr-1">R$</span>200,00
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-200">
            O chamado será automaticamente atribuído a um técnico disponível
          </p>

          <Button>Criar chamado</Button>
        </div>
      </div>
    </div>
  );
}
