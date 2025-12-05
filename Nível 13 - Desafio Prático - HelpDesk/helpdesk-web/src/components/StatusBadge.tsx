import help from "../assets/icons/help.svg";
import clock from "../assets/icons/clock.svg";
import check from "../assets/icons/circle-check.svg";

export function StatusBadge({ status }: { status: Ticket["status"] }) {
  const styles = {
    Aberto: "bg-red-100/20 text-red-100",
    "Em atendimento": "bg-blue-300/20 text-blue-300",
    Encerrado: "bg-green-100/20 text-green-100",
  };

  return (
    <div className={`w-max p-1.5 rounded-full flex gap-1.5 text-xs font-bold ${styles[status]}`}>
      <img
        src={
          status === "Aberto"
            ? help
            : status === "Em atendimento"
            ? clock
            : check
        }
        alt="Ícone de Status"
      />
      <span className="hidden xl:flex">
        {status}
      </span>
    </div>
  );
}
