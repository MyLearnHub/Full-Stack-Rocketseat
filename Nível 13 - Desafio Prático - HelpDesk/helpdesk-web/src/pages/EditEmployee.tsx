import { useNavigate } from "react-router";
import arrowLeft from "../assets/icons/arrow-left.svg";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ScheduleBadge } from "../components/ScheduleBadge";
import avatar from "../assets/avatar/carlos-silva.svg";

export function EditEmployee() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[800px] w-full">
      <div className="w-full mb-4 xl:mb-6">
        <div
          className="flex items-center gap-1 cursor-pointer p-0.5 mb-1 xl:gap-2"
          onClick={() => navigate(-1)}
        >
          <img src={arrowLeft} alt="Ícone de voltar" />
          <span className="text-xs font-bold text-gray-200">Voltar</span>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <Title>Perfil de técnico</Title>

          <div className="flex gap-2 mt-3">
            <Button variant="secondary" className="px-4">
              Cancelar
            </Button>
            <Button className="px-4">Salvar</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 xl:gap-6 xl:flex-row">
        <form className="border border-gray-100 w-full flex flex-col gap-5 p-5 rounded-[10px] h-min xl:max-w-[296px] xl:p-6 xl:gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-bold text-gray-300">Dados pessoais</h2>
            <p className="text-xs text-gray-200">
              Defina as informações do perfil de técnico
            </p>
          </div>

          <img src={avatar} alt="Avatar" className="w-12" />

          <div className="flex flex-col gap-4">
            <Input
              name="name"
              required
              legend="Nome"
              placeholder="Nome completo"
              value={"Carlos Silva"}
              />
            <Input
              name="email"
              required
              legend="E-mail"
              type="email"
              placeholder="exemplo@mail.com"
              value={"carlos.silva@test.com"}
            />
          </div>
        </form>

        <div className="border border-gray-100 max-w-[480px] w-full p-5 rounded-[10px] h-min xl:p-6">
          <div className="flex flex-col gap-1 mb-5 xl:mb-6">
            <h2 className="text-md font-bold text-gray-300">
              Horários de atendimento
            </h2>
            <p className="text-xs text-gray-200">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </p>
          </div>

          <div className="flex flex-col gap-4 xl:gap-5">
            <div>
              <h3 className="text-xxs font-bold text-gray-200 uppercase">
                Manhã
              </h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <ScheduleBadge hour="07:00" />
                <ScheduleBadge hour="08:00" />
                <ScheduleBadge hour="09:00" />
                <ScheduleBadge hour="10:00" />
                <ScheduleBadge hour="11:00" />
                <ScheduleBadge hour="12:00" />
              </div>
            </div>
            <div>
              <h3 className="text-xxs font-bold text-gray-200 uppercase">
                Tarde
              </h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <ScheduleBadge hour="13:00" />
                <ScheduleBadge hour="14:00" />
                <ScheduleBadge hour="15:00" />
                <ScheduleBadge hour="16:00" />
                <ScheduleBadge hour="17:00" />
                <ScheduleBadge hour="18:00" />
              </div>
            </div>
            <div>
              <h3 className="text-xxs font-bold text-gray-200 uppercase">
                Noite
              </h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <ScheduleBadge hour="19:00" />
                <ScheduleBadge hour="20:00" />
                <ScheduleBadge hour="21:00" />
                <ScheduleBadge hour="22:00" />
                <ScheduleBadge hour="23:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
