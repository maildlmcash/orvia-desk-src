import { createFileRoute } from "@tanstack/react-router";
import { OrderRoom } from "@/components/p2p/trade";

export const Route = createFileRoute("/order/$orderId")({
  component: function OrderPage() {
    const { orderId } = Route.useParams();
    return <OrderRoom orderId={orderId} />;
  },
});
