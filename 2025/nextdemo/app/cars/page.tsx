import { formatCurrency } from "@/utils/utils";

type Props = {};

export default function page({}: Props) {
  const money = formatCurrency(40);
  return (
    <div>
      <h1>Cars</h1>
      {money}
    </div>
  );
}
