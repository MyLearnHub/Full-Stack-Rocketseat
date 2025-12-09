import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Title } from "../components/Title";
import { SERVICES, SERVICES_KEYS } from "../utils/services";
import { Button } from "../components/Button";
import { api } from "../services/api";

export function NewTicket() {
  const [service, setService] = useState<keyof typeof SERVICES | "">("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const rawToken = localStorage.getItem("@helpdesk:token");
      const token = rawToken ? JSON.parse(rawToken) : null;

      if (!token) {
        setError("Você precisa estar autenticado.");
        return;
      }

      const response = await api.post(
        "/tickets",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Chamado criado com sucesso!");
      setTitle("");
      setDescription("");
      setService("");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Erro ao criar chamado.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="mb-4 xl:mb-6 mx-auto max-w-[800px]">
        <Title>Meus chamados</Title>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[800px] mx-auto flex gap-5 flex-col xl:flex-row xl:gap-6"
      >
        <div className="max-w-[480px] w-full p-5 border border-gray-100 rounded-[10px] flex gap-6 flex-col xl:p-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-bold text-gray-300">Informações</h2>
            <p className="text-xs text-gray-200">
              Configure os dados do chamado
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Input
              name="title"
              required
              legend="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <Textarea
              name="description"
              required
              legend="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Select
              legend="Categoria de serviço"
              value={service}
              onChange={(v) => setService(v)}
              items={SERVICES_KEYS.map((key) => ({
                value: key,
                label: SERVICES[key],
              }))}
            />
          </div>
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
              <p className="text-sm">
                {service ? SERVICES[service] : "Nenhuma selecionada"}
              </p>
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

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Criando..." : "Criar chamado"}
          </Button>
        </div>
      </form>
    </div>
  );
}
