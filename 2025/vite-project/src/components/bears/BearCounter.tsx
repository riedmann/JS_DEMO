import { useBearStore } from "../../utils/store/useBearStore";

type Props = {};

export default function BearCounter(props: Props) {
  const bears = useBearStore((state: any) => state.bears);
  return <div>BearCounter:{bears}</div>;
}
