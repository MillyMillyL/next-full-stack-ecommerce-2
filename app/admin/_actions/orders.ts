import db from "@/db/db";

export async function deleteOrder(id: string) {
  const order = await db.order.delete({ where: { id } });
  if (order == null) return "Not Found";
  return order;
}
